<!-- Routes -->

## Routes

### [Users](#users) _`/users`_

- [Create a user](#---create-a-user)
- [Login](#---Login)
- [Get user](#---get-user)
- [Update user](#---update-user)
- [Delete user](#---delete-user)

## Users

### &nbsp; ‣ &nbsp; Create a user

### Create a user

```http
POST http://localhost:5000/users
```

### &nbsp; ☰ &nbsp; Request

###### Body

```json
{
  "name": "teste",
  "email": "teste@teste.com",
  "password": "teste",
  "phonenumber": "3288997766"
}
```

### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties           |
| :---------: | :-------------------: | :---------------------------: |
|   **201**   |        Created        |      `data: {"Created"}`      |
|   **400**   |      Bad Request      | `error: { message, details }` |
|   **401**   |     Unauthorized      | `error: { message, details }` |
|   **404**   |       Not Found       | `error: { message, details }` |
|   **422**   | Unprocessable Entity  | `error: { message, details }` |
|   **500**   | Internal Server Error | `error: { message, details }` |

### &nbsp; ‣ &nbsp; Login

### Login

```http
POST http://localhost:5000/users/login
```

### &nbsp; ☰ &nbsp; Request

###### Body

```json
{
  "email": "teste@teste.com",
  "password": "teste"
}
```

### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties           |
| :---------: | :-------------------: | :---------------------------: |
|   **201**   |        Created        |      `data: {tokenData}`      |
|   **400**   |      Bad Request      | `error: { message, details }` |
|   **401**   |     Unauthorized      | `error: { message, details }` |
|   **404**   |       Not Found       | `error: { message, details }` |
|   **422**   | Unprocessable Entity  | `error: { message, details }` |
|   **500**   | Internal Server Error | `error: { message, details }` |

###### tokenData example

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

### &nbsp; ‣ &nbsp; Get user

### Get user

```http
GET http://localhost:5000/users/${userId}
```

### &nbsp; ☰ &nbsp; Request

###### Headers

```json
{
  "Authorization": "this-is-a-needlessly-long-placeholder-api-key"
}
```

### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties           |
| :---------: | :-------------------: | :---------------------------: |
|   **200**   |          OK           |      `data: {userData}`       |
|   **400**   |      Bad Request      | `error: { message, details }` |
|   **404**   |       Not Found       | `error: { message, details }` |
|   **422**   | Unprocessable Entity  | `error: { message, details }` |
|   **500**   | Internal Server Error | `error: { message, details }` |

###### userData example

```json
{
  "id": 1,
  "email": "teste@teste.com",
  "type": false,
  "name": "teste",
  "phonenumber": "3288997745",
  "created_at": "2022-12-01T19:13:58.629Z",
  "updated_at": "2022-12-01T22:24:57.946Z"
}
```

### &nbsp; ‣ &nbsp; Update user

### Update user

```http
PUT http://localhost:5000/users/${userId}
```

### &nbsp; ☰ &nbsp; Request

###### Body

```json
{
  "name": "teste",
  "email": "teste@teste.com",
  "password": "teste",
  "phonenumber": "3288997745",
  "type": false
}
```

###### Headers

```json
{
  "Authorization": "this-is-a-needlessly-long-placeholder-api-key"
}
```

### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties           |
| :---------: | :-------------------: | :---------------------------: |
|   **200**   |          OK           |      `data: {userData}`       |
|   **400**   |      Bad Request      | `error: { message, details }` |
|   **404**   |       Not Found       | `error: { message, details }` |
|   **422**   | Unprocessable Entity  | `error: { message, details }` |
|   **500**   | Internal Server Error | `error: { message, details }` |

###### userData example

```json
{
  "id": 1,
  "email": "teste@teste.com",
  "type": false,
  "name": "teste",
  "phonenumber": "3288997745",
  "created_at": "2022-12-01T19:13:58.629Z",
  "updated_at": "2022-12-01T22:24:57.946Z"
}
```

### &nbsp; ‣ &nbsp; Delete user

### Delete user

```http
DELETE http://localhost:5000/users/${userId}
```

### &nbsp; ☰ &nbsp; Request

###### Headers

```json
{
  "Authorization": "this-is-a-needlessly-long-placeholder-api-key"
}
```

### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |              Properties               |
| :---------: | :-------------------: | :-----------------------------------: |
|   **200**   |          OK           | `data: {"User successfully deleted"}` |
|   **400**   |      Bad Request      |     `error: { message, details }`     |
|   **404**   |       Not Found       |     `error: { message, details }`     |
|   **422**   | Unprocessable Entity  |     `error: { message, details }`     |
|   **500**   | Internal Server Error |     `error: { message, details }`     |
