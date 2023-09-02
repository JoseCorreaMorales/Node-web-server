# Node-web-server
 
 This is a simple web server built with Node.js and Express. It allows you to perform CRUD operations on a list of users stored in a JSON file.

## Installation
1. Clone the repository.
2. Install the dependencies with *`npm install`*.
3. Start the server with npm *`run dev`*.

## Usage
The server runs on http://localhost:3000. You can use any HTTP client to interact with the API. Here are the available endpoints:
* *`GET /`*: Returns a welcome message.
* *`GET /users`*: Returns a list of all users.
* *`GET /users/:id`*: Returns a single user with the given ID.
* *`POST /users`*: Creates a new user.
* *`PUT /users/:id`*: Updates a user with the given ID.
* *`DELETE /users/:id`*: Deletes a user with the given ID.

### Postman
To send parameters using Postman, follow these steps:

1. Open Postman and make sure the request is a POST method.
2. Select the "Body" tab.
3. Select "raw" and then "JSON" from the dropdown menu.
4. Enter the parameters in JSON format in the text box.
5. Click "Send" to send the request.

For example, to create a new user, you can send a POST request to *`http://localhost:3000/users`* with the following JSON in the request body:
```js
json
{ 
    "first_name": "Bruce",
    "last_name": "Billsberry",
    "email": "bbillsberry1m@jigsy.com"

}
```

This will create a new user with the details provided in the request body. You can verify if the user has been created successfully by sending a GET request to *`http://localhost:3000/users`*.
### Example
To create a new user, send a POST request to http://localhost:3000/users with the following JSON payload:

```json
json
{
        "first_name": "Skipton",
        "last_name": "Sola",
        "email": "ssola2m@last.fm"
}
```

The server will respond with a JSON object containing the new user:

```json
json
{
  "message": "User Created",
  "body": {
        "id": x,
        "first_name": "Kirby",
        "last_name": "O' Shea",
        "email": "koshea2l@jigsy.com"
  }
}

```
## License
This project is licensed under the ISC License.
