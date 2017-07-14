#global variables
easy_questions = '''A computer program is a list of __1__. __2__, in terms of programming,
is  the set of rules that determine the arrangement of words, symbols, and pharases accespted
by the programming language. __3__ is a programming language. Grammar sets rules of languages,
the ways syntax sets rules for __4__.'''

easy_answers = ["instructions", "Syntax", "Python", "programming"]

medium_questions = '''__1__ are used for data storage. __2__ are a block of code that can be reused. __3__s are essentially variable names for the code in the function definition. __4__ gives the output to the program while __5__ give the output to the user.'''

medium_answers = ["Variables", "Functions", "Parameter", "Return", "print"]

hard_questions = '''The __1__ operator could be used to check if a specified object exists within an iterable object container, such as a list. Python uses __2__ to define code blocks, instead of brackets. The standard Python indentation is __3__ spaces. Using __4__ before a boolean expression inverts it.  '''

hard_answers = ["in", "indentation", "4", "not"]

TRY_AGAIN = "Please type 'easy', 'medium' or 'hard'"
WRONG_ANSWER = "Incorrect: Please Try Again"
#//

print "Awesome Python Quiz"

def get_questions(LEVEL):
    """ Returns questions based on user input ."""
    if LEVEL.lower() == "easy":
        questions = easy_questions.split()
        return questions;
    elif LEVEL.lower() == "medium":
        questions = medium_questions.split()
        return questions;
    elif LEVEL.lower() == "hard":
        questions = hard_questions.split()
        return questions;
    else:
        questions = TRY_AGAIN
    return questions

def get_answer(LEVEL):
    """ Returns answers based on user input ."""
    if LEVEL.lower() == "easy":
        answers = easy_answers
    elif LEVEL.lower() == "medium":
        answers = medium_answers
    elif LEVEL.lower() == "hard":
        answers = hard_answers
    else:
        answers = TRY_AGAIN
    return answers

def play_quiz():
    attempt = 1
    while attempt <= 3:
        LEVEL = raw_input("Choose Game Difficulty: Easy, Medium or Hard: ")
        LEVEL_QUESTIONS = get_questions(LEVEL)
        LEVEL_ANSWERS = get_answer(LEVEL)
        if LEVEL_QUESTIONS != TRY_AGAIN:
            print ' '.join( LEVEL_QUESTIONS )
            i = 1
            attempt = 1
            replacement = []
            print len(LEVEL_ANSWERS)
            while i <= len(LEVEL_ANSWERS):
                while attempt <= 3:
                    player_answer = raw_input("What would you substitute for __"+str(i)+"__: ")
                    if player_answer == LEVEL_ANSWERS[i-1]:
                        attempt = 1
                        for question in LEVEL_QUESTIONS:
                            if "__"+str(i)+"__" in question:
                                replaced_string = question.replace("__"+str(i)+"__", str(LEVEL_ANSWERS[i-1]))
                                replacement += [replaced_string]
                            else:
                                replacement += [question]
                        replacement_final = replacement
                        replacement = []
                        LEVEL_QUESTIONS = replacement_final
                        print ' '.join(LEVEL_QUESTIONS)
                        i += 1
                        if i > len(LEVEL_ANSWERS):
                            break
                    else:
                        print WRONG_ANSWER
                        print "Attempt Number: " + str(attempt)
                        attempt += 1
                        if attempt == 4:
                            return "Game Over! Please Start Over."
            return "Congratulations! You won!"
        else:
            print TRY_AGAIN
            attempt += 1
            if attempt == 4:
                return "Game Over! Please Start Over."

print play_quiz()
