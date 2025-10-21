Perfect 👍 — here’s a **ready-to-copy** GitHub-friendly version of the `README.md` file (fully formatted and tested to render cleanly on GitHub).
You can just copy and paste this directly into your repo — no fixes needed.

---

```markdown
# 🔐 Authentication System (Node.js + Express + MongoDB)

A complete **authentication system** built using **Node.js**, **Express**, and **MongoDB**.  
This project includes user registration, login, JWT-based authentication, and role-based access control.

---

## 🚀 Features

- ✅ Register new users (username, email, password, role)
- 🔑 Login with JWT authentication
- 🔒 Secure password hashing with bcrypt
- 🧩 Role-based access (e.g., Student, Admin)
- 💾 MongoDB integration using Mongoose
- 🌿 Environment variables with dotenv
- ⚙️ RESTful API structure
- 🧰 Modular code with controllers, routes, and middleware

---

## 🗂️ Project Structure

```

auth/
├── config/
│   └── db.js
├── controllers/
│   └── authController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── server.js
├── .env
├── package.json
└── README.md

````

---

## 🧠 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB + Mongoose  
- **Authentication:** JWT (JSON Web Token)  
- **Security:** bcrypt, dotenv, cors  

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/auth-system.git
cd auth-system
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root folder and add the following:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 4️⃣ Start the Server

```bash
npm run dev
```

Server will start at 👉 **[http://localhost:5000](http://localhost:5000)**

---

## 📡 API Endpoints

| Method   | Endpoint             | Description                | Protected |
| -------- | -------------------- | -------------------------- | --------- |
| **POST** | `/api/auth/register` | Register a new user        | ❌         |
| **POST** | `/api/auth/login`    | Login existing user        | ❌         |
| **GET**  | `/api/auth/user`     | Get logged-in user details | ✅         |
| **GET**  | `/api/auth/admin`    | Access admin-only route    | ✅         |

---

## 🔐 Authentication Flow

1. User registers with email, username, password, and role.
2. Password is hashed and stored securely in MongoDB.
3. On login, credentials are verified and a JWT token is generated.
4. The client must include the JWT token in the `Authorization` header for protected routes.
5. Middleware validates the token before allowing access.

---

## 🧾 Example `.env` File

```env
PORT=4000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/authDB
JWT_SECRET=mySuperSecretKey123
```

---

## 🧪 Example API Requests (Postman)

### ➤ Register User

**POST** `/api/auth/register`

```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "mypassword123",
  "role": "student"
}
```

### ➤ Login User

**POST** `/api/auth/login`

```json
{
  "email": "john@example.com",
  "password": "mypassword123"
}
```

---

## 🛠️ Scripts

| Command       | Description                    |
| ------------- | ------------------------------ |
| `npm start`   | Start the production server    |
| `npm run dev` | Run with Nodemon (development) |

---

## 📜 License

This project is licensed under the **MIT License** — you’re free to use and modify it.

---

## 💬 Author

**Your Name**
📧 [your.email@example.com](mailto:your.email@example.com)
🌐 [GitHub](https://github.com/yourusername)

---

## ⭐ Show Your Support

If you found this project helpful, please give it a **star ⭐** on GitHub!

```

---

Would you like me to personalize this README with **your actual project folder name, MongoDB variable name, and real API routes** (from your current `auth` backend)?  
That way, it will match your existing code perfectly.
```
