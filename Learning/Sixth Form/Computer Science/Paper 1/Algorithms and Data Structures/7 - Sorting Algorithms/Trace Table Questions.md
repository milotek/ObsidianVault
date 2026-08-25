Some questions on [[Trace Tables]]. 

-----
## Question 1

![[CleanShot 2024-10-15 at 13.51.15@2x.png]]


| **X** | **Y** | **N** | [0] | [1] | [2] | [3] |     |
| ----- | ----- | ----- | --- | --- | --- | --- | --- |
|       |       |       | 45  | 19  | 62  | 12  |     |
| 1     | 0     | 19    |     |     |     |     |     |
|       |       |       |     | 45  |     |     |     |
|       |       |       |     |     |     |     |     |
|       |       |       |     |     |     |     |     |
|       |       |       |     |     |     |     |     |



-----
## Question 2

![[CleanShot 2024-10-14 at 22.08.54@2x 1.png]]

| Pass | **3** | **5** | **8** | **1** | **6** | **4** |
| ---- | ----- | ----- | ----- | ----- | ----- | ----- |
| 1st  | *3*     | *5*     | *1*     | *6*     | *4*     | *8*     |
| 2nd  | *3*     | *1*     | *5*     | *4*     | *6*     | *8*     |
| 3rd  | *1*     | *3*     | *4*     | *5*     | *6*     | *8*     |



-----
## Question 3

> [!NOTE]- AQA Assembly Language - cheat sheet
> ![[CleanShot 2024-10-15 at 21.20.47@2x.png|400]]
> ![[CleanShot 2024-10-15 at 21.22.02@2x.png|400]]


![[CleanShot 2024-10-15 at 20.59.43@2x.png]]
![[CleanShot 2024-10-15 at 21.00.13@2x.png]]

| R0         | R1          | R2          | R3         | R4         |
| ---------- | ----------- | ----------- | ---------- | ---------- |
|            | 100010 / 34 | 000110 / 6  |            |            |
| 000000 / 0 |             |             | 000001 / 1 |            |
|            |             | 001100 / 12 | 000010 / 2 |            |
|            |             | 011000 / 24 | 000100 / 4 |            |
|            |             | 110000 / 48 | 001000 / 8 |            |
|            |             | 011000 / 24 | 000100 / 4 |            |
| 000100 / 4 | 001010 / 10 |             |            | 000000 / 0 |
|            |             | 001100 / 12 | 000010 / 2 | 000000 / 0 |
|            |             | 000110 / 6  | 000001 / 1 |            |
| 000101 / 5 | 000100 / 4  |             |            | 000001 / 1 |
|            |             |             | 000000 / 0 |            |



![[CleanShot 2024-10-15 at 22.35.47@2x.png]]

Division and Modulus (remainder) calculator of two numbers: $R1 \div R2$, where `R1` is the result and `R2` is the remainder.



-----
## Question 4
![[CleanShot 2024-10-15 at 22.45.34@2x.png]]
![[CleanShot 2024-10-15 at 23.17.25@2x.png]]

| X   | Result | Output |
| --- | ------ | ------ |
| 0   | 0      | -      |
| 4   | 4      |        |
| 6   | 10     |        |
| 3   | 13     |        |
| 2   | 15     |        |
| -1  | 15     | **15** |



![[CleanShot 2024-10-15 at 23.44.40@2x.png]]

Ok so this stupid question goes against all laws of programming (more specifically getting [[While loops|while loops]] mixed up with [[Do-While loops|do-while loops]]) so it makes no sense. The answer it wanted was to have the output incorrectly be **14 and not 15??**

If this was coded to add the sentinel value first, then it that's wrong - it should check the value to be added `result` is NOT the sentinel value.



-----
## Question 5

![[CleanShot 2024-10-15 at 23.43.58@2x.png]]
![[CleanShot 2024-10-16 at 00.58.10@2x.png]]


| x   | MyValue | y   | y > -1? | Numbers[y] | Numbers[y] < MyValue? | [0] | [1] | [2] |
| --- | ------- | --- | ------- | ---------- | --------------------- | --- | --- | --- |
|     |         |     |         |            |                       | 43  | 17  | 85  |
| 1   | 17      | 0   |         |            |                       |     |     |     |
|     |         |     | True    | 43         | False                 |     |     |     |
|     |         |     |         |            |                       |     | 17  |     |
| 2   | 85      | 1   | True    | 17         | True                  |     |     |     |
|     |         |     |         |            |                       |     |     | 17  |
|     |         | 0   | True    | 43         | True                  |     |     |     |
|     |         |     |         |            |                       |     | 43  |     |
|     |         | -1  | False   |            |                       |     |     |     |
|     |         |     |         |            |                       | 85  |     |     |



![[CleanShot 2024-10-16 at 02.34.57@2x.png]]

Bubble sort.



-----
## Question 6
![[CleanShot 2024-10-16 at 02.35.36@2x.png]]
![[CleanShot 2024-10-16 at 02.40.28@2x 1.png]]

| Number | Root | d   | FactorFound | r   | Output |
| ------ | ---- | --- | ----------- | --- | ------ |
| 5      | 1    |     |             |     |        |
|        | 2    |     |             |     |        |
|        | 3    |     |             |     |        |
|        |      | 2   | False       | 1   |        |
|        |      | 3   |             | 2   |        |
|        |      | 4   |             |     | Prime  |



![[CleanShot 2024-10-16 at 02.50.53@2x.png]]

| Number | Root | d   | FactorFound | r   | Output    |
| ------ | ---- | --- | ----------- | --- | --------- |
| 25     | 1    |     |             |     |           |
|        | 2    |     |             |     |           |
|        | 3    |     |             |     |           |
|        | 4    |     |             |     |           |
|        | 5    | 2   | False       | 1   |           |
|        |      | 3   |             | 1   |           |
|        |      | 4   |             | 1   |           |
|        |      | 5   |             | 0   |           |
|        |      |     | True        |     |           |
|        |      | 6   |             |     | Not prime |

