# server 
[![Build Status](https://travis-ci.org/RobCoInc/server.svg?branch=master)](https://travis-ci.org/RobCoInc/server)

This repository contains the Node server and its endpoints provided by the Suplex API.

# Endpoints

<hr>

List of current (hopefully) endpoints that are available.

## Table Of Contents
1. Users
	1. GET
		1. [Get All Users](#getallusers)
		2. [Get User by Email](#getuserbyemail)
		3. [Get User by ID](#getuserbyid)
	2. POST
		1. [Add a User](#adduser)

## Get all users <a name="getallusers"></a>
Type: GET

Description: Returns all users

#### URL: 

`http://localhost/api/users`

## Get User by Email <a name="getuserbyemail"></a>
Type: GET

Description: Returns the user with a specified email address

#### Params: 

1. Email

#### URL: 

`http://localhost/api/users/getUserByEmail/[email]`

## Get User by ID <a name="getuserbyid"></a>
Type: GET

Description: Returns the user with a specified id

#### Params: 

1. ID

#### URL: 

`http://localhost/api/users/getUserById/[id]`

## Add a User <a name="adduser"></a>
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