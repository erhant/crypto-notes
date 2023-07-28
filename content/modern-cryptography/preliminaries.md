# Probability

- **Random Variable**: A variable that takes on (discrete) values with certain probabilities
- **Probability Distribution for a Random Variable**: The probabilities with which the variable takes on each possible value.
  - Each probability must be $\in [0, 1]$
  - Sum of probabilities should be equal to $1$
- **Event**: A particular occurence in some experiment.
  $$
  \Pr[E]: \text{probability of event } E
  $$
- **Conditional Probability**: Probability that one event occurs, assuming some other event occured. For example, probability that A occurs assuming B occured:
  $$
  \Pr[A\mid B] = \frac{\Pr[A \land B]}{\Pr[B]}
  $$
- **Independent Random Variables**: Two random variables $x,y$ are independent if $\forall x, y : \Pr[X = x\mid Y = y] = Pr[X=x]$
- **Law of Total Probability**: Say $E_1, E_2, \ldots, E_n$ are a partition of all possibilities (no pair can occur at the same time). Then for any other event $A$:
  $$
  \Pr[A] = \sum_i\Pr[A \land E_i] = \sum_i (Pr[A \mid  E_i] \times \Pr[E_i])
  $$
- **Bayes Theorem**: A cool trick to change the orders in conditional probability.
  $$
  \Pr[A \mid  B] = \frac{\Pr[B \mid  A]\times\Pr[A]}{\Pr[B]}
  $$

## Discrete Probability

- Everything here is defined over a **universe** $U$, such as $\{0,1\}^n$. The universe must be a finite set. As an example: $\{0, 1\}^2 = \{00, 01, 10, 11\}$. Also note that $\Pr[U] = 1$.

- A **probability distribution** $P$ over $U$ is a function $P: U \to [0, 1]$ such that $\sum_{x \in U}P(x)=1$.
  - A **uniform distribution** is when $\forall x \in U: P(x) = 1 / |U|$.
  - A **point distribution** is when $P(x_0) = 1 \land \forall x \ne x_0: P(x)=0$.
- An **event** $A$ is a set $A \subseteq U$ and:
  $$
  \Pr[A] = \sum_{x\in A}P(x) \in [0, 1]
  $$
- A **union bound** of $A_1$ and $A_2$ is:
  $$
  \Pr[A_1 \cup A_2] \leq \Pr[A_1] + \Pr[A_2]
  $$
- If $A_1$ and $A_2$ are **disjoint** sets, then $\Pr[A_1 \cup A_2] = \Pr[A_1] + \Pr[A_2]$.

- A **random variable** $X$ is a function $X: U \to V$ where $U$ is the universe and $V$ is the value set.

_EXAMPLE:_ Let $X: \{0, 1\}^n \to \{0, 1\}$ where $X(a) = \text{lsb}(a) \in \{0, 1\}$ and $\text{lsb}$ returns the least significant bit of its argument.

- Let $U$ be some set such as $\{0, 1\}^n$. We write $r \xleftarrow{R} U$ to denote a **uniform random variable** over $U$, in other words: $\forall a \in U: \Pr[r=a] = 1/|U|$.

A deterministic algorithm is one where $y \gets F(x)$, but a randomized algorithm is as $y \gets F(x; r)$ where $r \xleftarrow{R} \{0, 1\}^n$. The output is a random variable $y \xleftarrow{R} F(x)$ which defines a distribution over all possible outputs of $F$ given $x$. For example, $\text{Enc}(k, m; r)$ is a randomized encryption!

- Two events $A$ and $B$ are **independent events** if $\Pr[A \land B] = \Pr[A]\times \Pr[B]$.
- Two random variables $X, Y$ taking values over $V$ are independent random variables if $\forall a,b \in V: \Pr[X=a \land Y=b] = \Pr[X=a]\times\Pr[Y=b]$.

## XOR Operation

XOR is a very important function that will keep appearing throughout cryptography. It is a logical operation $\oplus : \{0, 1\} \times \{0, 1\} \to \{0, 1\}$:

|  a  |  b  | a $\oplus$ b |
| :-: | :-: | :----------: |
|  0  |  0  |      0       |
|  0  |  1  |      1       |
|  1  |  0  |      1       |
|  1  |  1  |      0       |

**Theorem**: For a r.v. $X$ over $\{0, 1\}^n$ and an independent uniform random r.v. $Y$ over $\{0, 1\}^n$, $Z := X \oplus Y$ is a uniform random variable over $\{0, 1\}^n$. This is a very important theorem!

## Birthday Paradox

