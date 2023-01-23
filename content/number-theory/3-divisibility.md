---
title: 'Divisibility'
desc: 'We look at various divisibility algorithms, and also look at the good old Fibonacci.'
order: 3
cat: 'number-theory'
---

[(video)](https://www.youtube.com/watch?v=pVKhDtOjji8)

# Divisibility

If $a$ divides $b$, we show this as $a \mid b$. Note that this does not mean $b/a$ is defined, but rather means that $b = xa$ for some integer $x$. This allows $a$ to be 0 too.

- $a \mid 0$ is always true.
- $0 \mid b$ is false, unless $b = 0$ too.
- $2 \mid b$ is a fancy way of saying $b$ is even.

**Q:** Show that $6 \mid n(n+1)(n+2)$ for any $n$.

**A:** We can prove with the argument that one of those terms is even and another is divisible by 3. However, there is a better argument. We can consider the binomial $\binom{n+2}{3}$, which is the number of ways to choose 3 elements from $n+2$ values.

This gives $(n + 2) \times (n + 1) \times (n)$ to choose 3 elements, and they can be ordered in 6 different ways so we divide by 6. Since we are counting the choices here, the result is definitely an integer. As such, 6 divides $n(n+1)(n+2)$.

**Q:** Show that $8 \mid n^2 - 1$ if $n$ is odd.

**A:** Rewrite $n$ as $2m+1$ as it is odd. Now, $n^2-1 = 4(m^2 + m)$. 4 is there alright, and if we can show that $m^2 + m$ is even then the whole thing is divisible by 8. Well, rewrite that as $m(m+1)$ and one of those is definitely even.

Set of $x$ such that $d \mid x$ is called ideal. For the integers ($\mathbb{Z}$), ideal means "closed under + and -".

### Euclid's Division Algorithm

Suppose we have integers $a,b > 0$. Then Euclid treats this as $b = qa + r$ and we call $q$ the quotient, and $r$ the remainder. Key point: $0 \leq r < a$.

$d \mid x$ forms an Ideal (closed under +, -). The converse is also true, suppose that $I$ is ideal. Then, $I$ is the set of multiples of some $d > 0$.

Suppose $I$ has some $a > 0$ (if not, then $I = \{0\}$). Pick the smallest $a \in I, a > 0$. Suppose $b \in I$. Then, $b = qa + r$ and $0 \leq r < a$. Now, $r = b - qa \in I$ because the Ideal was closed under addition and subtraction.

Since $a$ is the smallest element, this implies $r = 0$. So, $b = qa$ and thus $I$ is the multiples of $a$.

So, we applied Euclid's Division Algorithm to show that ideals of integers are exactly the same of multiples of some particular element.

### Greatest Common Divisor

For $a,b$, the greatest common divisor is the largest integer $d$ such that $d \mid a$ and $d \mid b$.

- If $a=b=0$ then there is no largest integer that divides both. For conventional reasons, we set $\text{GCD}(0,0) = 0$.
- To indicate GCD in elementary number theory, people sometimes use $(a,b)$ as the notation.
- $\text{GCD}(0,a) = a$ even if $a=0$.

**Naïve**: How do we find the GCD? The naïve method is to check all numbers up to the smallest of the two, and find the first one that divides both. However, this is really slow.

We want a fast algorithm. By fast, we kind of mean that it takes a reasonable amount of time even if the numbers have hundreds of digits (there are more technical definitions).

**Better**: We can factor $a,b$ into primes. The GCD can be found by looking at the common prime factors (up to order). For example, $24 = 2^3 \times 3$ and $180 = 2^2 \times 3^2 \times 5$. Taking the maximum common factors in both, we get $12 = 2^2 \times 3$.

This is cool, but factoring large numbers is hard. So we are still not that efficient.

**Cool**: Euclid's Algorithm is very efficient. This is probably the oldest mathematical algorithm still in use. We will describe with an example.

We are given 78 and 14. We will do division with remainder, until the remainder is 0:

- $78 = 14 \times 5 + 8$
- $14 = 8 \times 1 + 6$
- $8 = 6 \times 1 + 2$
- $6 = 2 \times 3 + 0$

The answer is the latest quotient: 2. Note that we know this algorithm will terminate for sure, because the remainder gets smaller on each step. The algorithm kind of looks at the GCD as follows: $(78, 14) = (14, 8) = (8, 6) = (6, 2) = (2, 0) = 2$. This comes from the fact that $(x, y) = (x, xq + r) = (x, r)$.

How fast is this method? Let us consider the worst case. We look at $b = qa + r$, and we want small $r$. The worst case is when $q=1$. For example, $(13, 8)$.

- $13 = 8\times 1 + 5$
- $8 = 5\times 1 + 3$
- $5 = 3\times1 + 2$
- $3 = 2\times1 + 1$
- $2 = 1\times 2 + 0$ and we are done!

We notice that we can work our way up backwards, the remainders follow the recursive pattern $r_i = r_{i+1} + r_{i+2}$. Looks familiar? :)

