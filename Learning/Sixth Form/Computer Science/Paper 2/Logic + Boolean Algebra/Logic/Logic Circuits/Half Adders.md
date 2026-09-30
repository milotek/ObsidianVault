
![300](CleanShot%202024-03-21%20at%2012.34.28@2x%201.png)

A half adder is a variation of [logic circuit](Logic%20Circuits.md) which outputs the result of the **number of inputs that are true**, and outputs that number in binary. 
- Unlike [Full Adders](Full%20Adders.md), it only has **two inputs.**
- It also cannot be expanded upon / chained like [Full Adders](Full%20Adders.md).


-----
## Truth Table

| $\mathbf{A}$ | $\mathbf{B}$ | $\mathbf{C}$ - **output** | $\mathbf{Sum}$ - **carry** |
| :----------: | :----------: | :-----------------------: | :------------------------: |
|      0       |      0       |           **0**           |           **0**            |
|      0       |      1       |           **0**           |           **1**            |
|      1       |      0       |           **0**           |           **1**            |
|      1       |      1       |           **1**           |           **0**            |

When `A or B` is false, **both outputs are false.**
When `only A` or `only B` is true, **S is true**.
When both `A and B` are true, **C is true**.
