---
title: 'Building a SNARK - Part I'
desc: 'We look at building a SNARK in two steps: functional commitment scheme and an interactive oracle proof.'
order: 2
cat: 'zkhack'
---

[(video)](https://www.youtube.com/watch?v=J4pVTamUBvU)

There are various paradigms on building SNARKs, but the general paradigm is two step:

1. A **functional commitment scheme**, where most of cryptography takes place
2. A suitable **interactive oracle proof** (IOP), where most of the information theory takes place

# Functional Commitment Scheme

Well, first, what is a commitment scheme? A cryptographic commitment is like a physical-world envelope. For instance, Bob can put a data in an envelope, and when Alice receives this envelope she can be sure that Bob has committed to whatever value is in it. Alice can later reveal that value.

The commitment scheme has two algorithms:

- $commit(m, r) \to com$ for some randomly chosen $r$
- $verify(m, com, r) \to \text{accept or reject}$

The scheme must have the following properties:

- **Binding**: cannot produce two valid openings for $com$
- **Hiding**: $com$ reveals nothing about the committed data

There is a standard construction using hash functions. Fix a hash function $H : \mathcal{M} \times \mathcal{R} \to C$ where

- $commit(m, r) = H(m, r)$
- $verify(m, com, r) = \text{accept if } com = H(m, r)$

## Committing to a function

Choose a family of functions $\mathcal{F} = \{f : X \to Y\}$. What does it really mean to commit to a function? Well, consider the following interaction:

```mermaid
sequenceDiagram
	actor P as Prover
	actor V as Verifier

	note over P: f ∈ F
	P ->> V: com_f := commit(f, r)
	V ->> P: x ∈ X
	P ->> V: y ∈ Y, proof π
	note over V: Accept or Reject
```

Here, the proof $\pi$ is to show that $f(x) = y$ and $f \in \mathcal{F}$.

More formally, a functional commitment scheme for $\mathcal{F}$:

- $setup(\lambda) \to pp$ is public parameters $pp$
- $commit(pp, f, r) \to com_f$ is commitment to $f \in \mathcal{F}$ with $r \in \mathcal{R}$
  - this should be a **binding** scheme
  - optionally, it can be **hiding**, which is good for zk-SNARK
- $eval(P, V)$ with a prover $P$ and verifier $V$, where for a given $com_f$ and $x \in X, y \in Y$:
  - $P(pp, f, x, y, r) \to \text{short proof } \pi$, which is a SNARK for the relation: $f(x) = y$ and $f \in \mathcal{F}$ and $commit(pp, f, r) = com_f$.
  - $V(pp, com_f, x, y, \pi) \to \text{accept or reject}$
  - Basically, the $eval$ system is a SNARK

### Function Families

There are 3 very important functional commitment types:

- **Polynomial Commitments**: Committing to a univariate polynomial $f(X) \in \mathbb{F}_p^{(\leq d)}[X]$ where that fancy notation stands for the set of all univariate polynomials of degree at most $d$.
- **Multilinear Commitments**: Committing to a multilinear polynomial in $\mathbb{F}_p^{(\leq 1)}[X_1, \ldots, X_k]$ which is the set of all the multilinear polynomials in at most $k$ variables.
  - A multilinear polynomial is when all the variables have degree at most 1. Here is an example: $f(x_1, \ldots, x_7) = x_1x_3 + x_1x_4x_5 + x_7$.
- **Linear Commitments**: Committing to a linear function $f_{\overrightarrow{v}}(\overrightarrow{u}) = \langle  \overrightarrow{u}, \overrightarrow{v}\rangle = \sum_{i=1}^nu_iv_i$ which is just the dot product of two vectors.

Different SNARK systems may use different commitments. Note that linear commitments can be transformed into multilinear commitments, and those can be transformed into polynomial commitments. A good exercise!

From here on we will talk about Polynomial Commitments.

### Polynomial Commitment Scheme (PCS)

A PCS is a functional commitment for the family $\mathcal{F} = \mathbb{F}_p^{(\leq d)}[X]$. The prover commits to a univariate polynomial $f \in \mathbb{F}_p^{(\leq d)}[X]$, later, they can prove that $v = f(u)$ for some public $u, v \in \mathbb{F}_p$. As this is a SNARK, the proof size and verifier time should be $\mathcal{O}_\lambda(\log d)$.

- Using basic elliptic curves: Bulletproofs
- Using bilinear groups: KZG (trusted setup) (2010), Dory (transparent) (2020)
- Using groups of unknown order: Dark (20)
- Using hash functions only: based on FRI

We will focus on KZG, as it is much simpler and commonly used.

# KZG PCS

The name stands for Kate-Zaverucha-Goldberg. It operates on a cyclic group $\mathbb{G} := \{0, G, 2G, 3G, \ldots, (p-1)G\}$ of order $p$ where $G$ is the generator. Note that in such a setting, $pG = 0$.

## Setup

The setup phase $setup(\lambda) \to pp$ works as follows:

1. Sample random $\alpha \in \mathbb{F}_p$
2. $pp = (H_0 = G, H_1 = \alpha G, H_2 = \alpha^2 G, \ldots, H_d = \alpha ^ d G) \in \mathbb{G}^{d+1}$
3. Delete $\alpha$ or you get in trouble! (trusted setup)

Note that you can’t do something like $H_0 / H_1 = \alpha$ because division is not defined for these guys!

## Commitment

The commitment phase $commit(pp, f) \to com_f$ is as follows:

- Compute $com_f := f(\alpha) G \in \mathbb{G}$, but wait we don’t have $\alpha$ so what do we do?
- We have a univariate polynomial $f(X) = f_0 + f_1 X + \ldots + f_d X^d$
- We use the public parameters $pp$ to compute $com_f = f_0 H_0 + f_1H_1 + \ldots + f_dH_d$
- If you expand $H$ in there, you will notice that the entire thing is equal to $f(\alpha)G$.
- This is a **binding** commitment, but it is not **hiding** for now.

## Evaluation

We have $commit(pp, f) \to com_f$ where $com_f = f(\alpha)G \in \mathbb{G}$ at this point. The evaluation phase $eval(P, V)$ will work as follows:

- Prover $P(pp, f, u, v)$ has the goal of proving $f(u) = v$ and generate some proof $\pi$.
- Verifier $V(pp, com_f, u, v, \pi)$ will verify that proof.

The trick is to see that if $f(u) =v$ then $u$ is a root of $\hat{f} = f - v$. It is because $\hat{f}(u) = f(u)-v = v-v = 0$. There is a very well known result of this, that $(X-u)$ divides $\hat{f}$. This also means that there is quotient polynomial $\exists q \in \mathbb{F}_p[X]$ such that $q(x)(X-u) = f(X) - v$.

With this, the Prover will calculate the quotient polynomial $q(X)$ and will commit to it to find $com_q$. This will be the proof $\pi = com_q \in \mathbb{G}$. The verifier will accept the proof $\pi$ only if $(\alpha - u)com_q = com_f - vG$.

Note that verifier is using $\alpha$ here, even though it was secret. The truth is, it is not actually using $\alpha$ but instead uses a **pairing**, and the only thing verifier needs to know for that is $G$ and $H_1$, which are part of public parameters $pp$.

Computing $q(x)$ is pretty expensive for large $d$, and this part takes most of the computational time of the entire algorithm.

### Remarks

KZG has been generalized for committing to $k$-variate polynomials (PST 2013). There are many more generalizations of it. KZG also provides batch proofs, where a prover can prove a bunch of commitments in a single computation.

The **difficulty** with KZG is that it requires a trusted setup for $pp$, and $pp$ size is linear in $d$.

# Polynomial Interactive Oracle Proof

Now we are at the second part of a SNARK. Let $C(x, w)$ be some arithmetic circuit. Let $x \in \mathbb{F}_p^n$. Poly-IOP is a proof system that proves $\exists w : C(x,w) = 0$ as follows:

1. We preprocess the circuit $C$ as similar to previous steps. $setup(C) \to (S_p, S_v)$ where $S_v = (com_{f_0}, com_{f_{-1}}, \ldots, com_{f_{-s}})$.
2. An interactive proof is played as shown below:

```mermaid
sequenceDiagram
	actor P as Prover P(S_p, x, w)
	actor V as Verifier V(S_v, x)

	loop i = 1, 2, ..., (t-1)
	P ->> V: f_i ∈ F
	note over V: r_i ← F_p
	V ->> P: r_i
	end

	P ->> V: f_t ∈ F
	note over V: verify^(f_{-s}, ..., f_t)(x, r_1, ..., r_(t-1))
```

Here the $verify$ in the end is just an efficient function that can evaluate $f_i$ at any point in $\mathbb{F}_p$. Also note that $r_i$ is randomly chosen only after the prover has committed to $f_i$.

The Verifier here is just creating random numbers. Using Fiat-Shamir transform, such an interactive proof can be made non-interactive!

As usual, we expect the following properties:

- **Complete**: if $\exists w : C(x, w) = 0$ then verifier always accepts.
- **Knowledge Sound**: Let $x \in \mathbb{F}_p^n$ . For every $P*$ that convinces the verifier with some non-negligible probability $\beta$, there is an efficient extractor $E$ such that:

$$
\Pr[E(x, f_1, r_1, \ldots, f_{t-1}, r_{t-1}, f_t) \to w : C(x, w) = 0] \geq \beta - \epsilon
$$

for some negligible $\epsilon$.

- **Zero-Knowledge**: This is optional, but will be required for a zk-SNARK.

# The Resulting SNARK

The resulting SNARK will look the following: there will be $t$ number of polynomials committed, and $q$ number of evaluation queries (points) for the verification. This is parameterized as $(t, q)$ POLY-IOP.

For the SNARK:

- Prover send $t$ polynomial commitments
- During Poly-IOP verify, the PCS $eval$ is run $q$ times.
- Note that $eval$ is made non-interactive via Fiat-Shamir transform.

The length of the SNARK proof is $t$ polynomial commitments + $q$ evaluation proofs.

- Prover Time: $t \times \text{time}(commit) + q \times \text{time}(prove) + \text{time}(IOP_{prove})$
- Verifier Time: $q \times \text{time}(eval_{verify}) + \text{time}(IOP_{verify})$

Usually, both $t, q \leq 3$ so these times are really short, in fact, in constant time w.r.t the polynomial count which is awesome.
