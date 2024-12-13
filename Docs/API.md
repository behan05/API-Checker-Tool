# API Check Tool - API Documentation

Welcome to the **API Documentation** for the **API Check Tool**. Here, you'll find all the details on how to interact with the API, including the available endpoints, request/response formats, and usage examples.

---

## Base URL

All API requests are made to the following base URL:

```
http://localhost:3000/api
```

---

## Endpoints

### 1. **Test API**

- **Method**: `POST`
- **URL**: `/test`
- **Description**: Test an API endpoint by sending a request and receiving the response.

#### Request Body:

```json
{
  "url": "https://api.example.com/endpoint",
  "method": "GET",
  "headers": {
    "Authorization": "Bearer YOUR_TOKEN"
  },
  "body": {}
}
```
## Response:
- Success (200 OK):
```json
{
  "status": "success",
  "data": { "response_data": "value" }
}
```
- Error (400 Bad Request):
```json
{
  "status": "error",
  "message": "Invalid API endpoint or request data"
}

```

## 2. Get API Status
- Method: GET
- URL: /status
- Description: Check the status of the API server.

## Response:
Success (200 OK):

```json
{
  "status": "running",
  "uptime": "48 hours"
}

```

## Error (503 Service Unavailable):

```json
{
  "status": "error",
  "message": "Service is down"
}

```

## Authentication
Some endpoints may require authentication. Use a Bearer Token in the Authorization header for secure access.

```
Authorization: Bearer YOUR_TOKEN

```
---
## Error Codes
- 200 OK: The request was successful.
- 400 Bad Request: The request was invalid or malformed.
- 401 Unauthorized: Missing or invalid authentication token.
- 500 Internal Server Error: A server error occurred while processing the request.
---
## Rate Limiting
To ensure fair usage, the API has rate limits:
- 500 requests/hour per user
If you exceed the limit, you will receive a 429 Too Many Requests response.

## Test API Example
- Request:
```
curl -X POST http://localhost:3000/api/test \
  -H "Content-Type: application/json" \
  -d '{"url": "https://api.example.com/endpoint", "method": "GET"}'

```

- Response:

```
{
  "status": "success",
  "data": { "response_data": "value" }
}

```
---

## Conclusion
With these endpoints, you can easily test and interact with the API Check Tool. For any additional queries or support, feel free to reach out!

## Contact
For any questions or feedback, feel free to reach out:

- 📧 Email: [behankrbth@outlook.com](mailto:behankrbth@outlook.com)
- 💼 LinkedIn: [Behan Kumar](https://www.linkedin.com/in/behan-kumar-25151b2ba/)


---


### Structure Breakdown:
- **Base URL**: The main URL where the API is hosted.
- **Endpoints**: Details for each endpoint (`/test`, `/status`) including request and response formats.
- **Authentication**: Instructions on using a Bearer Token for endpoints that require authentication.
- **Error Codes**: A guide to understanding common error responses.
- **Rate Limiting**: Information on API usage limits to prevent overuse.
- **Examples**: Example `curl` commands to test the API.

This structure provides clear guidance on how to interact with the API for testing and checking the status of the tool. You can copy and paste this content into your **API Docs README** file!


## Best Wishes ✨
Thank you for taking the time to read through this document and for using the API Check Tool. Your journey in the world of APIs is important and invaluable. We wish you the best of luck in your projects and hope this tool makes your development process smoother and more enjoyable.

Happy coding, and may your APIs always respond just the way you want them to! 🚀💻