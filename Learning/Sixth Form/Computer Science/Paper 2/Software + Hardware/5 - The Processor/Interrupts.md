

An interrupt is a signal sent to the processor by another part of the computer requesting the attention of the processor.

- Examples of hardware interrupts could be the computer’s I/O controller informing the processor that the mouse has been moved or that a keyboard key has been pressed. 
- When an interrupt occurs, it is detected as a change in the status register in the fetch-execute cycle.
- Interrupts can be handled using what’s called the vectored interrupt method.
	1) When an interrupt occurs, the processor stops executing the current program and places the content of its registers onto the system stack.
	2) Now that the processor has saved its progress on the system stack, it loads the appropriate interrupt service routine: a series of instructions for handling the interrupt that is specific to the type of interrupt. 
	3) Once the processor finishes executing the interrupt service routine, it restores its previous state from the system stack and resumes execution of any programs that were running before the interrupt.
