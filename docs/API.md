# Admin Panel API Reference

Base URL:
http://localhost:5000

---

## Authentication

### Login

POST /api/auth/login

Body:
{
"email": "admin@example.com",
"password": "Admin@123"
}

Response:
{
"success": true,
"message": "Login successful",
"data": {
"token": "JWT_TOKEN"
}
}

---

### Register (Admin Only)

POST /api/auth/register

Body:
{
"email": "admin@example.com",
"password": "Admin@123",
"role": "admin"
}

---

## Users

### Get All Users

GET /api/users

Headers:
Authorization: Bearer <token>

---

### Get User By ID

GET /api/users/:id

---

### Create User

POST /api/users

---

### Delete User

DELETE /api/users/:id

---

## Health

GET /health
