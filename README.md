# Fizz Buzz Mob Exercise

A mob programming exercise to give an intro to mobbing.

This exercise is great for all levels to practice Mob Programming using a common code kata.

# Getting started

Two files have been provided:

`fizzBuzz.test.js`: Where we will write our tests and production code
`index.html`: Used in Part 3

It's worth creating a new branch from the `master` and naming it after your mob session or team name.

This will be handy for comparing future sessions with different teams to see how we can produce a variety of high quality solutions.

> Be sure to go through each part in order

# Part 1
## Implement Fizz Buzz function

Our function should meet the following conditions:

- Receives a number as a parameter
- Returns "Fizz" if the number is divisible by 3
- Returns "Buzz" if the number is divisible by 5
- Returns "FizzBuzz" if the number is divisible by 3 and 5
- Returns the given number if it is not divisible by 3 or 5

## Approach

1. Write a failing test for one of the conditions
2. Update your Fizz Buzz function to make the test pass
3. Repeat above until all test conditions are implemented and passing

# Part 2

## Fizz Buzz in an array

Let's implement a new function which must meet the following conditions:

- Recieve a number to count up to
- For each number starting from 1 up to the given count, call our Fizz Buzz function and add the result to an array
- Return the array

For example:

Given we pass in the number 5, we should recieve the following array:

`[1, 2, "Fizz", 4, "Buzz"]`;

Use the same approach as Part 1

# Part 3

## Add functionality to a UI using our new function

We have a starter `index.html` file containing some of the elements we'll need for this exercise.

In this part we'll only test new functions but not the frontend.

We want to achieve the following goals:

- When we type a number into the input and press run it should print out the results either comma delimited or a result per line
- When we press run again the previous results are cleared and the new ones are added

# Beyond

Try implementing some improvements using the mob. Here are some examples of things you could add:

- Extract your production code from the test file to it's own file
- A reset button which clears the input and results
- Print out the results one at a time every second using a timer
    - Add some kind of indicator that a timer is running
    - Add a pause button for the timer
    - Add a resume button
- Implement E2E tests using Playwright or Cypress

# Closing up the session


