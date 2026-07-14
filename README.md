# 📊 Responsive Portfolio Dashboard with Live API Integration

A dynamic and professional dashboard designed to manage and showcase software development projects. Built using clean code practices that separate structure, styling, and business logic, with full responsiveness, bilingual (English/Arabic) support, and a working demonstration of REST API integration.

## ✨ Key Features

- **Pre-loaded Projects**: Automatically displays 5 core projects (including the interactive Calculator App) for any first-time visitor.
- **Simulated Token-Based Authentication**: Admin login issues a JWT-style token with a 30-minute expiry, stored in `sessionStorage`, demonstrating an understanding of token-based auth flows (login, expiry, logout) ahead of integrating a real backend such as Laravel Sanctum.
- **Live REST API Integration Demo**: A dedicated section that performs real `GET`, `POST`, `PATCH`, and `DELETE` requests against a live REST API (JSONPlaceholder), complete with loading, success, and error states — separate from the static portfolio data above it.
- **Bilingual Interface with Full RTL Support**: A language toggle switches the entire interface between English and Arabic, flipping text direction, typography (Tajawal font), and layout for a proper right-to-left experience.
- **Local Storage Persistence**: Syncs all portfolio project modifications, additions, and deletions with the browser's Local Storage, ensuring data remains intact upon page refresh.
- **Fully Responsive UI**: Modern, sleek design that adapts flawlessly to all screen sizes (Desktop, Tablet, and Mobile) using advanced CSS Media Queries, including a card-based table layout on small screens.
- **Secure Coding Practices**: Implements proper DOM manipulation (via `textContent`) to safeguard the application against potential XSS (Cross-Site Scripting) vulnerabilities.

## 🛠️ Tech Stack

- **HTML5**: Built with semantic tags (`<aside>`, `<main>`, `<section>`) to ensure maximum SEO efficiency and accessibility.
- **CSS3**: Advanced styling using CSS Variables for consistent color branding, flexible layout management, and directional (LTR/RTL) rule overrides.
- **JavaScript (ES6+)**: Pure Vanilla JS handling application logic, state management, simulated authentication, `fetch`-based API integration, internationalization (i18n), and the Local Storage API.

## 🌍 Multilingual & RTL Support

The dashboard includes a language toggle (🌐) that switches the interface between English and Arabic in real time — flipping `dir` on the document, swapping in the Tajawal typeface, and translating all static UI text, table headers, status labels, and action buttons via a lightweight custom i18n layer.

## 🔗 Live API Integration Demo

A separate "API Integration Demo" panel fetches, creates, updates, and deletes records against a live public REST API to demonstrate real-world CRUD integration patterns — including handling loading states, success confirmations, and error messages gracefully in the UI. This is intentionally kept separate from the portfolio project data, which remains sourced from Local Storage.

## 🔐 Note on Authentication

The Admin login uses a **simulated** token-based authentication flow for demonstration purposes (no real backend is connected). A production version would issue the token from a real server (e.g., Laravel Sanctum) after verifying credentials there, rather than checking them client-side.

## 🌐 Live Demo

You can explore the live, interactive version of this dashboard here: 🔗 [Portfolio Dashboard](https://deemaa-hub.github.io/Portfolio-Dashboard/)
