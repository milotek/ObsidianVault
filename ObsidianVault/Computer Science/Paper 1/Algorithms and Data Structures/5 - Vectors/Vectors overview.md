A vector is a way of representing a **point**, or **transformation** (movement) **in 2d or 3d** *(or even 4d)* **space**.
A 2D vector looks like this: `(1, 3)`.

In the example above, if we start at the origin (where usually it has the position vector `(0, 0)`) and we move `1` to the right, `3` up, that location we end up is the location to which the vector above corresponds.

You can also do the same for a 3rd dimension (3D). We simply add a third value, ex: `(1, 2, 5)`.

![[CleanShot 2024-10-02 at 02.59.54@2x.png]]

Now as well as this, a vector has something called a magnitude. 
Consider the vector `(2, -1)`. If you move `2` to the right, `1` down, and you will have taken `3` steps. 
You walked in a zigzag, but instead if you went in a straight line towards the end point, the number of steps you take is called the vector’s **magnitude**. The magnitude can be computed with Pythagorus' theorem $\sqrt{x^2 + y^2}$. This is the length of the vector.

The same also works with 3D vectors.
Imagine if you were flying a drone for example.

![[Pasted image 20241002030753.png]]



> [!TIP]- How vectors are used in Mathematics
> ### Definition
> A vector is a fundamental concept in physics and mechanics, described as a quantity that has both **magnitude** (size) and **direction**. Imagine it as an arrow pointing from one location to another its length represents the magnitude, and the arrowhead points in the direction.
> 
> ![[CleanShot 2024-10-02 at 02.48.59@2x.png|300]]
> 
> **HOWEVER** - in terms of computer science, it's easier for computers to store this data just using an x and y coordinate value.
> This is because it is smaller and easier to store this way thanks to how data is generally stored.
> If needed, the magnitude and direction can be calculated from the X and Y anyway.
> 
> ![[CleanShot 2024-10-02 at 02.52.07@2x.png|300]]
> 

-----
## Representation

As we know, vectors can be represented in different dimensions:

- **2D Example**: (5, 4) where 5 is X, and 4 is the Y.
- **3D Example**: (36, 19, 71), where the third number corresponds to the Z-axis.

These values are stored using data types like arrays, lists, structs, or tuples, depending on how they’re used in calculations.

For example in Lua

-----
### Basic Operations with Vectors
Adding and subtracting vectors is intuitive. For each pair of vectors, you simply perform operations on corresponding components:

- **Addition**: If vector _a_ = (1, 2) and vector _b_ = (3, 2), their sum _c_ = (4, 4). You add the x-components together and then the y-components.
- **Subtraction**: In this case, subtracting _b_ from _a_ gives _a_ - _b_ = (-2, 0).

These operations are visually easy to interpret: the result of vector addition translates to shifting positions, while subtraction indicates moving in the opposite direction.

-----
## Vectors and Polygons
Vectors also apply to polygons, where the coordinates of a polygon’s vertices can be treated as a set of vectors. Adding a vector to each of these points moves or **translates** the entire shape to a new location in the plane. For instance:

- Add (3, 2) to the points of a polygon:
    - (1, 2) becomes (4, 4)
    - (2, 2) becomes (5, 4)

This is useful in computer graphics, where objects need to be repositioned smoothly on the screen. All primitive (early) computer graphics were made directly using this sort of math.

-----
## Dot Product
The **dot product** is one of the most common types of vector multiplication. It gives a single number (a scalar) as a result. This operation involves multiplying the corresponding elements of two vectors and summing the products. For example:

- (2, 3) · (4, 6) = (2 × 4) + (3 × 6) = 26.

The dot product has important applications in physics and mathematics, such as finding the angle between two vectors or determining if they are perpendicular (a zero dot product means perpendicular vectors).

-----
## Cross Product
The **cross product** is another form of vector multiplication, but this one results in a new vector rather than a scalar. The cross product is particularly useful in 3D spaces and has applications in computer science and physics, such as calculating torque or generating normal vectors for 3D surfaces.