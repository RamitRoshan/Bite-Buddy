# 🍔 Bite‑Buddy

**Bite‑Buddy** is a modern and responsive **food delivery web app** built with React. It allows users to browse restaurants, view their menus, search for dishes, filter by top-rated options, and manage a shopping cart - all with smooth navigation and a clean UI.

This project demonstrates key frontend development practices like routing, state management, lazy loading, dynamic rendering, and live API integration.

---

## 🖼️ Preview

> 📍 Home Page – View list of restaurants  
> 🍽️ Restaurant Menu – See items and add to cart  
> 🛒 Cart Page – View and remove items  
> 🔍 Search – Filter restaurants by name  
> ⭐ Top Rated – Show only restaurants with rating > 4.5  
> 🟢🔴 Online Status – Display if the user is online/offline  
> 👤 User Name – Dynamic user name shown in navbar and cart  
> ⏳ Shimmer UI – Loading animation while data is fetched

---

## 🚀 Features

- ✅ View a list of restaurants (fetched from live API)
- ✅ Click into each restaurant to see its full menu
- ✅ Add or remove items from your cart
- ✅ Live search to filter restaurants by name
- ✅ **Top Rated filter** – Show only restaurants with rating > 4.5
- ✅ **Online/Offline status indicator** in the Navbar
- ✅ **User name placeholder** – shows in Navbar & Cart (`User: Ramit Roshan`)
- ✅ Responsive design for mobile and desktop
- ✅ Client-side routing with nested routes
- ✅ Lazy loading for performance optimization
- ✅ Reusable components (e.g., cards, headers, buttons)
- ✅ Shimmer effect during data load

---

## 🧰 Tech Stack

| Tool / Library        | Purpose                                                        |
|------------------------|----------------------------------------------------------------|
| **React**              | Build component-based UI                                       |
| **React Router DOM**   | Handle client-side routing                                     |
| **useContext / Redux** | Manage global state (e.g., user & cart)                        |
| **JavaScript (ES6+)**  | Core app logic and interactivity                               |
| **Tailwind CSS**       | Styling and responsive design                                  |
| **Parcel**             | Frontend build tool (bundler)                                  |
| **Mocked Swiggy API**  | Live API simulation for restaurant & menu data                 |

---

## 🛠️ Interactive Features

| Feature                        | Description                                                                 |
|-------------------------------|-----------------------------------------------------------------------------|
| 🟢🔴 **Online Status**        | Navbar shows `Online Status: 🟢` when connected and `🔴` when offline        |
| 👤 **Dynamic User Name**      | A name input updates the user name shown in Navbar & Cart (e.g., `User: Ramit Roshan`) |
| 🔍 **Live Search**            | Filter restaurants by typing keywords                                       |
| ⭐ **Top Rated Button**       | Shows restaurants with **rating > 4.5** only                                |
| 🛒 **Cart Management**        | Add/remove food items with real-time cart updates                           |
| ⏳ **Shimmer UI**             | Displays loaders while content is being fetched                            |

---
## Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector

---

## 📁 Folder Structure

```
src/
│
├── components/         # UI elements (Header, Footer, RestaurantCard, etc.)
├── pages/              # Route-level pages (Home, RestaurantMenu, Cart)
├── utils/              # Helper functions and constants
├── context/            # Global state management (e.g., user, cart)
├── assets/             # Images, icons
├── App.js              # Main component with route definitions
├── index.js            # Entry point
```

---

## 📋 Summary

**Bite-Buddy** is a complete frontend project for a food delivery platform. It combines clean UI, dynamic features, and modern web practices. From restaurant listings and search filters to online status indicators and user personalization — this app gives a practical, real-world feel for how production-ready food ordering interfaces work.

---

## 🌐 Live Demo

🚀 [**Live link**](https://bite-buddy-git-main-ramit-roshans-projects.vercel.app/)

 
---

## For Recruiters

This project reflects my-core skills in:

- Building modern React apps with reusable components
- Managing state with hooks and context
- UI/UX optimization (loaders, responsiveness)
- Clean, readable code and scalable structure
- How we can implement Lazy Loading

 
---

💡 **Made by ❤️ Ramit Roshan

