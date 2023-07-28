# Introduction to Modern Cryptography

> All of the content here are from my hand-written notes taken during the lectures of [COMP443 - Modern Cryptography](https://sites.google.com/a/ku.edu.tr/comp443/) by Assoc. Prof. Alptekin Küpçü, the material from the book "Introduction to Modern Cryptography: Principles and Protocols, 2nd Edition" by Jonathan Katz & Yehuda Lindell, and several of Dan Boneh's cryptography open lectures on [Coursera](https://www.coursera.org/learn/crypto).

1. [**Preliminaries**](./preliminaries.md): We gathered all the important preliminaries at the start; there is some discrete probability, entropy and asymptotics background to cover.

1. [**Introduction**](./introduction.md): We meet symmetric ciphers, and get to know the plaintext, ciphertext and key spaces. We also provide a quick background of ciphers from history. Then, we look at the principles of modern cryptography.

1. [**Secrecy**](./secrecy.md): We give a formal definition of perfect secrecy & indistinguishability, and show that One-time Pad is the **only** algorithm that can achieve it. Sadly, we also show that perfect is too good, and then give definitions for computational secrecy which is a bit more relaxed but still good enough for our lifetimes.

1. [**Reduction Proofs**](./reduction-proofs.md): In cryptography, to prove that something is secure we usually "reduce" that thing to some other thing that we know to be secure. This logic implies that if one were to break this new system, they should also be able to break the other system which is known to be secure. In this page, we describe how reduction proofs are made.

1. [**PRGs & PRFs**](./prgs-and-prfs.md): We talk about pseudo-random generators (PRG) and give an example of a PRG-based One-time Pad. Then, we look at pseudo-random functions (PRF). Both of these constructions play a huge role in cryptography!
