

# 🚀 Crypto Tracker – React Application

A modern **React-based cryptocurrency tracking web application** that displays real-time crypto market data using the **CoinGecko API**.
The app allows users to search, sort, and view detailed information about cryptocurrencies with an interactive price chart.

---

## 📌 Live Demo

🔗 **Vercel Deployment:**
[https://crypto-react-website.vercel.app/](https://crypto-react-website.vercel.app/)

🔗 **AWS EC2 Deployment (Manual):**
*Deployed on an AWS EC2 instance using Nginx for continuous running*

---

## 🧩 Features

* 📈 Real-time cryptocurrency market data
* 🔍 Search coins by name or symbol
* 🔃 Sort by rank, price, market cap, or 24h change
* 🗂️ Toggle between Grid and List view
* 📊 Detailed coin page with 7-day price chart
* 🔁 Auto-refresh data at regular intervals
* ⏳ Loading & error handling
* 🚦 Client-side routing with dynamic routes

---

## 🛠️ Tech Stack

**Frontend**

* React (Functional Components + Hooks)
* React Router
* Recharts
* CSS
* Vite

**API**

* CoinGecko Public API

**CI/CD**

* GitHub Actions

**Deployment**

* Vercel
* AWS EC2 (Manual Deployment)
* Nginx Web Server

---

## 🗂️ Project Structure

```
crypto-tracker/
│── src/
│   ├── api/            # API service layer
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page-level components
│   ├── utils/          # Utility & formatter functions
│   ├── App.jsx         # App routing
│   ├── main.jsx        # React entry point
│   └── index.css       # Global styles
│── public/
│── index.html
│── package.json
│── vite.config.js
```

---

## 🔄 Application Flow

1. The app starts from `main.jsx`, where React mounts the `App` component.
2. `App.jsx` defines routes for Home and Coin Detail pages.
3. The Home page fetches crypto data from CoinGecko using `useEffect`.
4. Data is stored in state and processed for searching and sorting.
5. Each coin is rendered using a reusable `CryptoCard` component.
6. Clicking a coin navigates to a dynamic detail page using route params.
7. The Coin Detail page fetches individual coin data and historical chart data.
8. Utility functions format prices, percentages, and market cap values.

---

## 🔌 API Integration

The project uses a dedicated **API service layer** to handle data fetching:

* Fetch all cryptocurrencies
* Fetch individual coin details
* Fetch historical chart data

This separation keeps UI components clean and improves maintainability.

---

## ⚙️ CI/CD with GitHub Actions

* GitHub Actions is configured to run automated checks on every push
* Ensures successful build before deployment
* Helps catch issues early during development
* Integrated with Vercel for automatic production deployments

---

## 🚀 Deployment

### 🔹 Vercel Deployment

* Application is deployed on **Vercel**
* Automatic deployment triggered on every push to the `main` branch
* Fast global CDN ensures optimal performance

---

### 🔹 AWS EC2 Deployment (Manual)

In addition to Vercel, this project is **manually deployed on AWS EC2** to demonstrate cloud deployment fundamentals.

#### 🔧 Deployment Setup

* **EC2 Instance:** Ubuntu
* **Web Server:** Nginx
* **App Type:** Static React build
* **Process:** Manual deployment

#### 📌 Deployment Steps (High-Level)

1. Created an EC2 instance and connected via SSH
2. Installed Node.js and Nginx
3. Built the React app using:

   ```bash
   npm run build
   ```
4. Copied build files to:

   ```
   /var/www/html
   ```
5. Configured Nginx to serve the React app
6. Enabled and restarted Nginx for continuous running

#### ✅ Benefits

* Demonstrates real-world cloud deployment knowledge
* Shows understanding of **EC2, SSH, Linux, and Nginx**
* App runs continuously without relying on frontend hosting platforms

---

## 🧠 Key Concepts Demonstrated

* Component-based architecture
* State management using `useState`
* Side effects with `useEffect`
* Client-side routing & dynamic routes
* Props & unidirectional data flow
* Conditional rendering
* List rendering & component reusability
* Separation of concerns
* CI/CD fundamentals
* Cloud deployment using AWS EC2

---

## 📈 Future Improvements

* Pagination or infinite scrolling
* API caching for better performance
* Dark/light theme toggle
* Unit and integration testing
* Migration to Next.js for SSR
* Docker-based deployment on AWS

---

## 🙌 Author

**Ashutosh Raj Gupta**
React Developer | MERN Stack | Generative AI Enthusiast

---

⭐ **If you like this project, feel free to star the repository!**

---
