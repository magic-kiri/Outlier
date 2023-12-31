![Outlier.org](https://i.imgur.com/vJowpL1.png)

---
# Steps To Run 
Follow these steps to compile the project properly.
```
npm install
node server.js
npm run start
```


# Outlier Engineering React Quiz Challenge


Quizes are common feature of our student-facing apps. Can you build a simple quiz interface with React while following [Outlier's best practices](https://github.com/outlier-org/onboarding/blob/master/README.md#engineering-onboarding-guide)?

## The Challenge

Using the following wireframes, build a quiz interface. Using your comprehension about how the application functions, construct all applicable tests. The questions are all in [questions.json](https://raw.githubusercontent.com/outlier-org/challenge-quiz/master/src/questions.json).

![Question](https://raw.githubusercontent.com/outlier-org/challenge-quiz/master/docs/wire-question.png)

![Correct Answer](https://raw.githubusercontent.com/outlier-org/challenge-quiz/master/docs/wire-answer-correct.png)

![Incorrect Answer](https://raw.githubusercontent.com/outlier-org/challenge-quiz/master/docs/wire-answer-incorrect.png)

![Progress](https://raw.githubusercontent.com/outlier-org/challenge-quiz/master/docs/wire-progress.png)

![Difficulty](https://raw.githubusercontent.com/outlier-org/challenge-quiz/master/docs/wire-difficulty.png)

![Score](https://raw.githubusercontent.com/outlier-org/challenge-quiz/master/docs/wire-score.png)

## Instructions

How to attempt this challenge:

1) Create a new repo in your account and note the git url
2) Clone this repo
3) Solve the challenge:
    * The pages should be responsive across the latest browsers (Chrome, Safari, Edge) and mobile devices. The options for multiple choice questions should be stacked vertically in mobile screens.
    * Make sure to handle exceptions (try..catch blocks and null checks) wherever applicable.
    * The questions from [questions.json](https://raw.githubusercontent.com/outlier-org/challenge-quiz/master/src/questions.json) can be statically imported in your react component. But bonus points will be provided if you integrate the question data using a demo api generated using [json-server](https://github.com/typicode/json-server#getting-started) or similar tools.
4) Set your new repo as the origin: `git remote set-url origin ${your repo url}`
5) Push your solution to your repo

You must follow these steps for your solution to be accepted -- forks or other methods will not be considered.

