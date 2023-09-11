
# API Documentation

This documentation provides an overview of the **Person API**, a simple REST API built with Express.js, Mongoose, and MongoDB for CRUD operations on a "person" resource. This API allows you to create, read, update, and delete person records.

## Table of Contents

- [API Documentation](#api-documentation)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the API](#running-the-api)
  - [API Endpoints](#api-endpoints)
    - [Create a Person](#create-a-person)
    - [Get a Person by ID](#get-a-person-by-id)
    - [Update a Person](#update-a-person)
    - [Delete a Person](#delete-a-person)
  - [Request and Response Formats](#request-and-response-formats)
  - [Sample Usage](#sample-usage)
    - [Create a Person](#create-a-person-1)
    - [Get a Person by ID](#get-a-person-by-id-1)
    - [Update a Person](#update-a-person-1)
    - [Delete a Person](#delete-a-person-1)
 
## Introduction

The Person API is designed to perform CRUD operations on a "person" resource. It provides endpoints for creating, retrieving, updating, and deleting person records in a MongoDB database. The API is built using Express.js and Mongoose, making it easy to use and extend.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- MongoDB installed and running locally, or you have a MongoDB connection URI.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/person-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd person-api
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

### Running the API

1. Start the MongoDB server if not already running.

2. Start the API by running:

   ```bash
   node app.js
   ```

   The API will be available at `http://localhost:3000`.

## API Endpoints

### Create a Person

- **URL:** `/api/persons`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "name": "John Doe",
  }
  ```

- **Response:**

  ```json
  {
    "_id": "5fd5a4f1b2f317001c5c7c64",
    "name": "John Doe",
    "__v": 0
  }
  ```

### Get a Person by ID

- **URL:** `/api/persons/:id`
- **Method:** `GET`
- **Response:**

  ```json
  {
    "_id": "5fd5a4f1b2f317001c5c7c64",
    "name": "John Doe",
    "__v": 0
  }
  ```

### Update a Person

- **URL:** `/api/persons/:id`
- **Method:** `PUT`
- **Request Body:**

  ```json
  {
    "name": "Updated Name",
  }
  ```

- **Response:**

  ```json
  {
    "_id": "5fd5a4f1b2f317001c5c7c64",
    "name": "Updated Name",
    "__v": 0
  }
  ```

### Delete a Person

- **URL:** `/api/persons/:id`
- **Method:** `DELETE`
- **Response:** `204 No Content`

## Request and Response Formats

- **Request Format:** Requests should be sent in JSON format.
- **Response Format:** Responses are in JSON format.

## Sample Usage

Here are some sample requests and responses for the Person API:

### Create a Person

**Request:**

```http
POST /api/persons
Content-Type: application/json

{
  "name": "Alice Johnson",
  
}
```

**Response:**

```json
{
  "_id": "5fd5a4f1b2f317001c5c7c65",
  "name": "Alice Johnson",  
  "__v": 0
}
```

### Get a Person by ID

**Request:**

```http
GET /api/persons/5fd5a4f1b2f317001c5c7c65
```

**Response:**

```json
{
  "_id": "5fd5a4f1b2f317001c5c7c65",
  "name": "Alice Johnson",
  "__v": 0
}
```

### Update a Person

**Request:**

```http
PUT /api/persons/5fd5a4f1b2f317001c5c7c65
Content-Type: application/json

{
  "name": "Updated Alice Johnson",
}
```

**Response:**

```json
{
  "_id": "5fd5a4f1b2f317001c5c7c65",
  "name": "Updated Alice Johnson",
  "__v": 0
}
```

### Delete a Person

**Request:**

```http
DELETE /api/persons/5fd5a4f1b2f317001c5c7c65
```

**Response:**

```http
204 No Content
```
