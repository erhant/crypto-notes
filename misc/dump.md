## Probability Distribution for Encryption Scheme

Let $M$ be a random variable (r.v.) denoting the value of a message. $M$ ranges over the message space $\mathcal{M}$. For example, $\Pr[M=\text{"attack"}] = 0.7$, $\Pr[M=\text{"dont"}] = 0.3$.

Let $K$ be a r.v. denoting the key denoting the value of a key. $K$ ranges over the key space $\mathcal{K}$. Notice that $M$ and $K$ are independent random variables!

Fix some encryption scheme $(\text{Gen}, \text{Enc}, \text{Dec})$ and some distribution for $M$. Consider the following experiment:

1. Choose a message $m$ according to the given distribution.
2. Generate a key $k$ using $\text{Gen}$.
3. Compute $c \gets \text{Enc}(k,m)$. Here, $c$ will be a random value denoting the result of this experiment.

This experiment defines a distribution on the ciphertext, as such the random variable can be denoted as $C$.

_EXAMPLE:_ Consider the shift cipher on English alphabet, $\forall k \in \{0, 1, \ldots, 25\}: \Pr[K=k] = 1/26$. Suppose $\Pr[M=\text{"one"}] = 1/2, \Pr[M=\text{"ten"}] = 1/2$. What is $\Pr[C=\text{"rgh"}]$?

$$
\begin{align*}
\Pr[C=\text{"rgh"}]&= \\
&= \Pr[C=\text{"rgh"} \mid M=\text{"one"}]\times\Pr[M=\text{"one"}] \\
&+ \Pr[C=\text{"rgh"} \mid M=\text{"ten"}]\times\Pr[M=\text{"ten"}] \\
&= \frac{1}{26} \times \frac{1}{2} + 0 \times \frac{1}{2} \\
&= \frac{1}{52}
\end{align*}
$$
