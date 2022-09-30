# NoSQL_Sosh_Net_API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)

## Description
AS A social media startup

## Table of Contents
  - [USER STORY](#user_story)
  - [ACCEPTANCE CRIT](#acceptance_crit)
  - [Models](#models)
  - [Endpoints](#endpoints)
  - [Packages](#packages)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Installation](#installation)
  - [Screenshots and Video](#screenshots_video)
  - [Contributing](#contributing)
  - [Questions](#questions)

  - [License](#license)
      

## USER STORY

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## ACCEPTANCE CRIT

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list


Testing restful API calls with Insomnia Core  

---
## Models
- User
- Thought
- Reaction (used as a subdocument in Thought)

## Endpoints
**User**
- Get all users:        `GET /api/users`
- Create a user:        `POST /api/users`
- Get user by ID:       `GET /api/users/:id`
- Update a user:        `PUT /api/users/:id`
- Delete a user:        `DELETE /api/users/:id`
- Add a friend:         `PUT /api/users/:userId/friends/:friendId`
- Delete a friend:      `DELETE /api/users/:userId/friends/:friendId`

**Thought**
- Get all thoughts:     `GET /api/thoughts`
- Create a thought:     `POST /api/thoughts`
- Get thought by ID:    `GET /api/thoughts/:id`
- Update a thought:     `PUT /api/thoughts/:id`
- Delete a thought:     `DELETE /api/thoughts/:id`

**Reaction**
- Add a reaction:       `PUT /api/thoughts/:id/reactions`
- Delete a reaction:    `DELETE /api/thoughts/:id/reactions`

## Packages
- express
- mondoDB
- mongoose
- date
## Usage
I WANT an API for my social network that uses a NoSQL database
## Tests
Testing restful API calls with Insomnia Core: See Endpoints below

## Installation
npm init -y to intitiate the folder, 
npm i to download the packages. 
Additionally, this project uses Express, MongoDB, Mongoose, and Date.js. 

Once set up, run with npm start

## Screenshots and Video
Video 1: USER GetAll, GetOneById, Create, Update, and Delete
https://drive.google.com/file/d/1hXp0X0FqiJZynWJn52Ora6j8-kGB4fT7/view

Video 2: THOUGHTS GetAll, GetOneById, Create, Update, and Delete; FRIENDS and REACTIONS Add and Remove
https://drive.google.com/file/d/1YkOOIjfYx_Hx4M7GIvJqsBfqLWRN3dw9/view

Video 3: REACTIONS Add and Delete
https://drive.google.com/file/d/163PzM0aPi0kyljlFxDRhb3KR8uzq42RX/view


## Questions

Have questions?
You can find me on GitHub:
https://github.com/BeKind-Rewind

Or email me at:
challenge641@gmail.com


## License

Licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.
    



