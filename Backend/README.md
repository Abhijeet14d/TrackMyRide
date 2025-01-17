# User Registration Endpoint

## Endpoint: `/users/register`

### Method: POST

### Description:
This endpoint is used to register a new user. It validates the input data, hashes the user's password, saves the user to the database, and returns an authentication token.

### Request Body:
The request body should be a JSON object with the following fields:

- `firstname` (string, required, minimum length: 3)
- `lastname` (string, minimum length: 3)
- `email` (string, required, must be a valid email, minimum length: 5)
- `password` (string, required, minimum length: 6)

Example:
```json
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}


Success (201):
Status Code: 201 Created Response Body:
{
  "user": {
    "_id": "user_id",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "socketId": null
  },
  "token": "auth_token"
}


Validation Error (400):
Status Code: 400 Bad Request Response Body:
{
  "errors": [
    {
      "msg": "Error message",
      "param": "field_name",
      "location": "body"
    }
  ]
}





# User Login Endpoint
## Endpoint: /users/login
Method: POST
### Description:
This endpoint is used to authenticate a user. It validates the input data, verifies the user's credentials, and returns an authentication token.

### Request Body:
The request body should be a JSON object with the following fields:

# email (string, required, must be a valid email, minimum length: 5)
# password (string, required, minimum length: 6)

Example:
{
  "email": "john.doe@example.com",
  "password": "password123"
}


Success (200):
Status Code: 200 OK Response Body:
{
  "user": {
    "_id": "user_id",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "socketId": null
  },
  "token": "auth_token"
}


Authentication Error (401):
Status Code: 401 Unauthorized Response Body:
{
  "message": "Invalid email or password"
}


Validation Error (400):
Status Code: 400 Bad Request Response Body:
{
  "errors": [
    {
      "msg": "Error message",
      "param": "field_name",
      "location": "body"
    }
  ]
}





# User Logout Endpoint
## Endpoint: /users/logout
Method: GET
### Description:
This endpoint is used to log out a user. It clears the authentication token from cookies and adds the token to a blacklist to prevent further use.

Success (200):
Status Code: 200 OK Response Body:
{
  "message": "User logged out successfully"
}




# Get User Profile Endpoint
## Endpoint: /users/profile
Method: GET
### Description:
This endpoint is used to get the authenticated user's profile.

Success (200):
Status Code: 200 OK Response Body:
{
  "user": {
    "_id": "user_id",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "socketId": null
  }
}