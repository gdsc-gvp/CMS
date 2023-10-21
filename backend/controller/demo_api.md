## Create Club

### Overview
The "Create Club" endpoint allows the creation of a new club.

### Endpoint
- **URL:** `/create-club`
- **Method:** `POST`

### Request
- **Parameters:**
  - `clubName` (string): The name of the club.
  - `clubDescription` (string): A brief description of the club.
  - `clubImage` (string): URL or image data for the club image.

#### Example Request
```plaintext
POST https://api.example.com/create-club
{
  "clubName": "New Club",
  "clubDescription": "This is a new club.",
  "clubImage": "https://example.com/club-image.jpg"
}
```

### Response
- **Status Codes:**
  - `200 OK`: The club was created successfully.
  - `400 Bad Request`: An error occurred. Check the response body for details.
  - `Response Body`: A JSON object with the created club data or an error message.

#### Example Response (Success)
```plaintext
{
  "_id": "generated_id",
  "clubName": "New Club",
  "clubDescription": "This is a new club.",
  "clubImage": "https://example.com/club-image.jpg"
}
```

#### Example Response (Bad Request)
```plaintext
{
  "message": "Error: Club name is required."
}
```
## Sign Up
### Overview
The "Sign Up" endpoint is used for registering new users.

### Endpoint
- **URL:** `/sign-up`
- **Method:** `POST`

### Request
- **Parameters:**
    - `name` (string): The name of the user.
    - `email` (string): The email address of the user.
    - `password` (string): The password for the user.
    - `profile` (string): Additional profile information.

#### Example Request
```plaintext
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword",
  "profile": "Some additional information."
}
```

### Response
- **Status Codes:**
   - `200 OK`: User creation was successful.
   - `400 Bad Request`: An error occurred. Check the response body for details.
   - `500 Internal Server Error`: Server error.
- **Response Body:** A JSON object with a success message or an error message.

#### Example Response (Success)
```plaintext
{
  "message": "User Creation Successful"
}
```

#### Example Response (User Already Exists)
```plaintext
{
  "message": "User already exists"
}
```

#### Example Response (Bad Request)
```plaintext
{
  "message": "Error: Invalid email address."
}
```




