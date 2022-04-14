# A simple-todo-api using local mysql database setup

### Endpoints
- `GET` http://localhost:3000/todo-api/ => Returns a short welcome message
- `GET` http://localhost:3000/todo-api/todo => Returns all the todo items stored on the DB
- `GET` http://localhost:3000/todo-api/todo/id => Returns the todo item based on specified ID prop
- `POST` http://localhost:3000/todo-api/todo => store a new todo. Sample body to be sent with request is below 
```JSON
   {
      "title": "Read a book",
      "checked": false
   }
```
- `PATCH` http://localhost:3000/todo-api/todo/id => Update an existing todo item. Sample POST JSON object works fine here as payload.
- `DELETE`http://localhost:3000/todo-api/todo/id => Delete a todo item from the DB using its ID
