![[CleanShot 2024-10-16 at 20.48.25@2x.png]]

Space complexity / space in memory, as explained in [[Big O Notation]].



![[CleanShot 2024-10-16 at 20.49.27@2x.png]]
![[CleanShot 2024-10-16 at 20.49.45@2x.png]]


| N   | Pos1 | W1     | Pos2 | W2     | Output    |
| --- | ---- | ------ | ---- | ------ | --------- |
| 3   |      |        |      |        |           |
|     | 1    | Rope   |      |        |           |
|     |      |        | 1    | Rope   |           |
|     |      |        | 2    | Dagger |           |
|     |      |        | 3    | Rope   | Duplicate |
|     | 2    | Dagger |      |        |           |
|     |      |        | 1    | Rope   |           |
|     |      |        | 2    | Dagger |           |
|     |      |        | 3    | Rope   |           |
|     | 3    | Rope   |      |        |           |
|     |      |        | 1    | Rope   | Duplicate |
|     |      |        | 2    | Dagger |           |
|     |      |        | 3    | Rope   |           |



![[CleanShot 2024-10-16 at 21.16.24@2x.png]]

$O(n^2)$



-----
## Question 2



