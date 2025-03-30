import random

print("Welcome Lisa.  What do you want to work on today?")
print("1 - Multiplication\n\n")
print("enter x to exit ")

menu = input("Make a choice: ")
i = True

# Multiplication block
if menu == "1":

    score = 0
    questions = 0

    while i is True:

        x = random.randint(0,10)
        y = random.randint(0,10)
        a = x*y

        print(f"\n\nWhat is {x} * {y}")

        answer = input("Answer: ")
        
        if answer == "x" :
            i = False
            print("bye bye")
        elif int(answer) == a :
            print("😃 correct!")
            score += 1
            questions += 1
        else:
            print(f"🙅 incorrect.  the answer is {a}")
            questions += 1

    print(f"\n\n You got {score} out of {questions} correct.")
    print(f"That's {score / questions *100}% correct.")

elif menu == "x":
    print ("bye")


