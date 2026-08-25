## Introduction
Reverse Polish Notation (RPN) is a mathematical notation where every operator follows all of its operands. It eliminates the need for parentheses, as the order of operations is explicitly defined by the position of operators.

**Example**

- Normal notation (called infix): `3 + 4`
- RPN: `3 4 +`

The reason why RPN is useful is because you do not need to worry about brackets or BIDMAS.
This makes it easier for computers to calculate using [[Stacks|stacks]].

-----
## How [[Stacks]] are Used in RPN:
1. **Evaluation Process**:
    - Read the RPN expression from left to right.
    - **Push** numbers (operands) onto the stack.
    - When an operator is encountered, **pop** the required number of operands from the stack.
    - Perform the operation and **push** the result back onto the stack.
    - After the entire expression is processed, the result will be the only item left in the stack.
    

> [!EXAMPLE]+ Example
> **Example**: Evaluate `3 4 + 2 *` using a stack:
> - Step 1: Push 3 → Stack: [3]
> - Step 2: Push 4 → Stack: [3, 4]
> - Step 3: Encounter `+`. Pop 4 and 3, calculate `3 + 4 = 7`, and push the result → Stack: [7]
> - Step 4: Push 2 → Stack: [7, 2]
> - Step 5: Encounter `*`. Pop 2 and 7, calculate `7 * 2 = 14`, and push the result → Stack: [14]
> 
> The final result is 14, which is left on the stack.