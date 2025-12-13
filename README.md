# Clean Blog Project

This project is a simple **blog application** built with **Node.js, Express, MongoDB, and EJS**, based on the Clean Blog template.  
It follows the **MVC (Model–View–Controller)** architecture and supports full CRUD operations with pagination.

---

## 🚀 Features

- Create, read, update, and delete blog posts (CRUD)
- MVC architecture for clean and scalable code structure
- Server-side rendering with EJS
- Pagination for listing posts
- Method override for PUT & DELETE requests
- MongoDB with Mongoose ODM
- Bootstrap-based responsive UI (Clean Blog theme)
- Confirmation popup before deleting posts


---

## 🧠 MVC Architecture

### Model
- Defines the data structure and database schema.
- Uses **Mongoose** to interact with MongoDB.

### View
- EJS templates that render dynamic HTML pages.
- Responsible for displaying posts and forms to the user.

### Controller
- Handles incoming requests.
- Processes business logic.
- Communicates between Model and View.

---

## 📄 Pages & Routes

| Method | Route | Description |
|------|------|-------------|
| GET | `/`  | List all posts with pagination |
| GET | `/posts/:id` | Show single post |
| GET | `/add_post` | Add new post page |
| POST | `/posts` | Create a new post |
| GET | `/posts/edit/:id` | Edit post page |
| PUT | `/posts/:id` | Update a post |
| DELETE | `/posts/:id` | Delete a post |
| GET | `/about` | About page |

---

## 📑 Pagination

Pagination is implemented on the homepage to:
- Improve performance
- Limit the number of posts displayed per page
- Provide a better user experience

The number of posts per page can be adjusted in the controller.

---

## ⚙️ Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- Method-Override
- Bootstrap (Clean Blog Template)

---

## ▶️ Installation & Run

1. Clone the repository
```bash
git clone https://github.com/yourusername/cleanblog.git
```

2. Install dependencies
```
npm install
```

3. Start MongoDB
```
mongod
```

4. Run the application
```
node app.js
```

5.Open in browser
```
http://localhost:3000
```
