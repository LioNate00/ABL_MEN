# Pharmacy-Home API Documentation

This documentation provides a detailed guide to using the API endpoints for the `pharmacy-home` project. The API includes user authentication, product management, session management, and payment functionalities.

## Table of Contents

1. [Authentication](#authentication)
    - [Register](#register)
    - [Login](#login)
    - [Sessions](#Sessions)
2. [Products](#products)
    - [Get All Products](#get-all-products)
    - [Create Product](#create-product)
    - [Update Product](#update-product)
    - [Delete Product](#delete-product)
3. [Sessions](#sessions)
    - [Get All Sessions](#get-all-sessions)
4. [Payments](#payments)
    - [Create Payment](#create-payment)
    - [Get All Payments](#get-all-payments)

## Authentication

### Register

- **URL**: `/api/auth/register`
- **Method**: `POST`
- **Headers**: 
  - `Content-Type: application/json`
- **Body**:
    ```json
    {
      "username": "newuser",
      "password": "password123",
      "role": "user"  // or "admin" for admin users
    }
    ```
- **Response**:
    - `201 Created`: User successfully registered.
    - `400 Bad Request`: Invalid input data.

### Login

- **URL**: `/api/auth/login`
- **Method**: `POST`
- **Headers**: 
  - `Content-Type: application/json`
- **Body**:
    ```json
    {
      "username": "newuser",
      "password": "password123"
    }
    ```
- **Response**:
    - `200 OK`: Successful login. Returns JWT token.
    - `401 Unauthorized`: Invalid credentials.

### Logout

- **URL**: `/api/sessions/<session_id>`
- **Method**: `POST`
- **Headers**: 
  - `Authorization: Bearer <YOUR_JWT_TOKEN>`
- **Response**:
    - `200 OK`: Successful logout.
    - `401 Unauthorized`: Invalid or missing JWT token.

## Products

### Get All Products

- **URL**: `/api/products`
- **Method**: `GET`
- **Headers**: 
  - `Authorization: Bearer <YOUR_ADMIN_JWT_TOKEN>`
- **Response**:
    - `200 OK`: Returns a list of products.
    - `401 Unauthorized`: Invalid or missing JWT token.

### Create Product

- **URL**: `/api/products`
- **Method**: `POST`
- **Headers**: 
  - `Content-Type: application/json`
  - `Authorization: Bearer <YOUR_ADMIN_JWT_TOKEN>`
- **Body**:
    ```json
    {
      "name": "New Skincare Product",
      "category": "Skincare",
      "price": 19.99,
      "stock": 50,
      "description": "A nice skincare product"
    }
    ```
- **Response**:
    - `201 Created`: Product successfully created.
    - `400 Bad Request`: Invalid input data.
    - `401 Unauthorized`: Invalid or missing JWT token.

### Update Product

- **URL**: `/api/products/:id`
- **Method**: `PUT`
- **Headers**: 
  - `Content-Type: application/json`
  - `Authorization: Bearer <YOUR_ADMIN_JWT_TOKEN>`
- **Body**:
    ```json
    {
      "name": "Updated Skincare Product",
      "category": "Skincare",
      "price": 24.99,
      "stock": 30,
      "description": "An updated nice skincare product"
    }
    ```
- **Response**:
    - `200 OK`: Product successfully updated.
    - `400 Bad Request`: Invalid input data.
    - `401 Unauthorized`: Invalid or missing JWT token.
    - `404 Not Found`: Product not found.

### Delete Product

- **URL**: `/api/products/:id`
- **Method**: `DELETE`
- **Headers**: 
  - `Authorization: Bearer <YOUR_ADMIN_JWT_TOKEN>`
- **Response**:
    - `200 OK`: Product successfully deleted.
    - `401 Unauthorized`: Invalid or missing JWT token.
    - `404 Not Found`: Product not found.

## Sessions

### Get All Sessions

- **URL**: `/api/sessions`
- **Method**: `GET`
- **Headers**: 
  - `Authorization: Bearer <YOUR_ADMIN_JWT_TOKEN>`
- **Response**:
    - `200 OK`: Returns a list of sessions.
    - `401 Unauthorized`: Invalid or missing JWT token.

## Payments

### Create Payment

- **URL**: `/api/payments`
- **Method**: `POST`
- **Headers**: 
  - `Content-Type: application/json`
  - `Authorization: Bearer <YOUR_USER_JWT_TOKEN>`
- **Body**:
    ```json
    {
      "productId": 1,
      "quantity": 2
    }
    ```
- **Response**:
    - `201 Created`: Payment successfully created.
    - `400 Bad Request`: Invalid input data.
    - `401 Unauthorized`: Invalid or missing JWT token.

### Get All Payments

- **URL**: `/api/payments`
- **Method**: `GET`
- **Headers**: 
  - `Authorization: Bearer <YOUR_USER_JWT_TOKEN>`
- **Response**:
    - `200 OK`: Returns a list of payments.
    - `401 Unauthorized`: Invalid or missing JWT token.

---

## Note

- Replace `<YOUR_ADMIN_JWT_TOKEN>`, `<YOUR_USER_JWT_TOKEN>`, and `<YOUR_JWT_TOKEN>` with the actual JWT tokens obtained from the login responses.
- Make sure your server is running and properly handling requests.

This documentation provides a step-by-step guide to using the `pharmacy-home` API endpoints. If you encounter any issues, please check the request examples and ensure all required headers and body parameters are correctly set.
