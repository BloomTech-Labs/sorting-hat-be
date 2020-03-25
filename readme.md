[![Maintainability](https://api.codeclimate.com/v1/badges/ff819604fe5e7760010a/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/sorting-hat-be/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/ff819604fe5e7760010a/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/sorting-hat-be/test_coverage)

# API Documentation

*Backend delpoyed at* [Heroku](https://tech-sorting-hat.herokuapp.com/): _https://tech-sorting-hat.herokuapp.com_ <br>
*Staging environment delpoyed at* [Heroku](https://staging-tech-sorting-hat.herokuapp.com/): _https://staging-tech-sorting-hat.herokuapp.com_ <br>

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
| GET    | `/api/questions` | all users | Returns all the questions for the quiz. |
| GET    | `/api/questions/:id` | all users| Retrieve an existing question.             |
| GET    | `/api/questions/:id/answers/:questionId` | all users | Returns answers corresponding to a question.|
| POST    | `/api/questions` | admin | Retrieve an existing question.             |
| PUT    | `/api/questions/:id` | admin | Modify an existing question.             |
| DELETE | `/api/questions` | admin | Delete a question.                      |

> GET to https://tech-sorting-hat.herokuapp.com`/api/questions` returns :
```
[
    {
        "question": "Ultrices neque ullamcorper, arcu luctus, sapien congue amet elit nibh?",
        "id": 1
    },
    {
        "question": "Lorem ipsum dolor sit amet, wisi eget dolor montes nulla odio, nonummy est parturient quis parturient amet?",
        "id": 2
    }
]
```

> GET to https://tech-sorting-hat.herokuapp.com`/api/questions/:id` returns :
```
{
    "id": 1,
    "question": "Ultrices neque ullamcorper, arcu luctus, sapien congue amet elit nibh?"
}
```

#### Answers Routes

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/api/answers`        | all users | Returns answers for all the questions of the quiz.               |
| GET    | `/api/answers/:id`    | all users| Returns a specific answer by its ID.             |
| GET    | `/api/answers/questions/:questionId` | all users | Returns all answers associated with that question ID |
| POST    | `/api/answers/questions/:questionId` | admin | Create an answer for a specific question |
| PUT    | `/api/answers/:id` | admin | Update a specific answer |
| DELETE | `/api/answers/:id` | admin | Delete a specific answer |

> GET to `/api/answers` returns :
```
[
    {
        "choice": "Nulla et pellentesque, facilisis pede",
        "id": 1,
        "question_id": 1
    },
    {
        "choice": "This is an answer to the question",
        "id": 2,
        "question_id": 1
    }
]
```

> GET to https://tech-sorting-hat.herokuapp.com `/api/answers/:id` returns :
```
{
    "id": 1,
    "choice": "Nulla et pellentesque, facilisis pede",
    "question_id": 1
}
```


> GET to https://tech-sorting-hat.herokuapp.com `/api/answers/questions/:questionId` returns :
```
[
    {
        "id": 1,
        "choice": "Nulla et pellentesque, facilisis pede",
        "question_id": 1
    },
    {
        "id": 2,
        "choice": "This is an answer to the question",
        "question_id": 1
    }
]
```
