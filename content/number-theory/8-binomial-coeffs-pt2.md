---
title: 'Binomial Coefficients - Part II'
desc: 'Deeper into the Binomial hole: dividing a factorial, magnitude of a coefficient, Catalan Numbers.'
order: 8
cat: 'number-theory'
---

[(video)](https://www.youtube.com/watch?v=KIvuGT5V1Fg)

Let us look at binomial coefficients in modulo 2.

```c
        1 // row 0
       1 1 // row 1
      1 0 1 // row 2
     1 1 1 1
    1 0 0 0 1 // row 4
   1 1 0 0 1 1
  1 0 1 0 1 0 1
 1 1 1 1 1 1 1 1
1 0 0 0 0 0 0 0 1 // row 8
```

This is just like **Sierpinsky Triangle**! Notice that when the row is a power of two, we get almost all zeros:

$$
\binom{n}{k} = 0 \text{ if } n=2^* \text{ and } 0 < k < n
$$

What if we do this with other primes? Let us look at modulo 3:

```c
   1
  1 1
 1 2 1
1 0 0 1 // row 3
```

Indeed we get the same pattern at a power of that prime. This is a general property. For prime $p$, $\binom{p}{k} = 0$ and $0 < k < p$; and furthermore $\binom{p}{0} = \binom{p}{p} = 1$. You can prove this by looking at the expression:

$$
\frac{p!}{k! \times (p-k)!}
$$

The numerator is obviously divisible by $p$ (which would give 0 in modulo $p$), and the denominator is only divisible by $p$ if $k=p$ or $k=0$, which are the edge cases. This has a funny application. Take $(x+y)^p$, you would get:

$$
(x+y)^p = x^p + y^p + p(\ldots)
$$

In modulo $p$, you would only get $x^p + y^p$. This is true for prime powers too.

$$
(x+y)^{p^2} = (x^p + y^p + p(\ldots))^p = x^{p^2} + y^{p^2} + p(\ldots)
$$

So the property we have shown above is actually general to prime powers:

$$
\binom{p^n}{k} \text{ is divisible by } p \text{ if } 0 < k < p^n
$$

## Dividing a Factorial

We would like to find how many times a prime $p$ divides $n!$. We can find this as:

$$
\left[\frac{n}{p}\right] + \left[\frac{n}{p^2}\right] + \left[\frac{n}{p^3}\right] + \ldots
$$

where $[a]$ takes the integer part of $a$. This is a finite sum, as when $p^*$ gets large enough the term would be $0$. This formula just comes from looking at the number in $n!$ as:

$$
n! = 1\times2\times\ldots\times p\times\ldots\times2p\times \ldots \times n
$$

A rough estimate of this sum is just the series:

$$
\frac{n}{p} + \frac{n}{p^2} + \frac{n}{p^3} + \ldots = \frac{n}{p-1}
$$

**Q:** How many zeros are there in the decimal representation of $1000!$?
**A:** We can find this by checking how many times $2$ and $5$ divide this together (i.e., how many times $10$ divides this number). It is calculated from the above formula.

$\left[\frac{1000}{5}\right] = 200$, $\left[\frac{200}{5}\right] = 40$, $\left[\frac{40}{5}\right] = 8$, $\left[\frac{8}{5}\right] = 1$ and $\left[\frac{1}{5}\right] = 0$; in total 249. We can do the same for $2$, but the result will be larger than 249 surely, so we can say 10 divides this number 249 times in total and therefore there are 249 zeros in the end.

A similar method can be used to find how many times $p$ divides $\binom{n}{k}$. For that, you find how many times $p$ divides $n!$, and then subtract how many times $p$ divides $k!$ and $(n-k)!$.

## How big is a binomial coefficient?

We sometimes want to know roughly how big a binomial coefficient is. A crude estimate is that we can have the upper bound:

$$
\binom{n}{k} \leq 2^n
$$

since the sum of the $n^{th}$ row is $2^n$.

We can also look at the middle coefficient (the largest coefficient) of a row:

$$
\binom{2n}{n} \geq \frac{2^{2n}}{2n+1} 
$$

which is because the sum of that row is $2^{2n}$ and the largest one should be larger than the average of all them. Since there are $2n+1$ values in $2n^{th}$ row, we divide by $2n+1$.

### Stirling's Formula

**Stirling** gave a brilliant formula to find $n!$.

$$
n! \approx n^{n+\frac{1}{2}}\times e^{-n}\times \sqrt{2\pi}
$$

If you put these into the factorials of binomial coefficient, you will also get a nice approximation.

## Application to Prime Number Theorem

Recall that we want to know how many primes are there up to some number $n$, which we show as $\Pi(n)$. It was found that

$$
\Pi(n) \approx \frac{n}{\log n}
$$

We will show a weak form of this theorem, by showing:

$$
\frac{1}{2} \frac{n}{\log n} \leq \Pi(n) \leq 2\frac{n}{\log n}
$$

so we can show this up to a factor of two. The key idea of the proof is to look at $\binom{2n}{n}$ and look at primes dividing it. First we will find the upper-bound.

Suppose $n < p < 2n$. Then $p$ divides $\binom{2n}{n}$ **exactly once**. This is because the expression is:

$$
\frac{2n!}{n!n!}
$$

and $p$ appears only once in the numerator. Now lets look at the product of primes between $n$ and $2n$:

$$
\prod_{n < p < 2n} p \leq \binom{2n}{n} \leq 2^{2n}
$$

How could we say that this is less than $\binom{2n}{n}$? Well because any prime in between could only divide that binomial coefficient once, and since all those primes are in the numerator then the product itself can divide that by once. As such, the coefficient must be at least larger than the product of primes itself. We also know that the coefficient there is less than $2^{2n}$ from a similar result.

Now lets take the logarithm of that inequality:

$$
\sum_{n < p < 2n}\log p \leq \log 2^{2n} = 2n \log 2
$$

Also notice that

$$
\sum_{n < p < 2n} \log p \geq \log n \times \text{\# primes in $[n, 2n]$}
$$

because the actual sum has # primes in $[n, 2n]$ terms in it but $\log p$ for any prime there is larger than $\log n$. Then,

$$
\text{\# primes in $[n, 2n]$} \leq 2\log 2 \frac{n}{n} \approx \log2 \frac{2n}{\log 2n}
$$

Using this estimate, you can find $[0, n]$ by repeatedly finding $[n/2, n]$, and then $[n/4, n/2]$ and then $[n/8. n/4]$ and so on... We skip that technical detail. The result of this is going to be that # primes $\leq n$ is bounded by about $2n/\log n$. _You can make that 2 factor a bit smaller if you work really hard._

Now we will find the lower-bound. First we notice:

$$
\prod_{p^k \leq 2n} p \geq \binom{2n}{n}
$$

To show this, we must count # times $p$ divides $\binom{2n}{n}$ and we know how to do this:

$$
\left[\frac{2n}{p}\right] - \left[\frac{n}{p}\right] - \left[\frac{n}{p}\right]
$$

$$
\left[\frac{2n}{p^2}\right] - \left[\frac{n}{p^2}\right] - \left[\frac{n}{p^2}\right]
$$

$$
\left[\frac{2n}{p^3}\right] - \left[\frac{n}{p^3}\right] - \left[\frac{n}{p^3}\right]
$$

and so on… However, notice that each of these rows are either 1 or 0. Recall that in our condition $p^k \leq 2n$, so the integer part of $[2n/p]$ could only be 1 if $p = 2n$. In that case, we would have $1-0-0 = 1$. If $p < 2n$ then we just have $0-0-0=0$ and so the result can only be 1 or 0. **TODO: I didn't understand this part**

So we take the logs,

$$
\sum_{p^k \leq 2n}  \log p \geq \log \frac{2^{2n}}{2n+1} = 2n\log 2 - \log(2n + 1)
$$

Here we can make some simplifying assumptions:

- The number of terms with $p^2, p^3, \ldots$ are small, as they are pretty rare, so we can ignore them.
- $\log x$ is almost constant. If you look at the graph of it from $0$ to a really large $x$, the graph looks almost like a constant line.

With these assumptions we can say that $\log p$ in the sum is very close to $\log 2n$ for most primes. What we then find:

$$
\sum_{p \leq 2n} \log 2n \geq 2n \log 2
$$

$$
(\text{\# primes $\leq 2n$}) \geq \frac{2n\log 2}{\log2n} - \text{some small factors}
$$

So in the end we can say that # primes $\leq 2n$ lies between about $1/2 \times 2n/\log2n$ and $2 \times 2n/\log2n$.

## Another application

If you look at the series for $\binom{2n}{n}$ you have $1, 2, 6, 20, 70, \ldots$ and these are divisible by $1, 2, 3, 4, 5, \ldots$ . In fact,

$$
\binom{2n}{n} \text{ is divisible by } n+1
$$

What if we divide $\binom{2n}{n}$ by $n+1$? We get the sequence **Catalan Numbers**:

$$
1, 1, 2, 5, 14, \ldots
$$

The book "Catalan Numbers" by Richard P. Stanley lists 214 different sets that the Catalan Numbers count! Here is an example, where the numbers give us the number of ways to bracket a product:

```c
1: a
1: ab
2: (ab)c | a(bc)
5: ((ab)c)d | a(b(cd)) | (ab)(cd) | (a(bc))d | a((bc)d)
```

Let us denote Catalan numbers by $C_n$ and $C_0 = 1$. The property of this number is:

$$
C_n = C_0C_{n-1} + C_1C_{n-2} + \ldots + C_{n-1}C_0
$$

We can use generating functions to identify them:

$$
f(x) = C_0 + C_1x + C_2x^2 + \ldots
$$

Well then lets look at:

$$
f(x)^2 = C_0^2 + (C_1C_0 +C_0C_1)x + (C_0C_2 + C_1C_1 + C_2C_0)x^2 + \ldots
$$

Turns out that:

$$
1 + xf(x)^2 = f(x)
$$

Now this is just a quadratic equation, which can be solved by:

$$
f(x) = \frac{1-\sqrt{1-4x}}{2x}
$$

_NOT:_ Remember that $(1+x)^n$ is:

$$
1 + \binom{n}{1}x + \binom{n}{2}x^2 + \ldots
$$

Turns out that this is true for non-integers powers too!

$$
(1+x)^{1/2} = 1 + \frac{1}{2}x + \frac{\frac{1}{2}\frac{-1}{2}}{2!}x^2 + \frac{\frac{1}{2}\frac{-1}{2}\frac{-3}{2}}{3!}x^3 + \ldots
$$

These coefficients look a bit messy, but you can write them in a more clever way.
