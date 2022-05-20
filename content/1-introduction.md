---
title: "pro"
---

# Introduction
We have three important things:
- Key Generator (over a **key space** $\mathcal{K}$)
$$
\text{Gen}(1^\lambda) \to k, k \in \mathcal{K}
$$

- Encryption (over a **message space** $\mathcal{M}$)
$$
\text{Enc}(k,m) \to c, m \in \mathcal{M} \land c \in \mathcal{C}
$$
- Decryption (over a **ciphertext space** $\mathcal{C}$)
$$
\text{Dec}(k,c) \to m', m' \in \mathcal{M}
$$

We should understand that $\text{Gen}$ has a $\lambda$-bit input. $\lambda$ is known as the **security parameter**.

We also expect $m=\text{Dec}(k,\text{Enc}(k,m))$, this is known as **correctness property**.

Note that if we know $\text{Gen}$ we learn the key space. With that, if we know message space and $\text{Enc}$, then we will know the ciphertext space as well.

_NOT:_ Message is also known as _plaintext_.

_NOT:_ Private key, Secret key, Symmetric key. These all mean the same thing usually.

_NOT:_ Space complexity should be upper bounded by Time complexity. You can't be using more complex space than time, because you should also spend time accessing/modifying whatever data you store.
   
### Caesar Cipher
A very old example of cryptogrpahy is by Julius Caesar back then, we simply rotate the alphabet.
- $\text{Enc}(k, m) = m + 3 \bmod 26$
- $\text{Dec}(k, c) = c - 3 \bmod 26$
- $\text{Gen}(1^\lambda) = 3$

Notice that key generation does not care about $\lambda$, and both encryption and decryption does not use the key. It is very easy to break this cipher; you could simply look at the letter frequencies, or digram (pair of letters) frequencies.

### Vigenere Cipher
```text
The key is CRYPTO.
k = C R Y P T O C R Y P T O C R Y P T
m = W H A T A N I C E D A Y T O D A Y
------------------------------------- (+ mod 26)
c = Z Z Z J U C L U D T U N W G C Q S
```
Every $n'$th character has the same shift. This was pretty powerful back then, but it is breakable; especially if you know the key length beforehand. In fact, the key length can be found by looking at the uniformity of the characters.

For a Vigenere cipher with key length $1$ to $L$:
- determining the key length $\approx 256L$
- determining the bytes of key $\approx 256L$
- brute-force $\approx 256^L$

### Rotor Machines
Then came the rotor machines, such as [Enigma Machine](https://en.wikipedia.org/wiki/Enigma_machine). Details omitted.

All of the examples so far has been "substituion ciphers" where characters are mapped to some other character.
 
 ### Digital Ciphers
 Not that long ago there was [DES](https://en.wikipedia.org/wiki/Data_Encryption_Standard) (1974), [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) (aka Rijndael, 2001) and [Salsa20](https://en.wikipedia.org/wiki/Salsa20) (2008).
 
