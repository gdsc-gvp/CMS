# API Documentation

## Get Main Data

### Overview
The "Get Main Data" endpoint retrieves information about clubs and their associated posts.

### Endpoint
- URL: `/api/get-main-data`
- Method: 'GET'

### Authentication
This endpoint requires no specific authentication. It's open to the public.

### Request
This endpoint does not require any request parameters. You can simply make a GET request to the endpoint URL.

#### Example Request
``` http
GET https://api.example.com/api/get-main-data
```

### Response
- **Status Codes:** 
  
  -  **`200 OK`:** The request was successful.
  -  **`500 Internal Server Error`:** An error occurred on the server.
- **Response Body:** A JSON object with the following properties **:** 


  * **`clubData`** (Array)**:** An array of club objects with the following fields:
  * **`_id`** (string) **:** The unique identifier for the club.
  * **`name`** (string): The name of the club.
  
* **`postData`**  (Array)**:** An array of post objects with the following fields:
  
  -  **`_id `** (string) **:** The unique identifier for the post.
  -  **`title`** (string): The title of the post.
  -  **`clubId`** (string): The unique identifier of the club to which the post belongs.
  -  **`clubName`** (string): The name of the club to which the post belongs.

### Example Response

```json


{
  "clubData": [
    {
      "_id": "123",
      "name": "Club 1",
      // Other club data fields
    },
    {
      "_id": "456",
      "name": "Club 2",
      // Other club data fields
    },
    // ... (more club data objects)
  ],
  "postData": [
    {
      "_id": "789",
      "title": "Post 1",
      "clubId": "123",
      "clubName": "Club 1",
      // Other post data fields
    },
    {
      "_id": "101",
      "title": "Post 2",
      "clubId": "123",
      "clubName": "Club 1",
      // Other post data fields
    },
    // ... (more post data objects)
  ]
}

```

### Error Response
- **Status Code:** `500 Internal Server Error`
- **Response Body:** 

```json

{
  "message": "Internal server error message"
}
```
### Error Handling
If an error occurs, the API will respond with a `500 Internal Server Error`status code and provide a JSON object with an error message. Ensure your application handles these errors gracefully.


#  Club and Post Data

## Response Structure

This documentation describes the structure of the response when querying club and post data from the API.

### Response Object

The response is a JSON object with the following properties:

- `clubData` (Array): An array of club objects, where each club object includes the following fields:

    - `_id` (string): The unique identifier for the club.
    - `clubName` (string): The name of the club.
    - `clubDescription` (string): A brief description of the club.
  

    **Example**:

    ```json
    "clubData": [
        {
            "_id": "sampleid123",
            "clubName": "xyz",
            "clubDescription": "sample desc"
            // Additional club data fields...
        },
        {}, {}, ...
    ]
    ```

- `postData` (Array): An array of post objects, where each post object includes the following fields:

    - `_id` (string): The unique identifier for the post.
    - `postMessage` (string): The content of the post.
    - `likeCount` (number): The number of likes received by the post.
    - `clubId` (string): The unique identifier of the club to which the post belongs.
    - `createdAt` (string): The timestamp indicating the post's creation date.
    - `updatedAt` (string): The timestamp indicating the post's last update date.
  

    **Example**:

    ```json
    "postData": [
        {
            "_id": "sampleid123",
            "postMessage": "sample message",
            "likeCount": 20,
            "clubId": "698643jkhsd8w8y7438",
            "createdAt": "2023-10-08T14:00:18.025+00:00",
            "updatedAt": "2023-10-08T14:00:18.025+00:00"
            // Additional post data fields...
        },
        {}, {}, ...
    ]
    ```

### Notes

- This response structure is returned when querying club and post data from the API.



## Get Club Information

### Overview

The "Get Club Information" endpoint allows you to retrieve information about a specific club using its unique identifier.

### Endpoint

- **URL**: `/api/clubs/:clubId`
- **Method**: `GET`

### Authentication

This endpoint does not require specific authentication. It's publicly accessible.

### Request

- **URL Parameter**:
  - `clubId` (string, required): The unique identifier of the club you want to retrieve.

#### Example Request

```http
GET https://api.example.com/api/clubs/your_club_id
```

### Response
- **Status Codes :** 
  * `200 OK` **:**  Successful request. Club data is returned.
  * `404 Not Found` **:** The club with the specified `clubId` does not exist.
  * `500 Internal Server Error` **:** Server error.

- Response Body **:**  A JSON object containing club information or an error message.

### Example Response (Success)

