---
title: "Binomial Coefficients - Part I"
desc: "See how cool the number of ways you can choose some elements from a set becomes."
order: 207
tags: ["symmetric"]
---

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

_NOT:_ You could also have trinomials:

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

_NOT:_ Recall [lattice paths](https://leetcode.com/problems/unique-paths/) problem, you can solve it using binomial coefficients.

_NOT:_ You can divide things up using binomial coefficients. For example, you have 5 pirates and you would like to divide up 100 gold coins. In other words: $a+b+c+d+e=100$ where $a,b,c,d,e$ are integers $\geq 0$. Well, you could think of:

```c
o o | o o o o | o ... o | o | o o
```

where `o` is a coin and `|` is a separator, so the coins between separator (and ends) denote the number of golds for a pirate. Well, this can be interpreted as: how many ways could we place these separators? There are 104 positions, and we have 4 separators, so the result is:

$$
\binom{104}{4}
$$
