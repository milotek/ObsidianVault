The first principle is abstraction. Abstraction is recognising that various pieces of data that you are using may fundamentally have the same structure even if the data is different.

For example, maybe you are collecting pokemon data.

```
charmander = {"name": "Bert", "level": 8, "holding": "muscle band"}
bulbasaur = {"name": "Ernie", level: 9, "holding": None}
magikarp = {"name": "Grouch", level: 99, holding: "damp rock"}
```

In this case, it is clear that there is some underlying structure here. So this suggests we should build some common data type for things that have name, level, and holding data. Doing so can help us when write functions and procedures that use this information as we can essentially "guarantee" that all of this data will exist.