---
title: "Arithmetical Functions"
desc: "Functions defined on positive integers; they are quite interesting."
order: 206
tags: ["symmetric"]
---

[(video)](https://www.youtube.com/watch?v=skTslDpxeL8)

An arithmetical function is just a function defined on positive integers. $f : 1, 2, 3, \ldots \to \mathbb{R}$ or some other domain.

# Strictly Multiplicative Functions

Take $f(n) = n^k$.

- $f(mn) = f(n)f(m)$ means that it is **strictly multiplicative**.

A simple example is $f(n) = n^k$.

Recall Legendre symbol from before, $f(n) = \left(\frac{n}{p}\right)$ is strictly multiplicative.

Another strictly multiplicative function example is the Liouville function $\lambda(n) = (-1)^{\Omega(n)}$ where $\Omega(n)$ is the number of prime factors. For example, $60=2^2 \times 3^1 \times 5^1$ so $\Omega(60)=2+1+1=4$.

Notice that $\Omega(mn) = \Omega(m) + \Omega(n)$ and therefore $\lambda(mn) = \lambda(m)\lambda(n)$.

# Multiplicative Functions

These are functions where $f(mn) = f(m)f(n)$ when $(m,n)=1$ (they are coprime).

## $d(n)$ number of divisors

An example: $f(n) = d(n)$ which is just the number of divisors of $n$. In this case, $d(60)$ may be a bit laborious to compute by hand, but we can be more clever. Look at the factors of $60 = 2^2 \times 3^1 \times 5^1$. So, its divisors can be of the form $2^a \times 3^b \times 5^c$ where $a\leq 2, b \leq 1, c\leq 1$. This gives us $3\times2\times2=12$ possibilities, which is our answer.

In general, given $n = p_1^{n_1} p_2^{n_2} \ldots$ then $d(n)=(n_1+1)(n_2+1)\ldots$. If two numbers $m,n$ are coprime, then $d(mn) = d(m)d(n)$.

## $\sigma(n)$ sum of divisors

Another example is $\sigma(n)$ which is the sum of divisors. What is $\sigma(60)$? Again we can look at the factors $60 = 2^2 \times 3^1 \times 5^1$ and we take the sum as $(1 + 2^1 + 2^2)(1 + 3^1)(1 + 5^1) = 156$.

In general, given $n = p_1^{n_1} p_2^{n_2} \ldots$ then $\sigma(n)=(1 + p_1 + \ldots + p_1^{n_1})(1 + p_2 + \ldots + p_2^{n_2})\ldots$ and notice that these are geometric series, so $\sigma(n) = (\frac{p_1^{n_1+1}-1}{p_1-1})(\frac{p_2^{n_2+1}-1}{p_2-1})\ldots$. If $n=pq$ for two primes $p,q$ then $\sigma(n)=(p+1)(q+1)$.

## Euler's Phi Function $\phi(n)$

Euler's $\phi$ function is also a well-known multiplicative function. $\phi(n)$ is the number of numbers $\leq n$ and are coprime to $n$. Turns out that $\phi(mn)=\phi(m)\phi(n)$ if $(m,n)=1$.

## Ramanujan Tau Function $\tau(n)$

Take $f(q)=q(1-q)^{24}(1-q^2)^{24}(1-q^3)^{24}\ldots$. Turns out that this is equal to: $q-24q^2 + 252q^3 + 1472q^4 + 4830q^5 - 6048q^6 + \ldots = \sum \tau(n) q^n$.

**Ramanujan** noticed that $\tau(mn)=\tau(m)\tau(n)$ when $(m,n)=1$.

## Moebius Function $\mu(n)$

Let $\mu(n)$ to be:

$$
\mu(n) =
\begin{cases}
0 & \text{if $n$ divisible by a square $> 1$} \\
(-1)^{\omega(n)} & \text{if $n$ divisible by $\omega(n)$ primes}
\end{cases}
$$

Turns out $\mu(mn)=\mu(m)\mu(n)$ when $(m,n)=1$. Well that is a pretty funny function right? Check this out: recall the Zeta function

$$
\zeta(s)=\frac{1}{1^s} + \frac{1}{2^s} + \frac{1}{3^s} + \ldots
$$

If you look at its inverse:

$$
\frac{1}{\zeta(s)} = \frac{1}{1^s} + \frac{\mu(2)}{2^s} + \frac{\mu(3)}{3^s} + \ldots
$$

# Perfect Numbers

A perfect number is one that is equal to the sum of all its proper divisors. So any number where $2n=\sigma(n)$ holds. Euclid gave a way to find perfect numbers in his Elements book. If you take $2^{p-1}(2^{p}-1)$ where $2^p-1$ is a prime, this number is perfect. (easy to prove)

Euler found that even perfect numbers can only be in this form. Suppose $n=2^ap^bq^c\ldots$ where $p,q,\ldots$ are odd primes. It has divisors:

$$
\{1, 2, 4, \ldots, 2^n\}\times\{1, p, p^2, \ldots, p^b\}\times\ldots
$$

Now suppose you take the sum $(1 + 2 + \ldots + 2^a)(p^b + p^{b-1})q^c\ldots$. When you multiply these you have $(2^{a+1}-1)(p+1)p^{b-1}q^c\ldots$. Well, this is equal to

$$
2n \times \left(1 - \frac{1}{2^{a-1}}\right)\times\left(1+\frac{1}{p}\right) \times \ldots
$$

We have only taken a part of the sum of divisors, and we already have $2n$ which was the condition to be a perfect number, so the remaining terms have the inequality:

$$
\left(1 - \frac{1}{2^{a-1}}\right)\times\left(1+\frac{1}{p}\right) \times \ldots \leq 1
$$

On the other hand, notice that $2^{a+1}-1$ is an odd number within the whole sum, but our number is even ($2n$). So, there must be a smallest prime factor $p$ that divides $2^{a+1}-1$ (so that the result is not odd). This means that $p \leq 2^{a+1}-1$. This implies that

$$
\left(1 - \frac{1}{2^{a-1}}\right)\times\left(1+\frac{1}{p}\right) \times \ldots \geq 1
$$

We have $\leq 1$ and $\geq 1$ at the same time, so that means this is in fact equal to 1.

Therefore, we see that we can't really have any other divisors other than $p$, and $p=2^{a+1}-1$. So, even perfect numbers must be of form: $2^{a}(2^{a+1}-1)$. This gives us even perfect numbers, but are there infinitely many even perfect numbers? We don't know yet, but probably yes.

## Odd Perfect Numbers

Are there any odd perfect numbers? Well, nobody knows. This is quite an old problem, discussed around 2000 years ago! You could put some nice restrictions on it though. Suppose:

$$
n = p_1^{n_1}p_2^{n_2}\ldots
$$

and $\sigma(n)=2n$. Looking at $\sigma(n)$:

$$
\sigma(n)=2n=(1+p_1+\ldots+p_1^{n_1})(1+p_2+\ldots+p_2^{n_2})\ldots
$$

Notice that if $n_1$ is odd, the sum $1 + p_1 + \ldots p_1^{n_1}$ is even. Since the product should be $2n$, only one of these sums may be even, i.e. only one exponent can be odd. So, the other exponents are even numbers. This implies that $n$ is a prime times a square as in:

$$
n = p_1\times(p_1^{n_1-1}\times p_2^{n_2/2}\times \ldots)^2
$$

## Landau's Hard Problems about Primes

- Are all even numbers sum of two primes, $2n=p+q$? (**Goldbach**)
- Can we find infinitely many primes $p,q$ such that $p-q=2$? **(Twin Primes)**
- Can we always find a prime $p$ for any $n$ such that $n^2 < p < (n+1)^2$?
- Can we find infinitely many primes of the form $p=n^2+1$?

We don't know the answer to these, we don’t even have an idea on how to approach them. However, we believe the answer is yes.
