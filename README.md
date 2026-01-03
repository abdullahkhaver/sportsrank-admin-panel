# Sports Rank Admin Panel (Frontend + Backend)
Full Stack Sports Rank Admin Panel in Mern Stack

---

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

## Health

GET /health
