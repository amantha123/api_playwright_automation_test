# API Testing with Playwright
This project contains a set of automated tests for a RESTful API using Playwright. The tests cover both positive and negative scenarios to ensure the API behaves as expected.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-directory>

2. Install the dependencies:
npm install

**Running the Tests
To run all the tests, use the following command:    
npx playwright test

**Test Structure
The tests are organized into two main sections: Positive Scenarios and Negative Scenarios.

**Positive Scenarios
1. GET request to list all objects
- Fetches and logs all objects from the API.
2. POST request to create a new object
- Creates a new object and logs the response status and object ID.
3. GET request to fetch the created object
- Fetches the newly created object using its ID and logs the response.
4. PUT request to edit the created object
- Updates the created object with new data and logs the response status and data.
5. DELETE request to delete the created object
- Deletes the created object using its ID and logs the response status and body.

**Negative Scenarios
6.GET request to non-existent endpoint
- Attempts to fetch data from a non-existent endpoint and expects a 404 status.
7. POST request with invalid data
- Attempts to create an object with invalid data and expects a failure.
8. GET request to non-existent object
- Attempts to fetch a non-existent object and expects a 404 status.
9. PUT request with invalid data
Attempts to update a non-existent object with invalid data and expects a 404 status.
10. DELETE request to non-existent object
- Attempts to delete a non-existent object and expects a 404 status.
