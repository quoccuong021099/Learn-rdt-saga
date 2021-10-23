`@baseUrl = https://js-post-api.herokuapp.com/api/students`

# Mini Project - Student Management

react-router-dom
@types/react-router-dom

feature: /login
layout: /admin

/admin/*
feature: /admin/dashboard
feature: /admin/students

auth / authentication

- login
- sign up / register
- forgot password

CLICK LOGIN

- Call API to login
- Success -> redirect Admin
- Failed -> show Error

LOGIN
LOGOUT

authSaga

LOGIN

- call login API to get tokeb + user info
- set token to local storage
- redirect to admin page

LOGOUT

- clear token from local storage
- redirect to login page

authSlice
authSaga
