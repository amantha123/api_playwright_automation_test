import { test, expect } from '@playwright/test';

let objectId: string;

test.describe('Positive Scenarios', () => {
  
  test('GET request to list all objects', async ({ request }) => {
    const response = await request.get('https://api.restful-api.dev/objects');
    expect(response.ok()).toBeTruthy();
    console.log(`Response status: ${response.status()}`);
    const data = await response.json();
    console.log(data);
  });

  test('POST request to create a new object', async ({ request }) => {
    const newObject = {
      "name": "Apple MacBook Pro 16",
      "data": {
        "year": 2019,
        "price": 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
      }
    };

    const response = await request.post('https://api.restful-api.dev/objects', {
      data: newObject
    });

    expect(response.ok()).toBeTruthy();
    console.log(`Response status: ${response.status()}`);
    const postResponseData = await response.json();
    objectId = postResponseData.id;
    console.log(`Object ID: ${objectId}`);
  });

  test('GET request to fetch the created object', async ({ request }) => {
    expect(objectId).toBeDefined();
    const response = await request.get(`https://api.restful-api.dev/objects/${objectId}`);
    expect(response.ok()).toBeTruthy();
    console.log(`Response status: ${response.status()}`);
    const data = await response.json();
    console.log(data);
  });

  test('PUT request to edit the created object', async ({ request }) => {
    expect(objectId).toBeDefined();
    const newObject = {
      "name": "Apple MacBook Pro 16",
      "data": {
        "year": 2021,
        "price": 1999.99,
        "CPU model": "Apple M1 Pro",
        "Hard disk size": "1 TB",
        "color": "silver"
      }
    };
    const response = await request.put('https://api.restful-api.dev/objects/${objectId}', {
      data: newObject
      });
    const statusCode = response.status();
    console.log(`Response status code: ${statusCode}`);
    const data = await response.text();
    console.log(data);
    });

    test('DELETE request to delete the created object', async ({ request }) => {
      expect(objectId).toBeDefined();
      const response = await request.delete(`https://api.restful-api.dev/objects/${objectId}`);
      
      console.log(`Response status: ${response.status()}`);
      const responseBody = await response.text();
      console.log(`Response body: ${responseBody}`);
      
      expect(response.ok()).toBeTruthy();
    });
  });

  test.describe('Negative Scenarios', () => {
    test('GET request to non-existent endpoint', async ({ request }) => {
      const response = await request.get('https://api.restful-api.dev/non-existent');
      expect(response.ok()).toBeFalsy();
      expect(response.status()).toBe(404);
      console.log(`Response status: ${response.status()}`);
      const responseBody = await response.text();
      console.log(`Response body: ${responseBody}`);
    });

    test('POST request with invalid data', async ({ request }) => {
      const invalidObject = {
        "name": "",
        "data": {}
      };
      const response = await request.post('https://api.restful-api.dev/objects', {
        data: invalidObject
      });
    
      expect(response.ok()).toBeTruthy();
      expect(response.status()).toBe(200);
      console.log(`Response status: ${response.status()}`);
      const responseBody = await response.text();
      console.log(`Response body: ${responseBody}`);
    });

    test('GET request to non-existent object', async ({ request }) => {
      const response = await request.get('https://api.restful-api.dev/objects/non-existent-id');
      expect(response.ok()).toBeFalsy();
      expect(response.status()).toBe(404);
      console.log(`Response status: ${response.status()}`);
      const responseBody = await response.text();
      console.log(`Response body: ${responseBody}`);
    });

    test('PUT request with invalid data', async ({ request }) => {
      const invalidObject = {
        "name": "",
        "data": {}
      };
  
      const response = await request.put('https://api.restful-api.dev/objects/non-existent-id', {
        data: invalidObject
      });
  
      expect(response.ok()).toBeFalsy();
      expect(response.status()).toBe(404);
      console.log(`Response status: ${response.status()}`);
      const responseBody = await response.text();
      console.log(`Response body: ${responseBody}`);
    });

    test('DELETE request to non-existent object', async ({ request }) => {
      const response = await request.delete('https://api.restful-api.dev/objects/non-existent-id');
      
      expect(response.ok()).toBeFalsy();
      expect(response.status()).toBe(404);
      console.log(`Response status: ${response.status()}`);
      const responseBody = await response.text();
      console.log(`Response body: ${responseBody}`);
    });
  
  });