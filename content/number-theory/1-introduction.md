---
title: 'Introduction to Number Theory'
desc: 'Of course, everything begins with primes!'
order: 1
cat: 'number-theory'
---

[(video)](https://www.youtube.com/watch?v=EzE6it9kAsI)

# Primes

Primes are numbers divisible by 1 and itself, such as 2, 3, 5, ...

## How to find them?

There are infinitely many primes. Prove as follows:

1. Suppose there are finitely many $\{p_1, p_2, ..., p_m\}$
2. Find $p_1 \times p_2 \times ... \times p_m + 1$.
3. Let $q$ be a prime factor of this number. It cant divide any prime known so far, because that would mean it should divide 1 too. So, $q$ is a new prime.

## How to find large primes?

**Mersenne primes** are in the form $2^n - 1$ for prime $n$. There are also **Fermat primes**, of the form $2^{2^n} + 1$.

_NOTE:_ $2^{ab} - 1 = (2^a - 1)(2^{ab - a} + \ldots + 1)$

_NOTE:_ If $a$ odd, then $2^a + 1$ divides $2^{ab} + 1$.

_NOTE:_ **Gauss** discovered that regular polygons with the number of sides equal to a Fermat prime can be constructed using a ruler and compass.

## Is there an _easy_ way to generate _large_ primes?

In other words, is there a non-constant polynomial $f(n)$ such that the result is a prime? **NO!**

**Proof:** Suppose you have $f(n) = a_kn^k + \ldots + a_1k + a_0$. If $a_0 > 1$ then $f(a_0)$ is composite. If $a_0 \ne 1$, then you can find $f(n+k)$ that has the same argument.

## How many primes are there up to a given value?

This is famously shown as $\Pi(x)$.

**Gauss**: $\Pi(x) \cong \frac{x}{\log x}$. Informally, a number $n$ has a chance of being prime with probability $\frac{1}{\log n}$.

**Riemann**: Suppose we want to find prime powers too, where $p^n$ is counted as $1/n$. Denote this as $\Pi'(x)$. Let $\text{Li}(x) = \int_{0}^{x} \frac{1}{\log x} dx$ (limit integral). **Riemann** amazingly found that:

$$
\Pi'(x) = \text{Li}(x) - \sum_{\rho} \text{Li}(x^\rho)
$$

where $\rho$ is the zeros of the Zeta function!

_NOTE:_ $\log x$ throughout this course always refers to natural logarithm.

# Fundamental Theorem of Arithmetic

Every integer is a product of primes in a unique way (up to order). **Euler** interpreted this as a factorization of the Zeta function:

$$
\zeta(s) = \frac{1}{1^s} + \frac{1}{2^s} + \frac{1}{3^s} + \frac{1}{4^s} + \ldots = \frac{1}{1 - 2^{-s}}\times\frac{1}{1 - 3^{-s}}\times\frac{1}{1 - 5^{-s}}\times \ldots
$$

This makes a lot of sense if you think the geometric series of the product terms:

$$
\zeta(s) = \left(1 + \frac{1}{2^s} + \frac{1}{4^s} + \ldots\right)\left(1 + \frac{1}{3^s} + \frac{1}{9^s} + \ldots\right)\left(1 + \frac{1}{5^s} + \frac{1}{25^s}\right)\ldots
$$

You can choose for example $\frac{1}{2^s}$, $\frac{1}{9^s}$ and 1 everywhere else, to obtain $\frac{1}{18^s}$.

This also provides a proof or infinitude of primes: $\zeta(1)$ is a diverging harmonic series. So, the product should also be infinite, which requires infinitely many primes!

## Diophantine Equations

These are the equations where we seek integer solutions.

- $x^2 + y^2 = z^2$ (Pythagoras)
- $2x^2 = y^2$ which means find $\frac{y}{x} = \sqrt{2}$. This surprised ancient Greek people who thought all numbers were rational!
- $x^n + y^n = z^n$ for $x,y,z > 0$ and $n \geq 3$. (Fermat's Last Theorem)

It turns out that finding solutions to most Diophantine Equations are hard. **Hilbert's 10th problem** asks: Is there an algorithm to solve all Diophantine Equations? The answer turned out to be no! (**Robinson**, **Davies**, **Putnam**, and later **Matiyasevich**).
