# User Registration Endpoint

## Endpoint: `/users/register`

### Method: POST

### Description:
This endpoint is used to register a new user. It validates the input data, hashes the user's password, saves the user to the database, and returns an authentication token.

### Request Body:
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname` (string, required, minimum length: 3)
  - `lastname` (string, minimum length: 3)
- `email` (string, required, must be a valid email, minimum length: 5)
- `password` (string, required, minimum length: 6)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}


Success (201):
Status Code: 201 Created
Response Body:

{
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  },
  "token": "auth_token"
}

Validation Error (400):
Status Code: 400 Bad Request
Response Body:


{
  "errors": [
    {
      "msg": "Error message",
      "param": "field_name",
      "location": "body"
    }
  ]
}

Example:

curl -X POST http://localhost:3000/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'

Response:

{
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  },
  "token": "auth_token"
}


## User Login Endpoint

### Endpoint: `/users/login`

### Method: POST

### Description:
This endpoint is used to authenticate a user. It validates the input data, verifies the user's credentials, and returns an authentication token.

### Request Body:
The request body should be a JSON object with the following fields:

- `email` (string, required, must be a valid email, minimum length: 5)
- `password` (string, required, minimum length: 6)

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}

Success (200): Status Code: 200 OK Response Body:

{
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  },
  "token": "auth_token"
}

Authentication Error (401): Status Code: 401 Unauthorized Response Body:

{
  "message": "Invalid email or password"
}

Validation Error (400): Status Code: 400 Bad Request Response Body:

{
  "errors": [
    {
      "msg": "Error message",
      "param": "field_name",
      "location": "body"
    }
  ]
}

Example:

curl -X POST http://localhost:3000/users/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "password123"
}'


GitHub Copilot
Plan:

Add documentation for the /users/login endpoint to the README.md file.

Code:

Success (200): Status Code: 200 OK Response Body:

Authentication Error (401): Status Code: 401 Unauthorized Response Body:

Validation Error (400): Status Code: 400 Bad Request Response Body:

Example:

Response:

{
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  },
  "token": "auth_token"
}