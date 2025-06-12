# 🍔 Bite‑Buddy

**Bite‑Buddy** is a modern and responsive **food delivery web app** built with React. It allows users to browse restaurants, view their menus, search for dishes, and manage a shopping cart — all with smooth navigation and a clean UI.

This project demonstrates key frontend development practices like routing, state management, lazy loading, dynamic data rendering, and Live API integration.
---

## 🖼️ Preview

> 📍 Home Page – View list of restaurants  
> 🍽️ Restaurant Menu – See items and add to cart  
> 🛒 Cart Page – View and remove items  
> 🔍 Search – Filter restaurants by name  
> ⏳ Shimmer UI – Loading animation during data fetch

---

## 🚀 Features

- ✅ View a list of restaurants (fetched from live-API)
- ✅ Click into each restaurant to see its menu
- ✅ Add or remove items from your cart
- ✅ Live search for restaurant names
- ✅ Responsive design for mobile and desktop
- ✅ Client-side routing with nested routes
- ✅ Lazy loading for performance optimization
- ✅ Reusable components (e.g., cards, headers)
- ✅ Shimmer effect for better UX on data load

---

## 🧰 Tech Stack

| Tool / Library       | Purpose                                                       |
|----------------------|---------------------------------------------------------------|
| **React**            | Build reusable UI components                                  |
| **React Router DOM** | Handle client-side routing and navigation                     |
| **Redux / useContext** | Manage global state (e.g., cart)                            |
| **JavaScript (ES6+)**| Application logic and interactivity                           |
| **Tailwind CSS** | UI styling and responsive layout                    |
| **Parcel**    | Fast development & build tool  |
| **Mocked Swiggy API**| Simulate real restaurant and menu data                        |

---

## 📁 Folder Structure

```
src/
│
├── components/         # Reusable UI components (e.g., Header, RestaurantCard)
├── pages/              # Different pages (Home, RestaurantMenu, Cart, etc.)
├── utils/              # Helper functions and constants
├── assets/             # Images and icons
├── App.js              # App root and route config
├── index.js            # Entry point
```

---

## 🛠️ Key Concepts Demonstrated

| Concept                   | Description                                                                 |
|---------------------------|-----------------------------------------------------------------------------|
| **Routing**               | Navigate across pages without reloads using React Router                    |
| **Dynamic Rendering**     | Render restaurant-specific menus using route params                         |
| **State Management**      | Cart items and shared state handled via Context or Redux                    |
| **Code Splitting**        | Load components only when needed (lazy loading)                             |
| **Conditional Rendering** | Show loader UI (shimmer) until data is ready                                |
| **Reusable Components**   | Modular design with DRY principles                                          |

---

## 📋 Summary

**Bite-Buddy** is a fully functional frontend for a food delivery web app, built with modern web development best practices. It's clean, component-driven web applications.

---

## 🚀 Deployment
- [Live Demo](https://bite-buddy-git-main-ramit-roshans-projects.vercel.app/)

---

💡 **Made by ❤️ Ramit Roshan

