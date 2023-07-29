# Berkeley ZKP MOOC 2023 Spring

> Summary of ZKP MOOC Spring 2023 lectures, which are a series of lectures given by Dr. Dan Boneh, Dr. Shafi Goldwasser, Dr. Dawn Song, Dr. Justin Thaler and Dr. Yupeng Zhang. This course covers fundamental techniques to build ZKP protocols, tools to implement ZKP for different computations, and different applications of ZKP in blockchain and other areas
>
> There may be some repetitions among the lectures, but that is good and especially useful when you come back to skim over the notes.
>
> Take a moment and look at that roster, it's like champions league up there. Make sure you watch the course videos on YouTube, and visit the [course website](https://zk-learning.org/).

1. [**Introduction & History**](./introduction-and-history.md): In the first lecture, we take a look at the starting point of all this What separates classical proof from an interactive proof, and how powerful are interactive proofs? What is zero-knowledge and how did it came to be? An excellent primer by Prof. Shafi Goldwasser.

1. [**Overview of Modern SNARKs**](./overview-of-modern-snark.md): While the previous lecture was more about interactive proofs (IPs), this one is all about SNARKs. We learn what they are, and how to build them.

1. [**Programming ZKPs**](./programming-zkps.md): Suppose you have an idea, and you write a program about it and you have to reduce it to some constraint system so that zero-knowledge cryptography can do it's thing. How can we do it? See this lecture for the answer.

1. [**SNARKs via IPs**](./snarks-via-ips.md): This lecture is also about building SNARKs, with various methods! We will look at Merkle trees, Schwartz-Zippel lemma, Sum-check protocol and much more.

1. [**The PLONK SNARK**](./the-PLONK-snark.md): In this lecture we will first see KZG polynomial commitments, and then talk about useful proof-gadgets on committed polynomials. Finally, we learn PLONK.

1. [**Polynomial Commitments using Pairings & Discrete-log**](./poly-commits-on-pairings-with-dlog.md): We first look at some group theory background, then dive into KZG and Bulletproofs. A summary of pairing & d-log based polynomial commitments is also given in the end.

1. [**Polynomial Commitments using Error-correcting Codes**](./poly-commits-on-error-correcting.md): We look at error-correcting codes, Reed-Solomon Code in particular. Then, we describe a polynomial commitment scheme based on linear codes.
