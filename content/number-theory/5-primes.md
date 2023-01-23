---
title: 'Primes'
desc: 'Primality tests, infinite primes, and prime gaps.'
order: 5
cat: 'number-theory'
---

[(video)](https://www.youtube.com/watch?v=VRrP4US7idg)

A prime $p$ is an integer $> 1$ not divisible by anything except $1$ and $p$. 1 is not a prime, because it is defined that way and it is very convenient to define it that way (although not everyone agree with them).

Alternatively, we could allow negative integers too such as $-2, -3, -5, \ldots$. In that case: a prime $p$ is an integer $p \ne 0$ such that if $p = ab$ then $a$ or $b$ is a _unit_. A unit is something that has an inverse, and the only units for integers are $1$ and $-1$.

# Primality Tests

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

Note that real numbers don’t have primes, because any real $x \geq 1$ can be written as $x = \sqrt{x} \times \sqrt{x}$.

What about integers in the form $4n+1$, such as $1, 5, 9, 13, 17, 21, \ldots$? Well, you indeed have "primes" where the product is like $(4n+1)(4m+1) = 4(mn+m+n)+1$. However, the factorization is **not unique**, e.g. $9 \times 49 = 21 \times 21$.

Both examples (reals and number 1 mod 4) were not closed under addition and subtraction. Maybe that was the cause of non-uniqueness? Well, lets see one example that is closed!

Lets look at functions on reals $\geq 0$. We can multiply, add or subtract them point-wise. Well, turns out we can't write functions as a product of "prime" functions, for example:

- $x = \sqrt{x} \times \sqrt{x}$
- $\sqrt{x} = \sqrt[4]{x} \times \sqrt[4]{x}$
- it goes on like that, and none of them are units.

Another example: take all numbers of the form $m + n\sqrt{-5}$ where $m,n$ are integers. This is an example of _algebraic number field_. Well, this is not unique too, $6 = 2 + 3 = (1 + \sqrt{5})(1 - \sqrt{-5})$.

We will later see that number of the form $m + n\sqrt{-1}$ have unique factorization! These are called Gaussian Integers. Units here are $\pm 1, \pm \sqrt{-1}$.

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

We know that the last digit of primes should be 1, 3, 7 or 9 (other than 2 and 5 for their respective numbers). We may ask, are there infinitely many primes with the last digit 1, i.e. primes of form $10n+1$? **Dirichlet** proved that **yes, indeed there are**!

Well, are there infinitely primes in the form $an + b$ where $(a,b)=1$ and $a\ne 0$? **Dirichlet**'s proof on arithmetic progressions actually prove that yes, there are infinitely many primes in all arithmetic progressions.

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

Looking at $2 ,3, 5, 7, 11, 13, 17, 19, 23, 29$ we have varying amount of gaps. Is there a **bound** to the gaps?

The answer turns out to be no. It is easy to show, as you can take numbers $n! + 2, n! + 3, \ldots, n! + n$ and there will be $n-1$ numbers that are not prime. Well, $n-1$ is slightly less than $\log (n!)$. Turns out that the average size of prime gap is $\approx \log (n)$. It is very hard to show that gap is sometimes bigger or smaller than this.

**Zhang** has shown that gap is sometimes less than $70,000,000$ for large $n$, in an amazing breakthrough. It has been reduced to a few hundreds recently.

It is also believed that there are infinitely many consecutive primes with gap 2.

It is also conjectured that the gap is sometimes $\approx (\log n)^2$. This seems to be very hard to prove.

Another crazy result by **Rankin** (1938) shows that the gap is sometimes bigger than:

$$
\frac{1}{3}\frac{\log n \log \log n \log \log \log \log n}{(\log\log\log n)^3}
$$

Bizarre!
