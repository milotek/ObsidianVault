




dick strokes algo rithm


-----
## Example question
![[CleanShot 2024-11-29 at 14.30.11@2x.png|500]]

| U   | Q       | dist[A] | dist[B] | dist[C] | dist[D] | dist[E] | dist[F] | dist[G] | prev[A] | prev[B] | prev[C] | prev[D] | prev[E] | prev[F] | prev[G] |
| --- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
|     | ABCDEFG | 0       | ∞       | ∞       | ∞       | ∞       | ∞       | ∞       | -       | -       | -       | -       | -       | -       | -       |
| A   | BCDEFG  | 0       | 4       | 3       | ∞       | 7       | ∞       | ∞       | A       | A       | A       | -       | A       | -       | -       |
| C   | CDEFG   | 0       | 4       | 3       | 14      | 7       | ∞       | ∞       | A       | A       | A       | C       | A       | -       | -       |
| B   | DEFG    | 0       | 4       | 3       | 9       | 7       | ∞       | ∞       | A       | A       | A       | B       | A       | -       | -       |
| E   | DFG     | 0       | 4       | 3       | 9       | 7       | 12      | ∞       | A       | A       | A       | B       | A       | E       | -       |
| D   | FG      | 0       | 4       | 3       | 9       | 7       | 12      | 11      | A       | A       | A       | B       | A       | E       | D       |
| G   | F       | 0       | 4       | 3       | 9       | 7       | 12      | 11      | A       | A       | A       | B       | A       | E       | D       |
| F   | -       | 0       | 4       | 3       | 9       | 7       | 12      | 11      | A       | A       | A       | B       | A       | E       | D       |
