[Bogo sort](https://sortvisualizer.com/bogosort/) is a stupid joke of a sorting algorithm.
It works by first checking if an array is in order - and if not - completely shuffling the array.
It will do this forever until by some sweet glorious chance sent from above it is sorted.


-----
## Pseudocode
The following is a description of the randomised algorithm in [pseudocode](https://en.wikipedia.org/wiki/Pseudocode "Pseudocode"):

```pseudocode
while not sorted(deck):
    shuffle(deck)
```