```json

{
  "_id": "your_club_id",
  "clubName": "Your Club",
  // Other club data fields...
}
```

### Example Response (Not Found)

```json

{
  "message": "Club not found"
}
```

### Example Response (Internal Server Error)

```json

{
  "message": "Internal server error message"
}
```
### Error Handling

- If the specified `clubId` does not exist, the API will respond with a `404 Not Found` status code and provide an error message.

- If an error occurs on the server, the API will respond with a `500 Internal Server Error` status code and provide an error message. Be sure to handle these errors gracefully in your application.



## Get Team Information

### Overview

The "Get Team Information" endpoint allows you to retrieve details about the team members and their roles within a specific club using the club's unique identifier.

### Endpoint

- **URL**: `/api/teams/:clubId`
- **Method**: `GET`

### Authentication

This endpoint does not require specific authentication and is publicly accessible.

### Request

- **URL Parameter**:
  - `clubId` (string, required): The unique identifier of the club for which you want to retrieve team information.

#### Example Request

```http
GET https://api.example.com/api/teams/your_club_id

```

### Response

- **Status Codes :**

   * `200 OK` **:**  Successful request. Team data is returned.
  
   * `404 Not Found` **:** The club with the specified `clubId` does not exist or has no team members.
  
   * `500` Internal Server Error: Server error.

- **Response Body :** A JSON array containing team member information or an error message.

### Example Response (Success)

```json

[
  {
    "roleId": "role_id_1",
    "roleName": "Team Lead",
    "studentName": "John Doe"
  },
  {
    "roleId": "role_id_2",
    "roleName": "Developer",
    "studentName": "Jane Smith"
  },
  // ... (more team member objects)
]
```
### Example Response (Not Found)

```json
{
  "message": "No team members found for the specified club."
}
```
### Example Response (Internal Server Error)

```json

{
  "message": "Internal server error message"
}
```
### Error Handling

- If the specified `clubId` does not exist or has no team members, the API will respond with a `404 Not Found` status code and provide an error message.

- If an error occurs on the server, the API will respond with a `500 Internal Server Error` status code and provide an error message. Ensure that your application handles these errors gracefully.


## Get Posts for a Club

### Overview

The "Get Posts for a Club" endpoint allows you to retrieve a list of posts associated with a specific club by its unique identifier.

### Endpoint

- **URL :** `/api/posts/:clubId`
  
- **Method :** `GET`
  
  ### Authentication

  This endpoint does not require specific authentication and is publicly accessible.

### Request

- **URL Parameter :**
    * `clubId` (string, required)**:** The unique identifier of the club for which you want to retrieve posts.

### Example Request

```http
GET https://yourapi.com/api/posts/your_club_id
```
### Response
- **Status Codes :** 
  * `200 OK` **:** Successful request. A list of posts is returned.
  
  * `404 Not Found` **:** The club with the specified `clubId` does not exist or has no posts.
  
  * `500 Internal Server Error` **:**  Server error.

- **Response Body :** A JSON array containing post data or an error message.


### Example Response (Success)

``` json
[
  {
    "_id": "post_id_1",
    "title": "Sample Post 1",
    "content": "This is a sample post content for your club.",
    // Other post data fields...
  },
  {
    "_id": "post_id_2",
    "title": "Sample Post 2",
    "content": "Another example post content.",
    // Other post data fields...
  },
  // ... (more post data objects)
]

```

### Response
- **Status Codes :** 
    * `200 OK` **:** Successful request. A list of posts is returned.
    * `404 Not Found` **:** The club with the specified `clubId` does not exist or has no posts.
    * `500 Internal Server Error `**:** Server error.

- **Response Body :** A JSON array containing post data or an error message.
  

  ### Example Response (Success)


```json
[
  {
    "_id": "post_id_1",
    "title": "Sample Post 1",
    "content": "This is a sample post content for your club.",
    // Other post data fields...
  },
  {
    "_id": "post_id_2",
    "title": "Sample Post 2",
    "content": "Another example post content.",
    // Other post data fields...
  },
  // ... (more post data objects)
]

```

### Example Response (Not Found)

```json
{
  "message": "No posts found for the specified club."
}
```
### Example Response (Internal Server Error)


```json

{
  "message": "Internal server error message"
}
```

### Error Handling

- If the specified `clubId` does not exist or has no posts, the API will respond with a `404 Not Found` status code and provide an error message.

- If an error occurs on the server, the API will respond with a `500 Internal Server Error` status code and provide an error message. Be sure to handle these errors gracefully in your application.
