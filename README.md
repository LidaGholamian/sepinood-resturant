# Sepinood 🍽️

A modern restaurant ordering web application built with **Next.js, TypeScript, and feature-based architecture**.

Sepinood is a portfolio project focused on building a realistic food ordering experience with authentication, cart management, checkout, and order management.

## ✨ Features

* 🔐 User authentication with **NextAuth**
* 🍽️ Restaurant menu and category browsing
* 🛒 Shopping cart with **Zustand**
* 💾 Persistent cart state with Zustand Persist
* 💳 Checkout flow with payment method selection
* 📝 Form handling with **React Hook Form**
* ✅ Form validation with **Zod**
* 📦 User orders with:

  * Orders list
  * Pagination
  * Order details
  * Order status
* 📱 Responsive design
* 🎨 UI built with **Tailwind CSS** and **shadcn/ui**
* ⚡ Performance optimization with image compression and WebP
* 🌐 REST API using **JSON Server**

## 🛠️ Tech Stack

* **Next.js**
* **TypeScript**
* **Tailwind CSS**
* **shadcn/ui**
* **Zustand**
* **NextAuth**
* **React Hook Form**
* **Zod**
* **Axios**
* **JSON Server**
* **Lucide React**

## 🏗️ Architecture

The project follows a **feature-based architecture**, keeping components, API logic, types, and related functionality organized by feature.

```text
features/
├── auth/
├── cart/
├── checkout/
├── orders/
└── ...
```

This structure helps keep the project maintainable and makes it easier to scale individual features independently.

## 📦 Main Features

### Cart

The cart is managed with Zustand and uses persistence to keep cart items available across page refreshes.

### Checkout

The checkout form uses React Hook Form together with Zod for type-safe form validation.

### Orders

Users can view their orders, navigate through paginated results, and open an individual order to see its details and current status.

## ⚡ Performance

The project also includes basic performance optimization.

The main hero image was converted from PNG to WebP, significantly reducing its file size and improving loading performance.

### Lighthouse

Latest local Lighthouse results measured in Chrome Incognito:

| Metric         | Mobile | Desktop |
| -------------- | -----: | ------: |
| Performance    |     72 |      68 |
| Accessibility  |      — |      92 |
| Best Practices |      — |     100 |
| SEO            |      — |     100 |
| FCP            |   1.2s |    0.6s |
| LCP            |   1.8s |    1.2s |
| TBT            |  1.95s |   0.45s |
| CLS            |  0.003 |       0 |

The results are based on a production build running locally.

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

### 3. Run the JSON Server API

In a separate terminal:

```bash
npm run api
```

The API runs on:

```text
http://localhost:3001
```

The Next.js application runs on:

```text
http://localhost:3000
```

### 4. Production build

To create and test a production build:

```bash
npm run build
npm run start
```

## 📌 Project Status

**Completed — Portfolio Project**

## 📄 License

This project was created as a personal portfolio project.
