[(video 1)](https://www.youtube.com/watch?v=TBolWCObRgg) [(video 2)](https://www.youtube.com/watch?v=KIvuGT5V1Fg)

We denote Binomial Coefficients as $\binom{n}{k}$ meaning ($n$ choose $k$) and it corresponds to number of $k$ element subsets of an $n$ element subset. For example, $\binom{5}{2} = 10$. Binomial (roughly means "two names") corresponds to sum of two things. This is where the coefficients comes from:

$$
(x+y)^n = \binom{n}{0}x^ny^0 + \binom{n}{1}x^{n-1}y^1 + \ldots + \binom{n}{n}x^0y^n
$$

There is an explicit formula for binomial coefficient:

$$
\binom{n}{k} = \frac{n!}{(n-k)!\times k!}
$$

More explicitly:

$$
\binom{n}{k} = \frac{n(n-1)(n-2)\ldots(n-k+1)}{k!}
$$

In that case, the numerator is number of ways we can pick $k$ elements, and the denominator is to handle the different ways we could have taken them. Pascal's triangle can also give you these results, but note that Pascal wasn't the first one to find that.

```c
      1
     1 1
    1 2 1
   1 3 3 1
  1 4 6 4 1
// and so on..
```

Notice that this triangle tells us:

$$
\binom{n}{k} = \binom{n-1}{k} + \binom{n-1}{k-1}
$$

Even more, a number in the triangle is equal to the sum of numbers above it in the previous column. In other words:

$$
\binom{0}{k} + \binom{1}{k} + \ldots + \binom{n}{k} = \binom{n+1}{k+1}
$$

This is very handy as we will see in a moment.

You could also have trinomials:

$$
(x+y+z)^n = \sum_{i,j,k} (?)x^iy^jz^k
$$

What should be the $(?)$ there? Well, the things we had for binomials are actually easily generalizable.

$$
(?) = \frac{n!}{i! j! k!}
$$

You could have a three-dimensional Pascal's triangle (like Pascal's Tetrahedron) and you would find these values. Let us look at the Pascal triangle again:

```c
     1 // only 1s
    1 / 1 // all numbers
   1 / 2 / 1 // Triangular numbers
  1 / 3 / 3 / 1 // Tetrahedral numbers
 1 / 4 / 6 / 4 / 1 // 4-dim Tetrahedral numbers
// and so on..
```

In general, the $k^{th}$ column gives you the $k-dim$ tetrahedral numbers.

## Binomial Polynomials

Let us look at several cases:

$$
\binom{n}{0} = 1
$$

$$
\binom{n}{1} = n
$$

$$
\binom{n}{2} = \frac{n(n-1)}{2} = \frac{1}{2}n^2 - \frac{1}{2}n
$$

$$
\binom{n}{3} = \frac{n(n-1)(n-2)}{6} = \frac{1}{6}n^3 - \frac{1}{2}n^2 + \frac{1}{3}n
$$

Now, these polynomials have real coefficients but we are calculating ways to chose elements, so the result is integer. This is a very nice property, namely: if $n$ is an integer, then these polynomials result in an integer.

$$
\binom{n}{2} = \frac{n(n-1)}{2} = \frac{1}{2}n^2 - \frac{1}{2}n
$$

| $n$ | $n^0$ | $n^1$ | $n^2$ | $n^3$ |
| --- | ----- | ----- | ----- | ----- |
| 0   | 1     | 0     | 0     | 0     |
| 1   | 1     | 1     | 1     | 1     |
| 2   | 1     | 2     | 4     | 8     |
| 3   | 1     | 3     | 9     | 27    |
| 4   | 1     | 4     | 16    | 64    |

What if instead of $n^k$ we used $\binom{n}{k}$?

| $n$ | $\binom{n}{0}$ | $\binom{n}{1}$ | $\binom{n}{2}$ | $\binom{n}{3}$ |
| --- | -------------- | -------------- | -------------- | -------------- |
| 0   | 1              | 0              | 0              | 0              |
| 1   | 1              | 1              | 0              | 0              |
| 2   | 1              | 2              | 1              | 0              |
| 3   | 1              | 3              | 3              | 1              |
| 4   | 1              | 4              | 6              | 4              |

The upper triangular part of this table is quite nice, the diagonal is just 1s and the upper part is just 0s. What if we wrote $\binom{n}{k}$ instead of $n^k$ in our polynomials?

