# server 
[![Build Status](https://travis-ci.org/RobCoInc/server.svg?branch=master)](https://travis-ci.org/RobCoInc/server)

This repository contains the Node server and its endpoints provided by the Suplex API.

# Endpoints

<hr>

List of current (hopefully) endpoints that are available. Please see https://github.com/RobCoInc/server/issues/7 if you require another endpoint that does not exist.

## Table Of Contents
1. Users
	1. GET
		1. [Get All Users](#get-all-users)
		2. [Get User by Email](#get-user-by-email)
		3. [Get User by ID](#get-user-by-id)
	2. POST
		1. [Add a User](#add-a-user)

## Get all users
Type: GET

Description: Returns all users

#### URL: 

`http://localhost/api/users`

## Get User by Email
Type: GET

Description: Returns the user with a specified email address

#### Params: 

1. Email

#### URL: 

`http://localhost/api/users/getUserByEmail/[email]`

## Get User by ID
Type: GET

Description: Returns the user with a specified id

#### Params: 

1. ID

#### URL: 

`http://localhost/api/users/getUserById/[id]`

## Add a User
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
