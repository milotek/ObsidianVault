Some questions on sorting algorithms.

-----
## Question 1
![[CleanShot 2024-10-14 at 17.45.19@2x.png]]

| Comment                                  | Count | **rp** | **max** | **cp** | **temp** | **1** | **2** | **3** |
| ---------------------------------------- | ----- | ------ | ------- | ------ | -------- | ----- | ----- | ----- |
| Global values on call                    |       |        | *3*       |        |          | *13*    | *25*    | *24*    |
| rp:=1                                    |       | *1*      |         |        |          |       |       |       |
| repeat                                   |       |        |         |        |          |       |       |       |
| rp:=rp+1                                 |       | *2*      |         |        |          |       |       |       |
| cp:=1                                    |       |        |         | *1*      |          |       |       |       |
| while rp>cp do                           |       |        |         |        |          |       |       |       |
| if numbers[rp] > numbers[cp] then        |       |        |         |        |          |       |       |       |
| temp:= numbers[rp]                       |       |        |         |        | *25*       |       |       |       |
| for count:=rp to cp+1 step- 1            | *2*     |        |         |        |          |       |       |       |
| numbers[count]:=<br><br>numbers[count-1] |       |        |         |        |          |       | *13*    |       |
| endfor                                   | *1*     |        |         |        |          |       |       |       |
| numbers[cp]:=temp                        |       |        |         |        |          | *25*    |       |       |



![[CleanShot 2024-10-14 at 21.07.29@2x.png]]

[[Insertion Sort]]

![[CleanShot 2024-10-14 at 21.30.06@2x.png]]

The number would need to be compared a lot of times thanks to how insertion sort works. In the worst case scenario it would take around 498 comparisons.

-----
## Question 2
![[CleanShot 2024-10-14 at 22.08.54@2x 1.png]]


| Pass | **3** | **5** | **8** | **1** | **6** | **4** |
| ---- | ----- | ----- | ----- | ----- | ----- | ----- |
| 1st  | *3*     | *5*     | *1*     | *6*     | *4*     | *8*     |
| 2nd  | *3*     | *1*     | *5*     | *4*     | *6*     | *8*     |
| 3rd  | *1*     | *3*     | *4*     | *5*     | *6*     | *8*     |
