Binary search is much quicker when you have a longer list, however the downside is that it is only possible to perform on a sorted list
mm 

| n: items in list | Linear Search Average case: n/2 | Binary search

Worst case: log2n |
| ---------------- | ------------------------------- | -------------------------------- |
| 10               | 5                               | 4                                |
| 100              | 50                              | 7                                |
| 1 000            | 500                             | 10                               |
| 10 000           | 5 000                           | 13                               |
| 100 000          | 50 000                          | 17                               |
| 1 000 000        | 500 000                         | 20                               |
| 10 000 000       | 5 000 000                       | 24                               |
| 100 000 000      | 50 000 000                      | 27                               |
