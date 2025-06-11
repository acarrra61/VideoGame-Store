# Videogame Store

A full-stack e-commerce web application where users can browse, sell, and purchase video games. Built with **React**, **Node.js**, and **MySQL**.

---

## Features

- Browse available games
- Add games to cart with real-time updates
- Sell your own games through a form
- Complete checkout with form validation
- Data stored and fetched from a MySQL backend

---

## Tech Stack

**Frontend:**

- React
- React Router
- Context API for cart state
- Tailwind CSS

**Backend:**

- Node.js
- Express
- MySQL
- RESTful API (JSON communication)

---

## Getting Started

### Prerequisites

- Node.js
- MySQL
- npm

### 1. Clone the repository

```bash
git clone https://github.com/your-username/videogame-store.git
cd videogame-store

### 2. Install dependencies
npm install

### 3. Setup MySQL database
CREATE TABLE games (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  type VARCHAR(100),
  description TEXT,
  image VARCHAR(255),
  price VARCHAR(20)
);

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  address TEXT NOT NULL,
  city VARCHAR(50) NOT NULL,
  zip VARCHAR(20) NOT NULL,
  card_number VARCHAR(20),
  expiry VARCHAR(10),
  cvc VARCHAR(5),
);

### 4. Start the server backend
node server.js

### 5. Run the frontend
npm run dev
```
