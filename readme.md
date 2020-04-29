[![Maintainability](https://api.codeclimate.com/v1/badges/ff819604fe5e7760010a/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/sorting-hat-be/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/ff819604fe5e7760010a/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/sorting-hat-be/test_coverage)

# API Documentation

**Backend delpoyed at [Heroku](https://tech-sorting-hat.herokuapp.com/)**:  _https://tech-sorting-hat.herokuapp.com_ <br>
**Staging environment delpoyed at [Heroku](https://staging-tech-sorting-hat.herokuapp.com/)**:  _https://staging-tech-sorting-hat.herokuapp.com_ <br>

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

### Questions Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/questions` | all users | Returns all the questions for the quiz. |
| GET    | `/api/questions/:id` | all users| Retrieve an existing question.             |
| POST    | `/api/questions` | admin | Create a question.             |
| PUT    | `/api/questions/:id` | admin | Modify an existing question.             |
| DELETE | `/api/questions/:id` | admin | Delete an existing question.                      |

### Answers Routes

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/api/answers`        | all users | Returns answers for all the questions of the quiz.               |
| GET    | `/api/answers/:id`    | all users| Returns a specific answer by its ID.             |
| GET    | `/api/answers/questions/:questionId` | all users | Returns all answers associated with that question. |
| POST    | `/api/answers/questions/:questionId` | admin | Create an answer for a specific question. |
| PUT    | `/api/answers/:id` | admin | Update a specific answer. |
| DELETE | `/api/answers/:id` | admin | Delete a specific answer. |

### Tracks Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/tracks` | all users      | Returns all the tracks and the corresponding points per answer choice. |
| GET    | `/api/tracks/:id` | all users | Returns a track based on its ID. |
| POST    | `/api/tracks` | admin         | Creates a new track.             |
| PUT    | `/api/tracks/:id` | admin         | Modify an existing track.        |
| DELETE | `/api/tracks/:id` | admin         | Delete an existing track.        |

### Points Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/points` | all users      | Returns all the points of each track associated with each answer choice. |
| GET    | `/api/points/:answerId` | all users | Returns a points associated with an asnwer choice. |
| POST    | `/api/points` | admin         | Creates a new track.             |
| PUT    | `/api/points/:id` | admin         | Modify an existing track.        |
| DELETE | `/api/points/:id` | admin         | Delete an existing track.        |

# Data Model

#### QUESTIONS

---

> GET `/api/questions` returns :
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

> GET `/api/questions/:id` returns :
```
{
    "id": 1,
    "question": "Ultrices neque ullamcorper, arcu luctus, sapien congue amet elit nibh?"
}
```

> POST `/api/questions` input sample:
```
{
    "question": "Sample question goes here"
}
```

> PUT `/api/questions/:id` input sample:
```
{
    "question": "Updated sample question goes here"
}
```

#### ANSWERS

---

> GET `/api/answers` returns :
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

> GET `/api/answers/:id` returns :
```
{
    "id": 1,
    "choice": "Nulla et pellentesque, facilisis pede",
    "question_id": 1
}
```

> GET `/api/answers/questions/:questionId` returns :
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

> POST `/api/answers/questions/:questionId` input sample:
```
{
    "choice": "Write a possible answer to a question here"
}
```

> PUT `/api/answers/:id` input sample:
```
{
    "choice": "Update an existing answer here"
}
```

#### TRACKS

---

> GET `/api/tracks` returns:
```
[
    {
        "id": 1,
        "name": "UX Design",
        "description": "UX Designers are focused on the user . . .",
        "shortDesc": "Design great experiences for users",
        "link": "placeholder.com",
        "strengths": "You enjoy talking with people . . .",
        "toggle": true
    },
    {
        "id": 2,
        "name": "Full Stack",
        "description": "Full Stack Developers are able to . . .",
        "shortDesc": "Create anything on the internet",
        "link": "https://lambdaschool.com/courses/full-stack-web-development",
        "strengths": "You are a bit of an introvert and enjoy close friends . . .",
        "toggle": true
    }
]
```

> GET `/api/tracks/:id` returns:
```
{
    "id": 1,
    "name": "UX Design",
    "description": "UX Designers are focused on the user . . .",
    "shortDesc": "Design great experiences for users"
    "link": "placeholder.com",
    "strengths": "You enjoy talking with people . . .",
    "toggle": true
}
```

> POST `/api/tracks`  input sample:
```
{
    "name": "New Track",
    "description": "This is fullstack track description",
    "shortDesc": "short description of the track"
    "link": "putOptionalLinkHere.com",
    "strengths": "You enjoy talking with people . . .",
}
```

> PUT `/api/tracks/:id`  input sample:
```
{
    "name": "android",
    "description": "Update track description",
    "shortDesc": "Update short description of the track",
    "link": "putOptionalLinkHere.com",
    "strengths": "You enjoy talking with people . . .",
    "toggle": true
}
```

#### POINTS

---

> GET `/api/points` returns:
```
[
    {
        "points": "4.30",
        "answer_id": 1,
        "track_id": 1
    },
    {
        "points": "2.30",
        "answer_id": 1,
        "track_id": 2
    }
]
```

> GET `/api/points/:answerId` returns:
```
[
    {
        "points": "4.30",
        "answer_id": 1,
        "track_id": 1
    },
    {
        "points": "2.30",
        "answer_id": 1,
        "track_id": 2
    }
]
```

## Actions

`find()` -> Returns all questions/answers/tracks/points, depending from which model it's imported from

`findById(id)` -> Returns a question/answer/track/point by its ID, depending from which model it's imported from

## Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

    *  PORT - Choose a port for the API to run
    *  NODE_ENV - Have this set to the development environment for the deployed database to read
    
## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./license_and_more/code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

>See [Frontend Documentation](https://github.com/Lambda-School-Labs/sorting-hat-fe) for details on the frontend of our project.

>[Trello Board](https://trello.com/b/w9YZxYzm/sorting-hat)

>[Product Canvas](https://www.notion.so/Sorting-Hat-c7c26dd376d74f418d4e0ec64f192a2a)

>[UX Design files](https://www.figma.com/file/CozTJxp3mWu8Ez0L9HZ76j/Sorting-Hat%2C-Ryan?node-id=1462%3A158)

>**Team Email** \
Account: techsortinghat@gmail.com \
Password: LambdaLabs22.

>**Heroku Account** for Tech Sorting Hat BE \
Name: Tech Sorting Hat \
Email: techsortinghat@gmail.com \
Password: LambdaLabs22.