[![Maintainability](https://api.codeclimate.com/v1/badges/ff819604fe5e7760010a/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/sorting-hat-be/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/ff819604fe5e7760010a/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/sorting-hat-be/test_coverage)

# API Documentation

#### Backend delpoyed at [Heroku](https://tech-sorting-hat.herokuapp.com/) <br>
#### staging environment delpoyed at [Heroku](https://staging-tech-sorting-hat.herokuapp.com/) <br>

## Getting started

To get the server running locally:

- Clone this repo
- **yarn install** to install all required dependencies
- **yarn run server** to start the local server
- **yarn test** to start server using testing environment

### NodeJS

This framework was chosen for the following reasons:

-    built on Chrome's JavaScript runtime which is convenient as Javascript is the only choice to develop new web applications in the web browser.
-    adding/changing functionality is easy as changes to the source code aren't needed.
-    lightweight as its executions are a series of asynchronous callback.
-    good to learn to understand and build on existing applications that use NodeJS

## Endpoints

#### Questions Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/questions` | all questions      | Returns all the questions for the quiz. |
| GET    | `/api/questions/:id` | specific question         | Retrieve an existing question.             |
| POST    | `/api/questions` | specific question         | Retrieve an existing question.             |
| PUT    | `/api/questions/:id` | specific question         | Modify an existing question.             |
| DELETE | `/api/questions` | specific question         | Delete a question.                      |

#### Answers Routes

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/api/answers`        | all answers           | Returns answers for all the questions of the quiz.               |
| GET    | `/api/answers/:id`    | specific answer | Returns a specific answer by its ID.             |
| GET    | `/api/answers/:questionId`        | asnwers that share questionId | Returns answers for a single question.                    |
| POST   | `/api/answers/:questionId` | none                | Creates a new user as owner of a new organization. |
| PUT    | `/api/:userId`        | owners, supervisors |                                                    |
| DELETE | `/api/:userId`        | owners, supervisors |                                                    |
