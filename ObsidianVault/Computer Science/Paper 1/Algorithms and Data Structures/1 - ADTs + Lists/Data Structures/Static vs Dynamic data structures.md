## Static vs Dynamic Data Structures
**What are the advantages and disadvantages of both Static and Dynamic data structures**
Static data structures have a fixed size, but dynamic data structures have a variable size.

Arguably, dynamic data structures are better in this regard, but a static data structure will take up less memory and is common across almost every high level language, while only modern languages typically support the use of things like dynamic length lists.


**Think about the implementation of a Sorted List class. A Sorted List class could be a child class of the List class; after all, it is just a particular type of list. There will be some methods of the parent class that will need to be rewritten**

**Which ones?**
`Add()`
`Remove()`
`Sort()`

**What modifier should you use in the child class? And in the parent class?**
`override` in child class
`virtual` in parent class

**What access modifier should you use in an attribute to be accessible in the derived class?**
`protected`

