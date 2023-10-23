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

## Sign In
### Overview
The "Sign In" endpoint allows users to log in with their credentials.

### Endpoint
- **URL:** `/api/signin`
- **Method:** `POST`

### Request
- **Parameters:**
   - `email` (string): User's email address.
   - `password` (string): User's password.

#### Example Request
```plaintext
POST https://api.example.com/api/signin
Content-Type: application/json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Response
- **Status Codes:**
     - `201 Created`: User successfully signed in.
     - `404 Not Found`: User not found.
     - `400 Bad Request`: Invalid credentials.
     - `500 Internal Server Error`: Server error.
- **Response Body:**
    - `accessToken` (string): JWT token for authentication.
    - `user` (object): User information.

#### Example Response (Success)
```plaintext
{
  "accessToken": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "user@example.com",
    // Other user data fields...
  }
}
```

#### Example Response (Not Found)
```plaintext
{
  "message": "User not found"
}
```

#### Example Response (Bad Request)
```plaintext
{
  "message": "Invalid credentials"
}
```

#### Example Response (Internal Server Error)
```plaintext
{
  "message": "Internal server error message"
}
```

## Sign In as Admin
### Overview
The "Sign In as Admin" endpoint allows users to log in as administrators.

### Endpoint
- **URL:** `/api/signin-admin`
- **Method:** `POST`

### Request
- **Parameters:**
    - `email` (string): User's email address.
    - `password` (string): User's password.
    - `clubId` (string): Identifier of the club.

- **Response Body:**
    - `accessToken` (string): JWT token for authentication.
    - `user` (object): User information.
    - `clubId` (string): Identifier of the club.

#### Example Response (Success)
```plaintext
{
  "accessToken": "your_jwt_token",
  "user": {
    "_id": "admin_id",
    "name": "Admin User",
    "email": "admin@example.com",
    // Other admin user data fields...
  },
  "clubId": "club_id"
}
```

#### Example Response (Not Found)
```plaintext
{
  "message": "User not found"
}
```

#### Example Response (Bad Request)
```plaintext
{
  "message": "Invalid credentials"
}
```

#### Example Response (Forbidden)
```plaintext
{
  "message": "Not an admin"
}
```

####  Example Response (Internal Server Error)
```plaintext
{
  "message": "Internal server error message"
}
```

## Update Club
### Overview
The "Update Club" endpoint allows the modification of club information.

### Endpoint
- **URL:** `/api/update-club`
- **Method:** `POST`

### Request
- **Parameters:**
    - `clubId` (string): Identifier of the club to be updated.
    - `newClubName` (string): New name for the club.
    - `newClubDescription` (string): New description for the club.
    - `newClubImage` (string): New image for the club.

#### Example Request
```plaintext
POST https://api.example.com/api/update-club
Content-Type: application/json
{
  "clubId": "club_id",
  "newClubName": "Updated Club Name",
  "newClubDescription": "Updated club description",
  "newClubImage": "https://example.com/new_image.jpg"
}
```

### Response
- **Status Codes:**
    - `200 OK`: Club information updated successfully.
    - `500 Internal Server Error`: Server error.

- **Response Body:**
    - `message` (string): Success message.

#### Example Response (Success)
```plaintext
{
  "message": "Club updated successfully"
}
```

#### Example Response (Internal Server Error)
```plaintext
{
  "message": "Internal server error message"
}
```
## Add Role

### Overview
The "Add Role" endpoint allows you to add a role to a student in a club.

### Endpoint
- **URL:** `/api/addRole`
- **Method:** `POST`

### Request
- **Parameters:**
  - `name` (string, required): The name of the student.
  - `clubId` (string, required): The ID of the club where the role is being added.
  - `email` (string, required): The email of the student.
  - `roleName`(string, required): The name of the role being assigned.`
  - `adminPrivilage`(boolean, required): Whether the role has administrative privileges (true or false).

#### Example Request
```plaintext
{
  "name": "John Doe",
  "clubId": "club123",
  "email": "john.doe@example.com",
  "roleName": "Treasurer",
  "adminPrivilage": true
}
```

### Response
- **Status Codes:**
  - `200`: OK
  - `400`: Bad Request
  - `500`: Internal Server Error
- **Response Body:**
   - `message` (string): Success message.

#### Example Response (Success)
```plaintext
{
  "message": "Role added successfully"
}
```

#### Example Response (Bad Request)
```plaintext
{
  "message": "Invalid request. Please provide all required parameters."
}
```
#### Example Response (Internal Server Error)
```plaintext
{
  "message": "An internal server error occurred. Please try again later."
}
```

## Update Role

### Overview
This "Update Role" endpoint allows you to update an existing role.

### Endpoint
- **URL:** `/api/updateRole`
- **Method:** `POST`

### Request
- **Parameters:**
  - `roleId` (string, required): The ID of the role you want to update.
  - `newRoleName` (string, optional): The new name for the role (can be null).
  - `newAdminPrivilage`(boolean, optional): The new administrative privilege for the role     (true or false, can be null).
#### Example Request
```plaintext
{
  "roleId": "role123",
  "newRoleName": "Secretary",
  "newAdminPrivilage": true
}
```
### Response
- **Status Codes:**
  - `200`: OK
  - `400`: Bad Request
  - `500`: Internal Server Error
- **Response Body:**
  - `message` (string): Success message.
#### Example Response (Success)
```plaintext
{
  "message": "Updated successfully"
}
```

#### Example Response (Bad Request)
```plaintext
{
  "message": "Invalid request. Please provide a valid role ID for updating."
}
```
#### Example Response (Internal Server Error)
```plaintext
{
  "message": "An internal server error occurred. Please try again later."
}
```

## Delete Role

### Overview
This "Delete Role" endpoint allows you to delete an existing role by its ID.

### Endpoint
- **URL:** `/api/deleteRole`
- **Method:** `POST`

### Request
- **Parameters:**
  - roleId (string, required): The ID of the role you want to delete.
#### Example Request
```plaintext
{
  "roleId": "role123"
}
```
### Response
- **Status Codes:**
  - `200`: OK
  - `400`: Bad Request
  - `500`: Internal Server Error
- **Response Body:**
  - `message` (string): Success message.
#### Example Response (Success)
```plaintext
{
  "message": "Successfully deleted"
}
```
#### Example Response (Bad Request)
```plaintext
{
  "message": "Invalid request. Please provide a valid roleId."
}
```
#### Example Response (Internal Server Error)
```plaintext
{
  "message": "An internal server error occurred. Please try again later."
}
```
