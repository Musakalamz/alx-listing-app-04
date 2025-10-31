# 🏡 ALX Listing App 00

**Milestone 2: Responsive Property Listing Page**  
_Project: ProDev Frontend – Week 4_

---

## 📖 Project Overview

This project involves building a **responsive property listing page** using **Next.js, TypeScript, and Tailwind CSS**.  
The application displays a collection of luxury properties with filtering capabilities, a hero section, and proper layout organization.  
The design follows **responsive web principles** and maintains a clean, user-friendly interface across all devices.

---

## 🎯 Learning Objectives

By completing this project, you will:

- Implement **responsive web design** with Tailwind CSS.
- Build **reusable React/Next.js components** (Header, Footer, Layout).
- Use **TypeScript interfaces** for type safety.
- Structure a Next.js application with **logical folder hierarchy**.
- Render **dynamic property data** from arrays.
- Implement **filter functionality** for listings.
- Apply **component composition best practices**.
- Break down UI mockups into **scalable, maintainable code**.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (React-based)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Data Management:** Typed arrays & interfaces
- **Version Control:** Git & GitHub

---

## 📂 Project Structure

```bash
alx-listing-app-00/
├── components/
│   └── layout/
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── Layout.tsx
├── constants/
│   └── index.ts          # Sample property listing data
├── interfaces/
│   └── index.ts          # PropertyProps interface
├── pages/
│   ├── _app.tsx          # Root wrapper with Layout
│   └── index.tsx         # Homepage with Hero, Filters, Listings
├── public/
├── styles/
│   └── globals.css
└── README.md


```

---

## 🚀 Features

- **Hero Section**  
  Eye-catching banner with tagline:  
  _“Find your favorite place here! The best prices for over 2 million properties worldwide.”_

- **Filter Section**  
  Interactive filter pills for quick property searches.

- **Property Listings**  
  Grid-based responsive cards with:

  - Property name
  - Location
  - Rating
  - Price
  - Amenities/Offers
  - Image & discount info

- **Reusable Components**
  - `Header`: Navigation, logo, search, sign-in/sign-up
  - `Footer`: Quick links, credits
  - `Layout`: Wrapper for consistent structure

---

## 📌 Requirements Met

- ✅ **Responsive Layouts** (mobile → tablet → desktop)
- ✅ **Functional Filters & Listings**
- ✅ **Typed Property Data Interface**
- ✅ **Reusable Layout Components**
- ✅ **Semantic HTML & Accessibility Standards**

---

## ⚙️ Getting Started

### 1. Clone Repo

```bash
git clone https://github.com/<your-username>/alx-listing-app-00.git
cd alx-listing-app-00
```
