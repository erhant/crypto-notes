---
title: "Pseduo-Random Functions & Generators"
desc: "We describe pseudo-random functions and generators."
order: 7
tags: ["symmetric"]
---

# Pseudo-random Functions

Denote the set of all function that map $\{0, 1\}^n \to \{0, 1\}^n$ as $\text{Func}_n$. Note that this a HUGE set, with the size $2^{n2^n}$.

Now, let $F : \{0, 1\}^* \times \{0, 1\}^* \to \{0, 1\}^*$ be an efficiently computable function. Define $F_k(x) := F(k, x)$. Here, we refer to $k$ as key. Assume that $F$ is length preserving : $F(k, x)$ is only defined if $|k| = |x|$, in which case $|F(k, x)| = |k| = |x|$. Notice that choosing $k \gets \{0, 1\}^n$ is then equivalent to choosing the function $F_k : \{0, 1\}^n \to \{0, 1\}^n$. In other words, $F$ defines a distribution over functions in $\text{Func}_n$.

We define that $F$ is a pseudo-random function if $F_k$ for a uniform key $k$ is indistinguishable from a uniform function $f \in \text{Func}_n$. More formally, for all distinguishers $D$:

$$
|\Pr_{k \gets \{0, 1\}^n}[D^{F_k(.)} = 1] - \Pr_{f \gets \text{Func}_n}[D^{f(.)} = 1] | \leq \text{negl}(n)
$$

where $F_k : \{0, 1\}^n \to \{0, 1\}^n$ for some $n' = \text{poly}(n)$.

It is easy to think of an interactive proof where the distinguisher keeps querying $x$ to get $f(x)$ in one scenario, and $F_k(x)$ in the other; if it can't distinguish the difference after polynomially many such queries, our dear $F_k$ is a pseudo-random function!

_NOTE:_ Given a PRF $F$, we can immediately obtain a PRG $G$. For example:

$$
G(k) = F_k(00\ldots0) || F_k(00\ldots01)
$$

where $||$ is concatenation.

# Pseudo-random Permutations

Let $F$ be a length-preserving keyed function. Then, $F$ is a keyed-permutation if:

- $F_k$ is a bijection for every $k$, meaning that $F_k$ is invertible.
- $F^{-1}_k$ is efficiently computable, where $F_k(F_k^{-1}(x)) = x$.

Essentially, a PRF with $n' = n$ and bijection is a PRP.
