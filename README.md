# Auth Module 2
## Authors
- [Audrey Patterson](https://github.com/arpatterson31)
- [Jason Taisey](https://github.com/JTaisey389)
- [Julien Edwards](https://github.com/TrunkOfUkuleles)
- [Lydia Minehan-Tubic](https://github.com/LydiaMT)
## Deployed Site: [Heroku](https://auth-module-2.herokuapp.com/)

# About the Application
## Overview

This application is a back end API that connects to a front end EJS file. The front end and back end communicate via an ajax call. 

## Setup
- Clone down to your device
- In the root directory, run `npm install` to install node modules
- Add a `PORT`, `MONGODB_URI`, and `SECRET` to your `.env`
- Run `nodemon` to see your live server via local host in your browser.

## Test
In the command line at the root directory, run `npm test` to make sure all test are passing as expected.

## Back End Dependencies

- @code-fellows/supergoose
- base-64
- bcrypt
- body-parser
- cors
- dotenv
- ejs
- express
- express-session
- jest
- jsonwebtoken
- method-override
- mongoose
- morgan
- multer
- supertest

## Front End Dependencies

- jQuery
- ejs
- Ajax
- js-cookies


## Data Model
## Users

```js
// Role: [Capabilities]
user: ['read', 'update'] 
admin: ['read', 'create', 'update', 'delete']
```

### Admin 
```js
{ "username": "admin" , "password": "admin", "role": "admin" }
// Signup Return
{
    "user": {
        "role": "admin",
        "_id": "608f124b91e09e00154b3cf9",
        "username": "admin",
        "password": "$2b$10$YgirV2uLZGNPMtJasZqrwuHUBO0qcCM4HxIL138VXckqClpbqFfpm",
        "__v": 0,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjE5OTg5MDY3fQ.dFzFR4AFxQIxf66Aq3puYSf7tSMrwvB9IJloAVezL3Y",
        "capabilities": [
            "read",
            "create",
            "update",
            "delete"
        ],
        "id": "608f124b91e09e00154b3cf9"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjE5OTg5MDY3fQ.dFzFR4AFxQIxf66Aq3puYSf7tSMrwvB9IJloAVezL3Y"
}
```
### User
```js
{ "username": "user" , "password": "user", "role": "user" }
// Signup Return
{
    "user": {
        "role": "user",
        "_id": "608f120f91e09e00154b3cf8",
        "username": "user",
        "password": "$2b$10$2FEQjgzT3Yq5KnSsF6ZJJeoUmrpEV7uOEFtcJ.JtpGtLmRDb/nJ5S",
        "__v": 0,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJpYXQiOjE2MTk5ODkwMDd9.Rcgqesi4k9hizuDyU1WlXL24PQjl4ca0LF61Lzrxhdk",
        "capabilities": [
            "read",
            "update"
        ],
        "id": "608f120f91e09e00154b3cf8"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJpYXQiOjE2MTk5ODkwMDd9.Rcgqesi4k9hizuDyU1WlXL24PQjl4ca0LF61Lzrxhdk"
}
```

### Routes

- GET `/` Homepage
- POST `/signup` Create an account
- POST `/signin` Login to an existing account
- GET `/secret` Access the secret admin area. Can only be accessed by administrators

### Resources
- [Frontend encoding with base-64](https://gist.github.com/brandonmwest/a2632d0a65088a20c00a)
- [How to create a simple login functionality in Express](https://medium.com/weekly-webtips/how-to-create-a-simple-login-functionality-in-express-5274c44c20df)
- [How to add Header Authorzation for POST Form](https://stackoverflow.com/questions/32901015/how-to-add-header-authorization-for-post-form-using-js-ajax-jquery/58964440#58964440)
- [js-cookie](https://github.com/js-cookie/js-cookie)
- [jQuery ajax() Methods](https://www.w3schools.com/jquery/ajax_ajax.asp)