+++
date = '2025-07-18T13:51:56-07:00'
title = 'Console Chess'
tags = ['Software', 'C', 'Git']
menupath = 'Software/C++'
weight = 100
+++

{{< img src="console-chess/thumbnail.png" convert=true >}}

# The Code

Written in C, you can find the code on github [here](https://github.com/Zachhaaa/console_chess).

# Code design

Like all apps we start at the entry point. In C this is the main function.

First, we run the startup code which includes writing the user directions and board to the console.

After that, the board enters the main loop, and it:

 1. Gets user input
 2. Checks if the input is valid
 3. Moves the piece
 4. Draws the board
 5. Repeats

{{< highlight c >}}
int main()
{
    startupMessages();

    renderBoard();
    UserInput formattedInput;
    do
    {
    formattedInput = getUserInput();

    if (formattedInput.charCode != input_success)
        continue;

    movePieceReturn movePieceCode = movePiece(formattedInput.start, formattedInput.end);
    renderMoveOuput(movePieceCode);
    } while (formattedInput.charCode != quit);

    return 0;
}
{{< /highlight >}}

Let's take a deeper look at one of these functions, getUserInput().

Summarizing, getUserInput()

 1. Allocates memory for the text input
 2. Gets the input and limits the size, so you don't get what is called a buffer overflow
 3. Formats the string so it doesn't call "invalid input" if you add an extra space or accidentally capitalize one letter
 4. Processes the input and saves the coordinates (more checks are done later in the code).
 5. Returns the object which includes data about:
     -  The result of the input (either quit, invalid input, or successful input)
     -  Position of the piece to be moved
     -  Desired end point of the piece being moved

One thing you might notice is it didn't check whether the move was legal. What if we wanted to move a pawn 3 spaces forward?

Further checks are done in the movePiece function to make sure the user made a valid move.

{{< highlight c >}}
UserInput getUserInput()
{
UserInput returnVar;
char input[INPUT_BUFFER_SIZE];

printf("%s's move:\n", activeTurn == WHITE ? "white" : "black");
fgets(input, INPUT_BUFFER_SIZE, stdin);

removeWhiteSpace(input);
tolowerstr(input);

returnVar.start.x = input[0];
returnVar.start.y = input[1];
unsigned char strSize = strlen(input);
if (strcmp(input, "resign\n") == 0) 
{
    printf("%s won!\n", activeTurn == BLACK ? "white" : "black");
    getchar();
    returnVar.charCode = quit;
}
else if (input[2] == '>' && strSize == 6) 
{
    returnVar.end.x = input[3];
    returnVar.end.y = input[4];
    returnVar.charCode = input_success;
}
else if (input[2] == 't' && input[3] == 'o' && strSize == 7)
{
    returnVar.end.x = input[4];
    returnVar.end.y = input[5];
    returnVar.charCode = input_success;
}
else
{
    printf("invalid input\n");
    returnVar.charCode = input_invalidInput;
}
return returnVar;
}
{{< /highlight >}}


Check out the [Github page](https://github.com/Zachhaaa/console_chess) for this project if you want to see more of the code.

{{< divider >}}

# What I liked about it

I liked managing the code by creating global variables and functions that act upon those variables to control the game. I personally think that it is much simpler and easier to understand compared to object oriented models that you may find used in other languages.

{{< divider >}}

# What I would do different

I would focus more on sectioning off parts of code to keep the jobs specific and clear. While I did do this by creating functions that each have their own purpose, I sometimes broke this rule. For example, I checked the validity of the input in both the getUserInput() and movePiece() functions. It would be better off to put that functionality into a separate function, group it together, and put it in the getUserInput() function.