# Full Stack Project: Sign Up, Login, Logout

This is a full-stack web application that includes sign up, login, and logout functionality. It uses bcrypt for password hashing, JWT (JSON Web Tokens) for authentication, and cookies for session management.

## Features

- User registration with secure password hashing.
- User login with JWT-based authentication.
- User logout and session management with cookies.
- Frontend built with React and Next.js.
- Backend powered by Node.js, Express.js, and MongoDB with Mongoose.

## Prerequisites

- Node.js (>= 14.x)
- MongoDB (>= 4.x)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-folder>


```bash
cd client
npm install
cd ../server
npm install
```
## Configure Environment Variables:

# JWT Secret Key
JWT_SECRET=your-secret-key

# MongoDB Connection String
MONGO_URI=your-mongodb-connection-string

## Start the Development Server:

```bash
cd ../client
npm run dev
cd ../server
npm run dev
```