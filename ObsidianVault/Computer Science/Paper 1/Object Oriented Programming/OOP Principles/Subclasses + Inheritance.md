 k
Both of the next two principles are about the concept of subclassing. So let's first understand what a subclass is.

After we've created a class, we may find that there is a subset of the objects that act a little differently from the rest. They may have additional features or they may change an existing feature (though note that if they truly are a subset of the objects we already built a class for, we shouldn't need to **remove** any features for them).

Let's say you have an Animal class:

```csharp
class Animal  // Base class (parent) 
{
  public virtual void animalSound() 
  {
    Console.WriteLine("The animal makes a sound");
  }
}
```


But later, I decide I want different animals, so I a **pig subclasses** of the class `Animal`

```csharp
class Pig : Animal  // Derived class (child) 
{
  public override void animalSound() 
  {
    Console.WriteLine("The pig says: OINK");
  }
}
```

I can also add a snort method to the **pig subclass**, because

