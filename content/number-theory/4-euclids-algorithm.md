---
title: "Euclid's Algorithm"
desc: "Find out how to calculate greatest-common-divisor using Euclid's Algorithm."
order: 4
cat: 'number-theory'
---

[(video)](https://www.youtube.com/watch?v=R-O8j7FHEXI)

# Euclid's Algorithm to Solve Equations

Suppose we know $(a,b) = d$ and the problem is to solve $ax + by = d$. We can solve by using the same algorithm described in the previous section. For example, lets find $71x + 17y = 1$. We first find the GCD:

- $71 = 4 \times 17 + 3$
- $17 = 5 \times 3 + 2$
- $3 = 1 \times 2 + 1$
- $2 = 2 \times 1 + 0$

The GCD is 1. Now we work our way backwards:

- $1 = 3 - 1 \times 2$
- $1 = 3 - 1 \times (17 - 5 \times 3) = 6 \times 3 - 1 \times 17$
- $1 = 6 \times (71 - 4 \times 17) - 1 \times 17$
- $1 = 6 \times 71 - 25 \times 17$

Et voila! We found $1 = 6 \times 71 - 25 \times 17$, so $x = 6$ and $y = -25$.

Note that $ax + by = c$ is solvable if and only if $(a,b) \mid c$. We can find the solution for $(a,b)$ and the just multiply the findings to reach $c$. Also note that once you find $x, y$, other solutions are possible such as $x+b, y-a$. What about linear equations in 3 variables? Such as:

$$
6x + 10y + 15z = 1
$$

Well, we can solve two at a time, referring to $6x + 10y = 2$ (since $(6,10)=2$), giving us $x = 2$ and $y = -1$. Then, we find $2w + 15z = 1$ (since $(2,15)=1$). There we find $w=-7$ and $z=1$.

- $2(-7) + 15(1) = 1$
- $(6(2) + 10(-1))(-7) + 15(1) = 1$
- $6(-14) + 10(7) + 15(1) = 1$

Done! $x=-14, y=7$ and $z=1$.

Again, we can only solve $ax + by + cz = n$ if and only if $(a,b,c) \mid n$. This actually works for an arbitrary number of variables!

The **problem with Euclid's Algorithm** is that it is using "long division", which is slow and complicated. For large numbers, computers don't really know how to do it, and you have to program it yourself. Even Intel [got it wrong back in the day](https://en.wikipedia.org/wiki/Pentium_FDIV_bug).

## Long Division

We can avoid long division by being a bit more clever, and doing divisions by two only (which is really fast on computers). To solve $ax + by = c$ we do as follows:

1. Take out all factors of 2 from $a$ and $b$. And now assume that $a \geq b$ and both are odd.
2. Change $a$ to $a-b$. Now $a-b$ has to be even.
3. If the result is 0, stop.
4. Otherwise, take out the factors of 2, and go back to step 2.

# Least Common Multiple

Given $a$ and $b$, the least common multiple is the smallest number divisible by $a$ and $b$, and is less than or equal to $ab$. For example, $\text{LCM}(12,18) = 36$. It turns out that:

$$
\text{LCM}(a,b) = \frac{a\times b}{\text{GCD}(a, b)}
$$

This is actually a bit obvious when we look at the factors.

- $a = 2^{m_2}\times 3^{m_3}\times 5^{m_5}\times \ldots$
- $b = 2^{n_2}\times 3^{n_3}\times 5^{n_5}\times \ldots$
- $ab = 2^{m_2 + n_2}\times 3^{m_3 + n_3}\times 5^{m_5 + n_5}\times \ldots$
- $\text{GCD}(a,b) = 2^{\min(m_2,n_2)}\times 3^{\min(m_3,n_3)}\times 5^{\min(m_5,n_5)}\times \ldots$
- $\text{LCM}(a,b) = 2^{\max(m_2,n_2)}\times 3^{\max(m_3,n_3)}\times 5^{\max(m_5,n_5)}\times \ldots$

Now notice that $n + m = \min(m,n) + \max(m,n)$. Therefore, $ab = \text{GCD}(a,b) \times \text{LCM}(a,b)$.
