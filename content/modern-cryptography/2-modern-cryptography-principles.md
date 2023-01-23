---
title: 'Modern Cryptography Principles'
desc: 'We look at the principles of modern cryptography: (1) formal definitions, (2) assumptions and (3) proofs.'
order: 2
cat: 'modern-cryptography'
---

# Modern Cryptography Principles

1. Precise and format definition of security must be presented.
2. Assumptions should be clear, minimal and basic, complete.
3. Rigorous proof of security must be given.

Provably secure schemes can be broken if the definition does not correspond to reality, or if the assumptions are invalid. The best assumptions are ones that are old (thus still valid against test of time), simple (thus generic enough), and shared (thus general enough).

## 1: Formal Definition of Secure Encryption

Let us try to define the term "secure".

- ❌ - "_No adversary can find the secret key, no matter what the ciphertext is._": Well, $\text{Enc}(k, x) = x$ provides this, but is definitely not secure ;)
- ❌ - "_No adversary can find the plaintext from the ciphertext._": $\text{Enc}(k, x) = \text{last half of } x$ satisfies this, but is obviously not secure.
- ❌ - "_No adversary can determine and character of the plaintext that correspond to the ciphertext._": This sounds good, but the adversary can still learn which characters of the alphabet is used, which may be bad. For example if the adversary learns the characters $e, h, y$ and the message is 3 letters, it is probably "hey".
- ✔️ - "_No adversary can compute any function of the plaintext from the ciphertext_": Now that sounds formal, but we need to be more formal!

_NOT:_ $F(m)=|m|$ is a function of plaintext that gives its length. It is often very hard to hide this, so the last bullet often allows this function to be computable.

## 2: Assumptions

To make well assumptions, one usually considers threat models, i.e. how powerful is the adversary? There are 4 threat models, with increasing attack power:

1. **Ciphertext-only attack**: The adversary can attack just by looking at one (or many) ciphertexts.
2. **Known-plaintext attack**
3. **Chosen-plaintext attack**
4. **Chosen-ciphertext attack**

A good security definition against **ciphertext-only attack** is: "regardless of any prior information the attacker has about the plaintext, the ciphertext should leak no additional information about the plaintext."

## 3. Proofs

Typical proof of a scheme $X$ will show using a constructive argument, that if $X$ is broken, some **assumption** $Y$ will be violated.

- If there exists an algorithm $A$ for breaking $X$, then we can construct an algorithm $B$ to break the assumption $Y$.
- If $A$ is _efficient_ (i.e. runs in probabilistic polynomial time) then so is $B$.
- The proof cannot present $A$ (in which case $X$ is already broken) but must present the "code" of $B$. We always assume $A$ exists.

These all **assume** that if assumption $Y$ holds, $X$ is secure.
