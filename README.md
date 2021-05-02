# auth-module

```js
// ADMIN
// username: admin pw: admin

{
    "user": {
        "role": "admin",
        "_id": "608b40aa899b11552c3bd3e3",
        "username": "admin",
        "password": "$2b$10$FkXcxG0.0Qej9h/LV5p9EuQEnuE3K.olvoMLvDksR0FNlmV3ANMOG",
        "__v": 0,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjE5NzM4Nzk0fQ.YCiBqrnAEkgT4IgGptNntQpcDmlu8UtOw-z4GaSw_0Y",
        "capabilities": [
            "read",
            "create",
            "update",
            "delete"
        ],
        "id": "608b40aa899b11552c3bd3e3"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjE5NzM4Nzk0fQ.YCiBqrnAEkgT4IgGptNntQpcDmlu8UtOw-z4GaSw_0Y"
}

// USER
// username: user pw: user

{
    "user": {
        "role": "user",
        "_id": "608b4116899b11552c3bd3e4",
        "username": "user",
        "password": "$2b$10$BSdbNXykSj/SvqpGD4tMiutfTcIuh44bdPN4x1hrl/6Hj9FCH0shy",
        "__v": 0,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJpYXQiOjE2MTk3Mzg5MDJ9.tbNuRFGda-JAQm75dCp0yGno2N6fzQd8boppB6imkpM",
        "capabilities": [
            "read",
            "update"
        ],
        "id": "608b4116899b11552c3bd3e4"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJpYXQiOjE2MTk3Mzg5MDJ9.tbNuRFGda-JAQm75dCp0yGno2N6fzQd8boppB6imkpM"
}
```

### Resources
- [Frontend encoding with base-64](https://gist.github.com/brandonmwest/a2632d0a65088a20c00a)
- [How to create a simple login functionality in Express](https://medium.com/weekly-webtips/how-to-create-a-simple-login-functionality-in-express-5274c44c20df)
- [How to add Header Authorzation for POST Form](https://stackoverflow.com/questions/32901015/how-to-add-header-authorization-for-post-form-using-js-ajax-jquery/58964440#58964440)
- [js-cookie](https://github.com/js-cookie/js-cookie)
- [jQuery ajax() Methods](https://www.w3schools.com/jquery/ajax_ajax.asp)