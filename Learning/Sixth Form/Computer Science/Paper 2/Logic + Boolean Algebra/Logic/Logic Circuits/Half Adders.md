
![[CleanShot 2024-03-21 at 12.34.28@2x 1.png|300]]

A half adder is a variation of [[Logic Circuits|logic circuit]] which outputs the result of the **number of inputs that are true**, and outputs that number in binary. 
- Unlike [[Full Adders]], it only has **two inputs.**
- It also cannot be expanded upon / chained like [[Full Adders]].


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