$$
a_0\binom{n}{0} + a_1\binom{n}{1} + a_2\binom{n}{2} + \ldots
$$

This polynomial has a **really nice property**: the result is an integer for all $n$ if and only if $a_i$ are integers. We cant say the same for when we use $n^k$, for example:

$$
\frac{n^3}{6} + \frac{5n}{6}
$$

is always an integer perhaps? Let us use the binomial polynomial in an example. We remember from high-school:

$$
0^2 + 1^2 + 2^2 + \ldots + n^2 = \frac{n(n+1)(2n+1)}{6}
$$

How would we prove this? Well, notice that

$$
n^2 = 2\frac{n(n-1)}{2} + n = 2\binom{n}{2} + \binom{n}{1}
$$

Then, the sum of squares is:

$$
2\left(\binom{1}{2} + \ldots + \binom{n}{2}) + (\binom{1}{1} + \ldots + \binom{n}{1}\right)
$$

Using the property we have shown above for the triangle:

$$
2\binom{n+1}{3} + \binom{n+1}{2} = \frac{n(n+1)(2n+1)}{6}
$$

### Properties of Binomial Coefficients

First, let us rewrite the two properties we have shown before:

- **Pascal's Triangle**:

$$
\binom{n}{k} = \binom{n-1}{k} + \binom{n-1}{k-1}
$$

- **Sum of binomials**:

$$
\binom{0}{k} + \binom{1}{k} + \ldots + \binom{n}{k} = \binom{n+1}{k+1}
$$

- **Complementing Coefficient**:

$$
\binom{n}{k} = \binom{n}{n-k}
$$

- **Sum of the rows in Pascal's Triangle**:

$$
\binom{n}{0} + \binom{n}{1} + \ldots + \binom{n}{n} = 2^n
$$

This can be interpreted (combinatorially) as: sum of number of 0 element subsets, 1 element subsets, $\ldots$, $n$ element subsets. This is equal to number of all subsets of a set with $n$ elements, which is $2^n$. You can prove this with generative function $(x+y)^n$ with $x=y=1$.

- **A Useful Sum**:

$$
\sum_{i}\binom{m}{i}\binom{n}{k-i} = \binom{m+n}{k}
$$

It is cool to show this combinatorially (just draw two sets and try to pick $k$ elements in total from both).

- **Alternating Sums**:

```c
     1 = 1
    1 - 1 = 0
   1 - 2 + 1 = 0
  1 - 3 +  3 -  1 = 0
 1 - 4 + 6 - 4 + 1 = 0
// and so on..
```

You will always get 0. You can prove this both combinatorially, or with generative function $(x+y)^n$ by giving $x=1$ and $y=-1$.

Recall [lattice paths](https://leetcode.com/problems/unique-paths/) problem, you can solve it using binomial coefficients. Furthermore, you can divide things up using binomial coefficients. For example, you have 5 pirates and you would like to divide up 100 gold coins. In other words: $a+b+c+d+e=100$ where $a,b,c,d,e$ are integers $\geq 0$. Well, you could think of:

```c
o o | o o o o | o ... o | o | o o
```

where `o` is a coin and `|` is a separator, so the coins between separator (and ends) denote the number of golds for a pirate. Well, this can be interpreted as: how many ways could we place these separators? There are 104 positions, and we have 4 separators, so the result is:

$$
\binom{104}{4}
$$

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

and so on… However, notice that each of these rows are either 1 or 0. Recall that in our condition $p^k \leq 2n$, so the integer part of $[2n/p]$ could only be 1 if $p = 2n$. In that case, we would have $1-0-0 = 1$. If $p < 2n$ then we just have $0-0-0=0$ and so the result can only be 1 or 0.

> I **really** didn't understand this part above...

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

Remember that $(1+x)^n$ is:

$$
1 + \binom{n}{1}x + \binom{n}{2}x^2 + \ldots
$$

Turns out that this is true for non-integers powers too!

$$
(1+x)^{1/2} = 1 + \frac{1}{2}x + \frac{\frac{1}{2}\frac{-1}{2}}{2!}x^2 + \frac{\frac{1}{2}\frac{-1}{2}\frac{-3}{2}}{3!}x^3 + \ldots
$$

These coefficients look a bit messy, but you can write them in a more clever way.
