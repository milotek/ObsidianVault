
## Instructions

Download the *TicTacToe Object Oriented* version and **create a UML class diagram** that shows the different classes and the relationships between them.

**Classes that should appear in your diagram:**
- Form
- Button
- Panel
- TicTacToeForm
- ButtonOfGrid
- PanelOfButtons
- TicTacToePanel

It needs to show the Inheritance and Association (Aggregation, Composition) relationships.
For each class you should represent the Name, Attributes (Properties) and Methods.

-----

```mermaid
classDiagram

class Form {

+int Width

+int Height

+void Show()

+void Close()

}

class Button {

+string Text

+void Click()

}

class Panel {

+List<Button> buttons

}

class TicTacToeForm {

+void Initialize()

}

class ButtonOfGrid {

+int Row

+int Column

}

class PanelOfButtons {

+ButtonOfGrid[,] GridButtons

+void InitializeGrid()

}

class TicTacToePanel {

+PanelOfButtons GridPanel

+void Initialize()

}

Form <|-- TicTacToeForm

Form <|-- TicTacToePanel

TicTacToeForm --* Button

TicTacToePanel --* ButtonOfGrid

TicTacToePanel --* PanelOfButtons
```

-----
