
Encapsulation is the idea that we should put all of the code related to a given abstract object together in its own scope. This is not just the data itself but also any code which acts directly on this data.

-----

For example, we might create a Pokemon class like so.

```csharp
from typing import Optional

class Pokemon:
    def __init__(self, name: str, level: int, hp: int, holding: Optional[str], moves: list[Move]) -> None:
    
        //Initialize the data attributes for a new pokemon
        self.name = name
        self.level = level
        self.hp = hp
        self.holding = holding
        self.moves = moves   # Move class with existing Move objects

    def attack(self, other: "Pokemon", move) -> None:
        if move not in self.moves:
            raise Exception("Invalid move")

        dmg = move.damage
        other.hp = max(0, other.hp - dmg)

class Pokemon
{
  string name = "red";
  string

  static void Main(string[] args)
  {
    Car myObj = new Car();
    Console.WriteLine(myObj.color);
  }
}
```


This puts all of the data attributes for a pokemon together as well as any functions you want to act on that data (like an **attack()** function). In reality, a pokemon game would likely have a lot more data and methods, but this gives you an idea.

Now if we want to reuse this pokemon code in another program or file, we can just import this single class rather than a bunch of separate functions.

-----

## Example

![[mentally.gif]]
![[Selfie 2024-03-04 at 14.36.49.png]]