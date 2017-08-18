#global variables
game_data = {
    'easy': {
        'quiz': 'A computer program is a list of __1__. __2__, in terms of programming, is  the set of rules that determine the arrangement of words, symbols, and pharases accespted by the programming language. __3__ is a programming language. Grammar sets rules of languages, the ways syntax sets rules for __4__.',
        'answers': ["instructions", "Syntax", "Python", "programming"]
    },
    'medium': {
        'quiz': '__1__ are used for data storage. __2__ are a block of code that can be reused. __3__s are essentially variable names for the code in the function definition. __4__ gives the output to the program while __5__ give the output to the user.',
        'answers': ["Variables", "Functions", "Parameter", "Return", "print"]
    },
    'hard': {
        'quiz': 'The __1__ operator could be used to check if a specified object exists within an iterable object container, such as a list. Python uses __2__ to define code blocks, instead of brackets. The standard Python indentation is __3__ spaces. Using __4__ before a boolean expression inverts it.',
        'answers': ["in", "indentation", "4", "not"]
    }
}

WRONG_ANSWER = "Incorrect: Please Try Again"
START_NUMBER_OF_ANSWERS = 1
START_ATTEMPT = 1
MAX_ATTEMPTS = 4

def play_again(result):
    """ plays or exits game based on user input.
    Args:
        result: reslult string
    Behavior:
        retrieves a string based on user input. Then either restarts the game or exits. 
    Returns:
        starts new game or exist.
    """
    play_again = raw_input(result + " Would you like to play again? Yes or No: ")
    if play_again.lower() == "yes":
        print play_quiz()
    else:
        exit("Play again soon")


print "Awesome Python Quiz"

def play_quiz():
    """ plays game.
    Behavior:
        retrieves questions based on user level input. Prompts user to provide answer for each question. If answer is correct, replaces the blank sections with the answer. Continues in loop for as many times as there are answers or until MAX_ATTEMPTS have been made.
    Returns:
        questions with correct answers
    """
    attempt = START_ATTEMPT
    level = raw_input('Choose Game Difficulty: Easy, Medium or Hard: ')
    paragraph = game_data[level.lower()]['quiz']
    number_of_answers = START_NUMBER_OF_ANSWERS
    print paragraph
    while number_of_answers <= len(game_data[level.lower()]['answers']):
        player_answer = raw_input("What would you substitute for __"+str(number_of_answers)+"__: ")
        if player_answer == game_data[level.lower()]['answers'][number_of_answers-1]:
            print "Correct"
            paragraph = paragraph.replace("__"+str(number_of_answers)+"__", game_data[level.lower()]['answers'][number_of_answers-1])
            print paragraph
            number_of_answers += 1
        else:
            if attempt < MAX_ATTEMPTS:
                print WRONG_ANSWER
                attempt += 1
            else:
                result = "Game Over! "
                print play_again(result)
    result = "Congratulations! "
    print play_again(result)

print play_quiz()
