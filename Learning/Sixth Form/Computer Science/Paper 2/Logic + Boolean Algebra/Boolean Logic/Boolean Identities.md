| Identity Name           | AND Form           | OR Form           |
| :---------------------- | :----------------- | :---------------- |
| Identity                | $1 A=A$            | $0+A=A$           |
| Null (or Dominance) Law | $0 A=0$            | $1+A=1$           |
| Idempotence Law         | $A A=A$            | $A+A=A$           |
| Inverse Law             | $A \bar{A}=0$      | $A+\bar{A}=1$     |
| Commutative Law         | $A B=B A$          | $A+B=B+A$         |
| Associative Law         | $(A B) C=A(B C)$   | $(A+B)+C=A+(B+C)$ |
| Distributive Law        | $A+B C=(A+B)(A+C)$ | $A(B+C)=A B+A C$  |
| Absorption Law          | $A(A+B)=A$         | $A+A B=A$         |

There are a number of **useful identities** which can be used to **simplify** Boolean expressions.

-----

> [!NOTE] Note
> In boolean algebra...
> 
> ## `1 + 1 = 1`
> i.e: `TRUE` + `TRUE` = `TRUE`

-----
## Explainations

![CleanShot 2024-03-21 at 00.40.36@2x](CleanShot%202024-03-21%20at%2000.40.36@2x.png)
`Anything` **AND** `0` is always **0**. This is because the **AND** operation represents multiplication.

![CleanShot 2024-03-21 at 00.45.48@2x](CleanShot%202024-03-21%20at%2000.45.48@2x.png)
`Anything` **AND** `0` is always the **original value**. This is because the **AND** operation represents multiplication.

![300](CleanShot%202024-03-21%20at%2013.43.32@2x.png)
`Any boolean value` **AND** `itself` is equal to just the **value**.

### [OR rules](OR%20gate.md)

![300](CleanShot%202024-03-21%20at%2013.49.59@2x.png)
`Any boolean value` **OR** `0` is the same as adding **adding 0** to the value, so it remains **unchanged**. 

![300](CleanShot%202024-03-21%20at%2013.52.38@2x.png)
`Any boolean value` **OR** `1` is the same as **adding 1** to the value, so it is **always 1**.

![300](CleanShot%202024-03-21%20at%2013.53.51@2x.png)
`Any boolean value` **OR** `itself` is the same as the **value itself.**

![300](CleanShot%202024-03-21%20at%2013.56.01@2x.png)
`Any boolean value` with **two lines above it** cancels out to be just **the original value**.

-----
## Distributive rules
Just like expanding brackets in Mathematics, you can use distributive rules in Boolean algebra as follows:

![CleanShot 2024-03-22 at 01.59.43@2x](CleanShot%202024-03-22%20at%2001.59.43@2x.png)

-----
## See also
[De Morgan's laws](De%20Morgan's%20laws.md)