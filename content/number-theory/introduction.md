[(video 1)](https://www.youtube.com/watch?v=EzE6it9kAsI) [(video 2)](https://www.youtube.com/watch?v=mduJOLdKrak)

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

**Gauss** discovered that regular polygons with the number of sides equal to a Fermat prime can be constructed using a ruler and compass.

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

where $\rho$ is the zeros of the Zeta function! By the way, $\log x$ throughout this course always refers to the natural logarithm.

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

# Congruences

**Q:** Is 1234567 a square?

**A:** No, because the last digit is not possible to be 7 for square numbers. So we kind of look at the number in modulo 10.

$$
a \equiv b \pmod m
$$

This notation is by **Gauss**, and it means that $a-b$ is divisible by $m$. In other words, $m \mid a-b$.

**Q:** Can you solve $1000003 = x^2 + y^2$?

**A:** You can realize that $x^2 \equiv 0,1 \mod 4$. Then $x^2 + y^2 \equiv (0,1) + (0,1) \equiv 0,1,2 \mod 4$. So, the number can not have 3 as the last digit, thus the equation does not have any integer solutions.

## Fermat's Little Theorem

$$
x^p \equiv x \pmod p \text{\hspace{4ex}($p$ prime)}
$$

$$
x^{p-1} \equiv 1 \pmod p \text{\hspace{4ex}($x$ not divisible by $p$)}
$$

**Euler** also found that $x^{\phi(m)} \equiv 1 \pmod m$ for $x,m$ coprime and $\phi(m) =$ number of integers less than an coprime to $m$. For example*:* $\phi(12) = |\{1, 5, 7, 12\}| = 4$

Suppose you want to test if $n$ is prime for very large $n$. We can check if $2^n \equiv 2 \pmod n$ (which can be done efficiently).

- If not, then $n$ is definitely not a prime.
- If yes, then we do not know, but it could be a prime.

For Diophantine equations, if $f(x,y,z) = 0$ then $f(x,y,z) \equiv 0 \pmod m$. The reverse is not always true, and **Hasse Principle** describes that. If the latter turns out to be true for all $m$, then most likely $f(x,y,z) = 0$.

## Quadratic Residue

Can we solve $x^2 \equiv a \pmod p$ (p prime)? Here, $a$ is the quadratic residue. **Legendre** symbol is a pretty useful notation about this:

$$
\left(\frac{a}{p}\right) =
\begin{cases}
+1 & \text{if $a$ square$\bmod p$ and $a,p$ coprime} \\
-1 & \text{if $a$ is not square$\bmod p$ and $a,p$ coprime} \\
0 & \text{if $a$ is divisible by $p$}
\end{cases}
$$

## Quadratic Reciprocity

Euler found a relationship between $\left(\frac{p}{q}\right)$ and $\left(\frac{q}{p}\right)$ for $p,q$ odd primes.

- $\left(\frac{p}{q}\right) = 1$ if $x^2 = p + qy$ has an integer solution.
- $\left(\frac{q}{p}\right) = 1$ if $x^2 = q + py$ has an integer solution.

What Euler discovered is that:

- $\left(\frac{p}{q}\right) = \left(\frac{q}{p}\right)$ if $q$ or $p \equiv 1 \pmod 4$.
- $\left(\frac{p}{q}\right) \not= \left(\frac{q}{p}\right)$ if $q$ and $p \equiv 3 \pmod 4$ and of course $p \not= q$.

This indicates that there is an amazing hidden structure in this seemingly unrelated equations. Such feeling will happen a lot in Number Theory :).

**Q:** Is 3 quadratic residue of 71?
**A:** This is asking if $\left(\frac{3}{71}\right) = 1$. We can check instead if $\left(\frac{71}{3}\right) = 1$. This is easy to find, as $71 \equiv 2 \pmod 3$ and 2 is not a square, so $\left(\frac{71}{3}\right) = -1$.

# Additive Number Theory

**Goldbach Conjecture**: Is every even number a sum of 2 primes? Examples are $12 = 5 + 7$, $14 = 7 + 7$ and so on. The answer: we don't know! **Chen** managed to show that every even number is a sum of prime and a product of two primes ($p + qr$),

**Twin Prime Conjecture**: Are there infinitely many primes $p$ such that $p+2$ is also prime? We don't know this too, but **Zhang** proved that $p$ and $p+k$ for $k$ in the order of millions will always have a prime.

**Arithmetic Progressions**: Can you find arithmetic progressions of primes, such as $5, 11, 17, 23, 29, \ldots$? **Dirichlet** has shown that any arithmetic progression in the form $a + nb$ has infinitely many primes.

# Recreational Number Theory

**Perfect Numbers**: A perfect number is equal to the sum of its proper divisors. Example: $6 = 1 + 2 + 3$.

**Amicable Numbers**: Two numbers are amicable if the sum of their proper divisors give each other, such as 220 and 284.

**Collatz Conjecture**: Suppose you map $n \to 3n+1$ for odd $n$ and $n \to n/2$ for even $n$. Doing this repeatedly, do you always reach to 1 in the end for all $n$? We do not know yet!

**Sum of Digits**: Many examples are there for recreational mathematics concerning digit sums. For example, $370 = 3^3 + 7^3 + 0^3$.

# Algebraic Number Theory

As an example of algebraic number, consider $m + ni$ for $i=\sqrt{-1}$. These are called **Gaussian Integers** and they have a unique factorization. For example, $5 = (2 + i)(2 - i) = 2^2 + 1^2$.

Notice that $m^2 + n^2 = (m + ni)(m - ni)$. Sum of squares turn out to be quite special.

Fermat has shown that a prime $p \equiv 1 \pmod 4$ can be written as $p = m^2 + n^2$. Quite surprising.

# Combinatorial Number Theory

An example would be partitioning. $p(n)$ is the number of partitions that you can write $n$ as a sum of smaller integers. $p(5) = 7$ because there are 7 different ways to write $5 = 4 + 1 = 3 + 2 = 3 + 1 + 1 = \ldots$

It turns out that $p(5n + 4)$ is divisible by 5, for seemingly no reason at all. Looking at the sum of:

$$
\sum p(n) q^n = 1 + q + 2q + 3q^3 + 5q^4 + 7q^5 + \ldots
$$

Euler discovered that this is equal to:

$$
\frac{1}{1-q}\times\frac{1}{1-q^2}\times\frac{1}{1-q^3}\times \ldots
$$
