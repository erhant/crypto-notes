# Berkeley ZKP MOOC 2023 Spring

> Summary of ZKP MOOC Spring 2023 lectures, which are a series of lectures given by Dr. Dan Boneh, Dr. Shafi Goldwasser, Dr. Dawn Song, Dr. Justin Thaler and Dr. Yupeng Zhang. This course covers fundamental techniques to build ZKP protocols, tools to implement ZKP for different computations, and different applications of ZKP in blockchain and other areas
>
> There may be some repetitions among the lectures, but that is good and especially useful when you come back to skim over the notes.
>
> Take a moment and look at that roster, it's like champions league up there. Make sure you watch the course videos on YouTube, and visit the [course website](https://zk-learning.org/).

1. [**Introduction & History**](./introduction-and-history.md): In the first lecture, we take a look at the starting point of all this What separates classical proof from an interactive proof, and how powerful are interactive proofs? What is zero-knowledge and how did it came to be? An excellent primer by Prof. Shafi Goldwasser. <br/>
   <a href="https://www.youtube.com/watch?v=uchjTIlPzFo"><img src="https://img.shields.io/badge/part%201-gray?style=flat&labelColor=FF0000&logo=Youtube" alt="youtube link"></a>

1. [**Overview of Modern SNARKs**](./overview-of-modern-snark.md): While the previous lecture was more about interactive proofs (IPs), this one is all about SNARKs. We learn what they are, and how to build them. <br/>
   <a href="https://www.youtube.com/watch?v=MUnlR3gMKu0"><img src="https://img.shields.io/badge/part%201-gray?style=flat&labelColor=FF0000&logo=Youtube" alt="youtube link"></a>
   <a href="https://www.youtube.com/watch?v=9XOi_iEtTt8"><img src="https://img.shields.io/badge/part%202-gray?style=flat&labelColor=FF0000&logo=Youtube" alt="youtube link"></a>
   <a href="https://www.youtube.com/watch?v=Sv99taTJJmM"><img src="https://img.shields.io/badge/part%203-gray?style=flat&labelColor=FF0000&logo=Youtube" alt="youtube link"></a>

1. [**Programming ZKPs**](./programming-zkps.md): Suppose you have an idea, and you write a program about it and you have to reduce it to some constraint system so that zero-knowledge cryptography can do it's thing. How can we do it? See this lecture for the answer. <br/>
   <a href="https://www.youtube.com/watch?v=kho-vcQGa0c"><img src="https://img.shields.io/badge/part%201-gray?style=flat&labelColor=FF0000&logo=Youtube" alt="youtube link"></a>
   <a href="https://www.youtube.com/watch?v=guQoS2xSksI"><img src="https://img.shields.io/badge/part%202-gray?style=flat&labelColor=FF0000&logo=Youtube" alt="youtube link"></a>
   <a href="https://www.youtube.com/watch?v=zsDeoXx-miE"><img src="https://img.shields.io/badge/part%203-gray?style=flat&labelColor=FF0000&logo=Youtube" alt="youtube link"></a>
   <a href="https://github.com/rdi-berkeley/zkp-course-lecture3-code"><img src="https://img.shields.io/badge/code-gray?style=flat&labelColor=181717&logo=Github" alt="codes"></a>

