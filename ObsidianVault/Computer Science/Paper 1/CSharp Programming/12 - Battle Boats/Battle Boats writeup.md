We were tasked to create a C# program/game which mimicked the popular board game of battleships.
Here is:
1) [[Battle Boats writeup#Success Criteria|Success Criteria]]
2) [[Battle Boats writeup#Success Criteria|Design Document]]
3) [[Battle Boats writeup#Success Criteria|My Code]]
4) [[Battle Boats writeup#Success Criteria|Evaluation]]


-----
## Success Criteria
This is what we were asked to do. I have ticked and marked the ones I have done.
### Main Tasks

Develop the section of the program responsible for presenting a menu to the user, giving them the option to start a new game, resume a game, read the instructions, or quit the game.

- [x] Develop this section of the program in a manner that, when the user selects "play a new game," they will be shown a blank fleet grid (figure 3). The program should:
	- [x] Prompt the user to enter coordinates for each boat.
	- [x] Verify if a boat has already been placed in the specified location.
	- [x] Display each boat on the fleet grid after each entry.
	- [ ] Only allow the user to enter five boat locations.
		- For added enjoyment, I have decided to allow the user to enter anywhere from **1 - 32**.

- [x] Develop the section of the program that randomly selects five unique locations for the computer's fleet. These locations should not be revealed to the user. Please note that, in the final version of the game, these locations should not be displayed.

- [x] Develop the section of the program that displays a blank target tracker (figure 4) for the user.

- [x] Develop the section of the program that allows the user to take their turn. The program should:
	- [x] Prompt the user for the target coordinates. Please note that the program should not allow the user to select the same coordinates twice.
	- [x] Check if the target is a hit or a miss.
	- [x] If the target is a hit, display an X on the target tracker.
	- [x] If the target is a miss, display an O on the target tracker.
	
- [x] Develop the part of the program that allows the computer to take its turn. The program should:
	- [x] Randomly generate target coordinates. NOTE: The program should not allow the computer to select the same location twice.
	- [x] Display the coordinates to the player.
	- [x] Check if the target is a hit or a miss
	- [x] If the target is a hit then an H should replace the B (figure 5) on the fleet grid.
		- Again I changed some of the symbols but yes :)
		- It is now:
			- **~** for blank
			- **X** for hit
			- **O** for a ship
 - [x] Develop the section of the program that keeps the game going until there is a clear winner. A game is considered won when a player successfully sinks all of their opponent's battle boats. Make sure to display the winner of the game to the player.

-----
### Challenge Tasks
- [ ] Develop the part of the program that saves the progress of the game externally. Progress should be saved after each turn. If the player closes the game window (stops the execution) then all progress should be saved.
- [ ] Develop the part of the program in such a way that when ‘resume a game’ is selected, the player is presented with their progress from their previous game. The game should continue from this point.
### Further Challenge Tasks
- [ ] Extend the game so that the user can play a version of the game that uses a variety of boat sizes.
	- [ ] The boats will come in three categories:
		 ![[CleanShot 2024-01-29 at 05.19.32@2x.png]]
	- [ ] The boats can be placed horizontally or vertically.
- [ ] To allow for varying boat sizes. Develop the program so that it now checks for a hit, a miss and a sunken boat. The boat will only sink if all parts of the boat have been hit.
	

-----
## Design Document

1. **The main game loop:**
   The game is structured as a loop that continues as long as both the player and the CPU have remaining ships (`playerShipsLeft` and `cpuShipsLeft` are greater than zero).

2. **The grid display:**
   The console is cleared to display the player's ships and the opponent's map. The `displayGrid` function is used to show the grids in the console.
   It's also cleared every turn just for clarity's sake.

3. **The player's turn:**
   - The player is prompted to enter coordinates (in the format like G2) to target the opponent's ships.
   - The entered coordinates are validated, and if valid, the program checks the opponent's grid at those coordinates:
      - If there's a ship (`'O'`), the player scores a hit, and the opponent's ship is marked as sunk (`'X'`).
      - If the cell is empty (`'~'`), it's a miss, and the cell is marked with an asterisk (`'*'`).
      - If the player has already fired at those coordinates, it lets them enter another coordinate.
      - If the entered coordinates are invalid (syntax - wise), an error message is shown.

4.  **The CPU's Turn:**
   - The CPU generates random coordinates and checks if it has already fired at those coordinates. If it has, it randomizes new coordinates until it finds an unfired cell.
   - The program then checks the player's grid at those coordinates:
      - If there's a ship (`'O'`), the CPU scores a hit, and the player's ship is marked as sunk (`'X'`).
      - If the cell is empty (`'~'`), it's a miss, and the cell is marked with an asterisk (`'*'`).

5. **Game Status:**
   After each turn, the current status of each player's fleet is displayed.
   Could be the same as #1 grid display to be fair

6. **End of Game:**
   - If the player's fleet is destroyed (`playerShipsLeft == 0`), a losing message is displayed, and the option for a rematch is offered.
   - If the CPU's fleet is destroyed, a winning message is displayed, and the option for a rematch is offered.

7. **Rematch:**
   The `Rematch` function is called to prompt the user for a rematch, providing a continuation of the game based on the winner's result.


-----
## My Code
### Program.cs on Github.com:
https://github.com/pixeljammed/hrsfc-programs/blob/main/program.cs


#### Image of code
*(warning it's massive - almost 500 lines)*

![[CleanShot 2024-01-29 at 04.55.08@2x 1.png|1000]]

### Image of code working:
![[CleanShot 2024-01-29 at 05.26.33@2x.png|600]]

![[CleanShot 2024-01-29 at 05.27.25@2x.png|500]]

![[CleanShot 2024-01-29 at 05.27.52@2x.png|200]]

![[CleanShot 2024-01-29 at 05.28.24@2x 2.png|400]]

![[CleanShot 2024-01-29 at 11.36.45@2x.png]]

![[CleanShot 2024-01-29 at 11.37.53@2x.png]]



-----

## Evaluation

**Success of the Project:**

The coding project successfully achieved its criteria. Ship placement, shooting mechanics, and victory conditions were all programmed. The user interface and input validation ensured that no error would slip through the cracks and the end user would have as smooth as an experience as possible when playing, streamlining the game.

**Scope Coverage:**

The project did everything originally asked minus the challenge tasks which I'm sure I would have completed if given more time. You can see above that I ticked off every single box on the checklist!

**Areas for Improvement:**

**What Went Well:**
- Found the coding aspect easy for the most part
- Enjoyed solving coding related problems
- Made the actual game which was good in all its functioning glory

**Considerations for Next Time:**
- Could make it look nicer (could use colored text for example)
- Add things like multiplayer, player vs player?
- Make it more optimised
- Optimize the code for scalability, in case I want to expand on it :D
- *Hand it in on time*

# MILO TEKCHANDANI - 2024