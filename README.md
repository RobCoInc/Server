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
2. Companys
    1. GET
        1. [Get All Companys](#get-all-companys)
    2. POST
        1. [Add a Company](#add-a-company)

## Get all Users
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

## Get all Companys
Type: GET

Description: Returns all companys

#### URL: 

`http://localhost/api/companys`

## Add a Company
Type: POST

Description: Adds a new company to the company table

#### Params: 

1. _id (Not required, auto increment is used)
2. companyName
3. secureNum
4. level
5. location
6. email

#### URL: 

`http://localhost/api/companys`