[This](https://en.wikipedia.org/wiki/Birthday_problem) is a quite surprising probabilistic result, and it will come handy in some proofs.

**Theorem**: Let $r_1, r_2, \ldots, r_n \in U$ be _independent identically distributed random variables_. The theorem states that when $n= 1.2 \times |U|^{1/2}$, then:

$$
\Pr[\exists i,j: i \ne j \land r_i = r_j] \geq \frac{1}{2}
$$

**Proof**: We will first negate this probability:

$$
\Pr[\exists i \ne j: r_i = r_j] = 1 - \Pr[\forall  i \ne j: r_i \ne r_j]
$$

Let $B=|U|$, we see that:

$$
 1 - \Pr[\forall  i \ne j: r_i \ne r_j] = 1 - \left(\frac{B-1}{B}\right)\left(\frac{B-2}{B}\right)\ldots\left(\frac{B-(n-1)}{B}\right)
$$

$$
= 1 - \prod_{i = 1}^{n-1}\left(1-\frac{i}{B}\right)
$$

We will use the inequality $1 - x \leq e^{-x}$ to obtain:

$$
= 1 - \prod_{i = 1}^{n-1}\left(1-\frac{i}{B}\right) \geq 1 - \prod_{i = 1}^{n-1}e^\frac{-i}{B} = 1 - e^{\frac{-1}{B}\sum_{i=1}^{n-1}i}
$$

We can further obtain another inequality as:

$$
1 - e^{\frac{-1}{B}\sum_{i=1}^{n-1}i} \geq 1 - e^\frac{-n^2}{2B}
$$

When we plug in $n=1.2 \times B^{1/2}$ here we get $1 - e^{-0.72} = 0.53$. Surely, $0.53 > 1/2$, QED!

# Entropy

In the context of discrete probability, entropy can be thought of as a measure of randomness. Suppose you have a r.v. $X$ with outcomes $x_1, x_2, ..., x_n$ with probabilities $p(x_1), p(x_2), ..., p(x_n)$.

- **Entropy** is defined as:

  $$
  H(X) = - \sum_{i = 1}^n p(x_i) \log p(x_i)
  $$

- **Min-entropy** is when $\Pr[X = x] < 2^{-n}$ for any outcome $x$.

- **Mutual Information** measures how one random variable tells us about another. Suppose you have r.v. $X$ and $Y$. Denote $P_{(X,Y)}(x, y) = \Pr[X = x \land Y = y]$ as the probability mass function of $X$ and $Y$, and $P_X(x) = \Pr[X = x]$ and $P_Y(y) = \Pr[Y =y]$ as the marginal probability mass functions of $X$ and $Y$ respectively. The mutual information of $X$ and $Y$ is then defined as:

$$
I(X, Y) = \sum_{x, y}P_{(X, Y)}(x,y) \log \frac{P_{(X, Y)}(x,y)}{P_X(x) P_Y(y)}
$$

# Asymptotics

There are some special properties of functions that relate how much they grow with respect to one another.

- **Negligible** functions are literally negligible; too small that you should not worry much about them (especially if the functions represents the probability of failure). Formally, a positive function $\mu(n)$ is **negligible** if for any positive polynomial $p(n)$ there exists a constant $n_0$ such that $\forall n \geq n_0$ we have $\mu(n) < 1 / p(n)$.
- **Noticeable** functions are kind of like the opposite of negligible ones. A positive function $f$ is noticeable if there exists a positive polynomial $p$ and a number $n_0$ such that $f(n) \geq 1/p(n)$ for all $n \geq n_0$.
- **Non-negligible** functions are functions that are not negligible. This does not necessarily mean they are noticable!
- **Overwhelming** functions are such that if $f$ is overwhelming, then $1 - f$ is negligible.

_NOTE:_ Space complexity should be upper bounded by Time complexity. You can't be using more complex space than time, because you should also spend time accessing/modifying whatever data you store.

_NOTE:_ An equivalent definition of negligible functions is given by the Big-O notation: a positive function $\mu(n)$ is negligible if and only if $\mu(n) \in \mathcal{O}(1/p(n))$ for all positive polynomials $p$.

_EXAMPLE:_ The following functions are **negligible**:

- $1/2^n$
- $1/n!$
- $1/n^{\log n}$

_NOTE:_ A polynomial times polynomial functions is a polynomial; however, a polynomial times negligible is a negligible function.

## Negligible vs Noticable

- A positive function $f(n)$ is negligible if and only if for any positive polynomial $p(n)$ such that $p(n)f(n)$ converges to 0.
- A positive function $f(n)$ is noticable if and only if there exists a positive polynomial $p(n)$ such that $p(n)f(n)$ goes to $\infty$.

Note that for negligible we use "for any", but for noticable we use "there exists".
