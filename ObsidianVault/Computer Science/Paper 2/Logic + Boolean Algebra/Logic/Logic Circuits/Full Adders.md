
![[CleanShot 2024-03-21 at 12.58.38@2x.png|400]]

- A full adder is similar to a [[Half Adders]] but has an **additional input**, allowing for a carry in to be used.
- Because the full adder has a carry input, the circuits can be ∫ to form what's known as a [[Ripple Adder]].
- At each stage, B and Cin can be connected to the previous adder's S and Cout, and a new input can be attached to A.

-----
## Truth Table
| $A$ | $B$ | $C_{\text {in }}$- **Carry input** | $C_{\text {out }}$ - **Carry output** | Sum - **Output** |
| :-: | :-: | :--------------------------------: | :-----------------------------------: | :--------------: |
|  0  |  0  |                 0                  |                   0                   |        0         |
|  0  |  0  |                 1                  |                   0                   |        1         |
|  0  |  1  |                 0                  |                   0                   |        1         |
|  0  |  1  |                 1                  |                   1                   |        0         |
|  1  |  0  |                 0                  |                   0                   |        1         |
|  1  |  0  |                 1                  |                   1                   |        0         |
|  1  |  1  |                 0                  |                   1                   |        0         |
|  1  |  1  |                 1                  |                   1                   |        1         |