1. [**SNARKs via IPs**](./snarks-via-ips.md): This lecture is also about building SNARKs, with various methods! We will look at Merkle trees, Schwartz-Zippel lemma, Sum-check protocol and much more. <br/>
   <a href="https://www.youtube.com/watch?v=7YXVGDtuHrk"><img src="https://img.shields.io/badge/part%201-gray?style=flat&labelColor=FF0000&logo=Youtube" alt="youtube link"></a>
   <a href="https://www.youtube.com/watch?v=lG8tgRuD6Mw"><img src="https://img.shields.io/badge/part%202-gray?style=flat&labelColor=FF0000&logo=Youtube" alt="youtube link"></a>
   <a href="https://www.youtube.com/watch?v=f1geFzZ57xw"><img src="https://img.shields.io/badge/part%203-gray?style=flat&labelColor=FF0000&logo=Youtube" alt="youtube link"></a>
   <a href="https://www.youtube.com/watch?v=Lslwy6O6Ehw"><img src="https://img.shields.io/badge/part%204-gray?style=flat&labelColor=FF0000&logo=Youtube" alt="youtube link"></a>
   <a href="https://www.youtube.com/watch?v=co3uVIQrGgo"><img src="https://img.shields.io/badge/part%205-gray?style=flat&labelColor=FF0000&logo=Youtube" alt="youtube link"></a>

1. [**The PLONK SNARK**](./the-PLONK-snark.md): In this lecture we will first see KZG polynomial commitments, and then talk about useful proof-gadgets on committed polynomials. Finally, we learn PLONK. <br/>
   <a href="https://www.youtube.com/watch?v=tAdLHQVWlUY"><img src="https://img.shields.io/badge/part%201-gray?style=flat&labelColor=FF0000&logo=Youtube" alt="youtube link"></a>
   <a href="https://www.youtube.com/watch?v=LbpPCN-f_XA"><img src="https://img.shields.io/badge/part%202-gray?style=flat&labelColor=FF0000&logo=Youtube" alt="youtube link"></a>
   <a href="https://www.youtube.com/watch?v=nQ4nmbad-eo"><img src="https://img.shields.io/badge/part%203-gray?style=flat&labelColor=FF0000&logo=Youtube" alt="youtube link"></a>

1. [**Polynomial Commitments using Pairings & Discrete-log**](./poly-commits-on-pairings-with-dlog.md): We first look at some group theory background, then dive into KZG and Bulletproofs. A summary of pairing & d-log based polynomial commitments is also given in the end. <br/>
   <a href="https://www.youtube.com/watch?v=HdwMtrXLLWk"><img src="https://img.shields.io/badge/part%201-gray?style=flat&labelColor=FF0000&logo=Youtube" alt="youtube link"></a>
   <a href="https://www.youtube.com/watch?v=xuGQYEvytxk"><img src="https://img.shields.io/badge/part%202-gray?style=flat&labelColor=FF0000&logo=Youtube" alt="youtube link"></a>
   <a href="https://www.youtube.com/watch?v=a9H3tHnSxT4"><img src="https://img.shields.io/badge/part%203-gray?style=flat&labelColor=FF0000&logo=Youtube" alt="youtube link"></a>
   <a href="https://www.youtube.com/watch?v=9MnC8dNK-ic"><img src="https://img.shields.io/badge/part%204-gray?style=flat&labelColor=FF0000&logo=Youtube" alt="youtube link"></a>
   <a href="https://www.youtube.com/watch?v=9J7omEbXj3I"><img src="https://img.shields.io/badge/part%205-gray?style=flat&labelColor=FF0000&logo=Youtube" alt="youtube link"></a>

1. [**Polynomial Commitments using Error-correcting Codes**](./poly-commits-on-error-correcting.md): We look at error-correcting codes, Reed-Solomon Code in particular. Then, we describe a polynomial commitment scheme based on linear codes. <br/>
   <a href="https://www.youtube.com/watch?v=cxtZfAHBTZM"><img src="https://img.shields.io/badge/part%201-gray?style=flat&labelColor=FF0000&logo=Youtube" alt="youtube link"></a>
   <a href="https://www.youtube.com/watch?v=uNdlWjB_wfo"><img src="https://img.shields.io/badge/part%202-gray?style=flat&labelColor=FF0000&logo=Youtube" alt="youtube link"></a>
   <a href="https://www.youtube.com/watch?v=uafDickNRZs"><img src="https://img.shields.io/badge/part%203-gray?style=flat&labelColor=FF0000&logo=Youtube" alt="youtube link"></a>
