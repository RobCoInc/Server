# server 
[![Build Status](https://travis-ci.org/RobCoInc/server.svg?branch=master)](https://travis-ci.org/RobCoInc/server)

This repository contains the Node server and its endpoints provided by the Suplex API.

# Endpoints

<hr>

List of current (hopefully) endpoints that are available.

## Get all users
Type: GET

Description: Returns all users

#### URL: 

`http://localhost/api/users`

## Get user by email
Type: GET

Description: Returns the user with a specified email address

#### Params: 

1. Email

#### URL: 

`http://localhost/api/users/[email]`

## Add a user
Type: POST

Description: Adds a new user to the user table

#### Params: 

1. _id (Not required, auto increment is used)
2. password
3. email
4. firstName
5. lastName
6. companyId
7. cellNumber
8. isAdmin
9. isBasic

#### URL: 

`http://localhost/api/users`