### Fibonacci Sequence

This sequence 0, 1, 1, 2, 3, 5, $\ldots$ is the **Fibonacci** numbers. $F_n$ is the $n^{th}$ Fibonacci number, and the worst case of Euclid's algorithm is when we are finding $(F_n, F_{n+1})$.

Let us find out how fast does Fibonacci grows.

- `_Lower: 0, 1, 1, 2, 2, 4, 4, 8, 8, ...`
- `Actual: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...`
- `^Upper: 0, 1, 2, 4, 8, 16, 32, 64, 128, ...`

This gives us the growths $2^{n/2} < F_n < 2^n$. In particular, we see that $n \approx c \times \log F_n$ for some constant $c$, and $n$ is the number of steps in Euclid's algorithm.

So, the number of steps of Euclid's algorithm $\leq c \times \log n$ which is approximately $c \times \text{\# digits}$.

Is there a formula to find $F_n = F_{n-1} + F_{n-2}$ for $F_0 = 0, F_1 = 1$? This is an example of "Finite Difference" equation by the way. Note that "General Finite Difference" equations have the form:

$$
F_n = a_1 F_{n-1} + a_2 F_{n-2} + a_3 F_{n-3} + \ldots
$$

for constants $a_1, a_2, a_3, \ldots$

The method to solve these equations is to literally guess the answer. That doesn't sound cool, so instead we say you find the _ansatz_ (which means guess).

With _ansatz_ we guess the form of the answer with some unknown coefficients. You could take a guess like $F_n = n^\lambda$, or perhaps $F_n = \lambda^n$ for some constant $\lambda$. The constants $a_1, a_2, \ldots$ should also be guessed in those. The latter guess seems to work quite nicely for Finite Difference equations.

Looking at $F_n = F_{n-1} + F_{n-2}$, we have $\lambda^n = \lambda^{n-1} + \lambda^{n-2}$. So, $\lambda^2 = \lambda + 1$. The solutions are $\lambda = (1 \pm \sqrt{5}) / 2$. Hmm, that’s not cool because those are not integers. But we do not give up. What if the answer is a linear combination of these solutions?

$$
a\left(\frac{1 + \sqrt{5}}{2}\right)^n + b\left(\frac{1 - \sqrt{5}}{2}\right)^n
$$

Now we will try to adjust $a,b$ to get the Fibonacci numbers. Thankfully, we know $F_0$ and $F_1$. This gives us:

- $a + b = 0$
- $a\left(\frac{1 + \sqrt{5}}{2}\right) + b\left(\frac{1 + \sqrt{5}}{2}\right) = 1$

We thus find $a = 1/\sqrt{5}$ and $b = -1/\sqrt{5}$. So,

$$
F_n = \frac{1}{\sqrt{5}}\left(\left(\frac{1 + \sqrt{5}}{2}\right) - \left(\frac{1 - \sqrt{5}}{2}\right)\right)^n
$$

Fibonacci numbers have quite a lot of cool and funny properties (proofs left as exercise):

- $5F_n^2 \pm 4$ is always a square.
- $F_n^2 = F_{n-1} \times F_{n+1} \pm 1$.

The number $(1 + \sqrt{5})/2$ is known as the Golden Ratio (shown as $\phi$ or $\tau$ sometimes).
