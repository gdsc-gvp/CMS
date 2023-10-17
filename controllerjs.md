# API Documentation


## Endpoint: /api/main

This endpoint retrieves data related to clubs and posts.

### HTTP Method: 'GET'

### Request Parameters

This endpoint does not require any specific query parameters or request body.

## Response

The response will be in JSON format and will contain two main components:

**1.'clubData' (Array of Objects): Information about clubs.**
<br /> **.** 'clubId' (String): The unique identifier of the club.<br> **.** 'clubName' (String): The name of the club.

**2.'postData'(Array of Objects): Information about posts, with an additional 'clubName' field added to each post.**
<br> **.** 'postId' (String): The unique identifier of the post.
<br> **.** 'postContent' (String): The content of the post.
<br> **.** 'clubId' (String): The unique identifier of the club to which the post belongs.
<br> **.** 'clubName' (String): The name of the club to which the post belongs.


### Error Handling
**.** If an error occurs during the API request, the server will respond with a status code of 500 and an error message in the response body.

{
  "message": "Internal server error: [error message]"
}

This provides an overview of the /api/main endpoint, its request parameters, response format, and error handling.





   




  








