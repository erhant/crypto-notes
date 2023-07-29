[(video 1)](https://www.youtube.com/watch?v=pVKhDtOjji8) [(video 2)](https://www.youtube.com/watch?v=R-O8j7FHEXI) [(video 3)](https://www.youtube.com/watch?v=VRrP4US7idg)

# Divisibility

If $a$ divides $b$, we show this as $a \mid b$. Note that this does not mean $b/a$ is defined, but rather means that $b = xa$ for some integer $x$. This allows $a$ to be 0 too.

- $a \mid 0$ is always true.
- $0 \mid b$ is false, unless $b = 0$ too.
- $2 \mid b$ is a fancy way of saying $b$ is even.

> **Question**: Show that $6 \mid n(n+1)(n+2)$ for any $n$.

We can prove with the argument that one of those terms is even and another is divisible by 3. However, there is a better argument. We can consider the binomial $\binom{n+2}{3}$, which is the number of ways to choose 3 elements from $n+2$ values. This gives $(n + 2) \times (n + 1) \times (n)$ to choose 3 elements, and they can be ordered in 6 different ways so we divide by 6. Since we are counting the choices here, the result is definitely an integer. As such, 6 divides $n(n+1)(n+2)$.

> **Question**: Show that $8 \mid n^2 - 1$ if $n$ is odd.

Rewrite $n$ as $2m+1$ as it is odd. Now, $n^2-1 = 4(m^2 + m)$. 4 is there alright, and if we can show that $m^2 + m$ is even then the whole thing is divisible by 8. Well, rewrite that as $m(m+1)$ and one of those is definitely even.

> **Definition**: Set of $x$ such that $d \mid x$ is called ideal. For the integers ($\mathbb{Z}$), ideal means "closed under + and -".

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
- $2 = 1\times 2 + 0$
- aaand we are done!

We notice that we can work our way up backwards, the remainders follow the recursive pattern $r_i = r_{i+1} + r_{i+2}$ for this example. Looks familiar?

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

Looking at $F_n = F_{n-1} + F_{n-2}$, we have $\lambda^n = \lambda^{n-1} + \lambda^{n-2}$. So, $\lambda^2 = \lambda + 1$. The solutions are $\lambda = (1 \pm \sqrt{5}) / 2$. Hmm, that's not cool because those are not integers. But we do not give up. What if the answer is a linear combination of these solutions?

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

# Primality Tests

A prime $p$ is an integer $> 1$ not divisible by anything except $1$ and $p$. 1 is not a prime, because it is defined that way and it is very convenient to define it that way (although not everyone agree with them).

Alternatively, we could allow negative integers too such as $-2, -3, -5, \ldots$. In that case: a prime $p$ is an integer $p \ne 0$ such that if $p = ab$ then $a$ or $b$ is a _unit_. A unit is something that has an inverse, and the only units for integers are $1$ and $-1$.

A naïve method would check if a number $n$ is divisible by anything smaller than itself $< n$. It is very inefficient. We speed up this by:

- Checking only primes in the division
- Checking up to $\leq \sqrt{n}$

As such, the number of steps for this method would be $\approx \sqrt{n}$. Even then, this is too slow if $n$ is large (like 100 digits or something).

For very large methods, you could first check if it is divisible for some small primes, and then go on to the more advanced test methods.

# Fundamental Theorem of Arithmetic

Any number $n \geq 1$ is a product of primes in a unique way up to order. Note that $1$ is a product of the empty set of primes (this is a nice convention).

Alternatively, allowing negative integers: any number $n \ne 0$ is a product of primes and a unit (1 or -1) in a unique way up to order and then up to units.

**Proof:** We have two parts: an easy part for existence, and hard part for the uniqueness.

1. **Easy part (Existence)**: Take $n \geq 1$. If $n=1$ or $n$ is prime, then we are done. Otherwise $n = ab$ where $1 < a < n, 1 < b < n$.

   So by induction, $a$ is a product of primes $p_1, p_2, \ldots$ and $b$ is a product of primes $q_1, q_2, \ldots$ and thus $n$ is a product of primes $p_1, p_2, \ldots, q_1, q_2, \ldots$.

2. **Hard part (Uniqueness)**: Suppose $p$ is prime, and $p \mid ab$. Then, $p \mid a$ or $p \mid b$. This is the central key result in order for this proof to work.

   Suppose $p \not\mid a$, then $(a,p) = 1$ as $p$ is prime. By Euclid, $ax + py = 1$ for some integers $x,y$. Now multiply by $b$ to obtain $bax + bpy = b$. Well, $p$ divides $ab$ and $p$ also divides $bp$, therefore $p$ divides $b$ (right-hand side).

   Now lets suppose $n = p_1\times p_2\times \ldots=q_1 \times q_2 \times \ldots$. Then $p_1 \mid q_1 \times q_2 \times \ldots$. So, $p_i \mid q_i$ for some $i$, but $q_i$ is prime, so $p_i = q_i$. You can repeat this by diving all the newly found $p_i$. So, the factorization is unique up to order.

We can also give a similar result for polynomials over $\mathbb{R}$. Take $f(x) = a_0 + a_1 x + \ldots$. Here, the _units_ are non-zero constant polynomials, and every non-zero polynomial can be written as a product of irreducible polynomials and constant polynomials.

> Real numbers don't have primes, because any real $x \geq 1$ can be written as $x = \sqrt{x} \times \sqrt{x}$

What about integers in the form $4n+1$, such as $1, 5, 9, 13, 17, 21, \ldots$? Well, you indeed have "primes" where the product is like $(4n+1)(4m+1) = 4(mn+m+n)+1$. However, the factorization is **not unique**, e.g. $9 \times 49 = 21 \times 21$.

Both examples (reals and number 1 mod 4) were not closed under addition and subtraction. Maybe that was the cause of non-uniqueness? Well, lets see one example that is closed!

Lets look at functions on reals $\geq 0$. We can multiply, add or subtract them point-wise. Well, turns out we can't write functions as a product of "prime" functions, for example:

- $x = \sqrt{x} \times \sqrt{x}$
- $\sqrt{x} = \sqrt[4]{x} \times \sqrt[4]{x}$
- it goes on like that, and none of them are units.

Another example: take all numbers of the form $m + n\sqrt{-5}$ where $m,n$ are integers. This is an example of _algebraic number field_. Well, this is not unique too, $6 = 2 + 3 = (1 + \sqrt{5})(1 - \sqrt{-5})$.

> We will later see that number of the form $m + n\sqrt{-1}$ have unique factorization! These are called Gaussian Integers. Units here are $\pm 1, \pm \sqrt{-1}$

# Euclid's Proof of Infinitude of Primes

We have shown this in the first lecture. In three lines:

- $p_1, \ldots, p_m$
- $q \mid p_1 \times p_2 \times \ldots p_m + 1$
- $q \ne p_1, p_2, \ldots, p_m$, so $q$ is a new prime.

Note that $p_1 \times p_2 \times \ldots p_m + 1$ is not necessarily a prime! Thinking that this is the case is a common mistake.

Here is a cool question: suppose you find the primes following the proof described above (so you take $q$ in every step). You will get $2, 3, 7, 43, 13, \ldots$ and such. Do all primes appear?
We do not know, and it is very hard to check this, but it is almost certainly yes!

Suppose we take some prime, does 101 appear? Well, almost certainly yes! The change that it appears at step $n$ is $\approx 1/101$. This is because we are dividing a number by 101 (so that $q=101$), which is possible every 101 numbers over integers.

So, the chance that it does not appear at step $n$ is $(1 - 1/101)$. The chance it does not appear at step $\leq n$ is $\approx (1-1/101)^n$. If you take a very large $n$, this approaches 0. **I really liked this proof!**

Nevertheless, proving that all primes are given seems to be really hard. We have just no idea how to prove it.

# Last Digit

We know that the last digit of primes should be 1, 3, 7 or 9 (other than 2 and 5 for their respective numbers). We may ask, are there infinitely many primes with the last digit 1, i.e. primes of form $10n+1$? Dirichlet proved that yes, indeed there are!

Well, are there infinitely primes in the form $an + b$ where $(a,b)=1$ and $a\ne 0$? Dirichlet's proof on arithmetic progressions actually prove that yes, there are infinitely many primes in all arithmetic progressions.

Let us check some easy cases. Take primes of form $4n+3$. Well, you could do a variation of Euclid's proof. Take number $4\times p_1 \times p_2 \times \ldots \times p_k - 1$. This number is indeed of form $4m+3$, and:

- It is not divisible by any of the $p_1, p_2, \ldots, p_k$.
- It must have at least one factor that is **not** of form $4m+1$. This is because product of primes of that form result in $4m+1$ too, so one prime must be of form $4m+3$ for the result to be of form $4m+3$
- Consequently, there must be a new prime factor of form $4m+3$.

You could do a similar thing for primes of form $3n+2$.

What about $4n+1$? We can't use the previous proof on this one. However, we could notice the fact: if a prime $p$ is one that $p \mid m^2 +1$ then $p = 2$ or it is of the form $4n+1$ (proof later). Now suppose you have a number:

$$
(2\times p_1\times p_2\times \ldots\times p_k)^2 + 1
$$

We have 2 in there so that the result is odd, and square so that the result is of form $m^2+1$ which a prime can divide. All primes in there were of form $4n+1$ or $2$. The result is obviously not 2, nor any of the existing primes. So, there must be a new prime factor of that number.

# Prime Gaps

Looking at $2 ,3, 5, 7, 11, 13, 17, 19, 23, 29$ we have varying amount of gaps. Is there a bound to the gaps?

The answer turns out to be no. It is easy to show, as you can take numbers $n! + 2, n! + 3, \ldots, n! + n$ and there will be $n-1$ numbers that are not prime. Well, $n-1$ is slightly less than $\log (n!)$. Turns out that the average size of prime gap is $\approx \log (n)$. It is very hard to show that gap is sometimes bigger or smaller than this.

> Zhang has shown that gap is sometimes less than $70,000,000$ for large $n$, in an amazing breakthrough. It has been reduced to a few hundreds recently.

It is believed that there are infinitely many consecutive primes with gap 2. It is also conjectured that the gap is sometimes $\approx (\log n)^2$. This seems to be very hard to prove.

> Another crazy result by Rankin (1938) shows that the gap is sometimes bigger than:
>
> $$ \frac{1}{3}\frac{\log n \log \log n \log \log \log \log n}{(\log\log\log n)^3} $$
>
> Bizarre!
