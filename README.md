# 🚀 Crypto Tracker – React Application

A modern **React-based cryptocurrency tracking web application** that displays real-time crypto market data using the **CoinGecko API** . The app allows users to search, sort, and view detailed information about cryptocurrencies with an interactive price chart.

---

## 📌 Live Demo

🔗 **Deployed on Vercel:** https://crypto-react-website.vercel.app/

---

## 🧩 Features

- 📈 Real-time cryptocurrency market data
- 🔍 Search coins by name or symbol
- 🔃 Sort by rank, price, market cap, or 24h change
- 🗂️ Toggle between Grid and List view
- 📊 Detailed coin page with 7-day price chart
- 🔁 Auto-refresh data at regular intervals
- ⏳ Loading & error handling
- 🚦 Client-side routing with dynamic routes

---

## 🛠️ Tech Stack

- **Frontend:** React (Functional Components + Hooks)
- **Routing:** React Router
- **Charts:** Recharts
- **API:** CoinGecko Public API
- **Styling:** CSS
- **Build Tool:** Vite
- **CI/CD:** GitHub Actions
- **Deployment:** Vercel

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
4. Data is stored in state and processed for search and sorting.
5. Each coin is rendered using a reusable `CryptoCard` component.
6. Clicking a coin navigates to a dynamic detail page using route params.
7. The Coin Detail page fetches individual coin data and chart data.
8. Utility functions format prices and market cap values.

---

## 🔌 API Integration

The project uses a dedicated API layer to handle data fetching:

- Fetch all cryptocurrencies
- Fetch individual coin details
- Fetch historical chart data

This separation keeps components clean and improves maintainability.

---

## ⚙️ CI/CD with GitHub Actions

- GitHub Actions is configured to run automated checks on every push.
- Ensures code quality and build consistency before deployment.
- Helps catch issues early during development.

---

## 🚀 Deployment on Vercel

- The application is deployed on **Vercel** .
- Automatic deployment is triggered on every push to the main branch.
- Fast global CDN ensures optimal performance.

---

## 🧠 Key Concepts Demonstrated

- Component-based architecture
- State management using `useState`
- Side effects with `useEffect`
- Client-side routing & dynamic routes
- Props & unidirectional data flow
- Conditional rendering
- List rendering & reusability
- Separation of concerns

---

## 📈 Future Improvements

- Pagination or infinite scrolling
- API caching for better performance
- Dark/light theme toggle
- Unit and integration testing
- Migration to Next.js for SSR

---

## 🙌 Author

**Ashutosh Raj Gupta**
React Developer | MERN Stack | Generative AI Enthusiast

---

⭐ If you like this project, feel free to star the repository!
