# 📡 Milestone 5: API Integration for All Pages (Dynamic Data)

This repository holds the solution for **Milestone 5: API Integration for All Pages**. This critical milestone transforms the static prototype into a fully interactive application by integrating **REST API endpoints** to dynamically fetch and manage all core data (listings, details, bookings, and reviews).

The implementation leverages **Next.js** and **Axios** to handle asynchronous data fetching, loading states, error reporting, and form submission.

## ✨ Project Highlights & Key Concepts

This project demonstrates expertise in building data-driven applications by mastering:

* **Dynamic Data Fetching:** Utilizing the `useEffect` hook and **Axios** for performing `GET` requests to load live data when components mount or parameters change.
* **Loading & Error Handling:** Implementing state management (`useState`) to provide clear user feedback (e.g., "Loading...", error messages) during API calls.
* **Dynamic Routing & Fetching:** Fetching property-specific data (`GET /properties/:id`) based on Next.js `router.query` parameters.
* **Form Submission (POST):** Handling the booking process by securely submitting user data (`POST /bookings`) to a backend endpoint.
* **Component Modularity:** Re-architecting components (`PropertyCard`, `PropertyDetail`, `ReviewSection`) to accept and render dynamic data instead of relying on hardcoded constants.

## 🚀 Getting Started

Follow these instructions to set up and run the dynamic application locally.

### Prerequisites

* **Node.js** (LTS version recommended)
* **npm** or **yarn**
* **Git**

### Installation and Local Run

1.  **Clone the Repository**
    The project is a continuation of the previous milestone.
    ```bash
    git clone [https://github.com/Musakalamz/alx-listing-app-04.git](https://github.com/Musakalamz/alx-listing-app-04.git)
    cd alx-listing-app-04
    ```

2.  **Install Dependencies**
    The project requires the Axios library for API requests.
    ```bash
    npm install axios
    npm install
    ```

3.  **Run the Application**
    **Note:** This front-end assumes the existence of local API endpoints (`/api/properties`, `/api/bookings`, etc.) for demonstration purposes.
    ```bash
    npm run dev
    ```
    The application will run on `http://localhost:3000`.

## ⚙️ API Endpoints Integrated

The following API interaction points were implemented across the application:

| Page/Component | Request Type | Endpoint Used (Assumed) | Key Concept Demonstrated |
| :--- | :--- | :--- | :--- |
| **Listing Page** (`pages/index.tsx`) | `GET` | `/api/properties` | Initial data fetching for the main feed. |
| **Detail Page** (`pages/property/[id].tsx`) | `GET` | `/api/properties/${id}` | Dynamic fetching based on route parameters. |
| **Booking Form** (`pages/booking/index.tsx`) | `POST` | `/api/bookings` | Form submission and processing state management. |
| **Review Section** (`components/property/ReviewSection.tsx`) | `GET` | `/api/properties/${propertyId}/reviews` | Child component fetching its own necessary data. |

## 💻 Technical Implementation Details

The integration utilizes standard React Hooks and Axios:

* **Property Listing Page (`pages/index.tsx`):**
    ```typescript
    useEffect(() => { /* axios.get("/api/properties") */ }, []);
    ```
* **Property Detail Page (`pages/property/[id].tsx`):**
    ```typescript
    useEffect(() => { /* axios.get(`/api/properties/${id}`) */ }, [id]);
    ```
* **Booking Form (`pages/booking/index.tsx`):**
    ```typescript
    const handleSubmit = async (e) => { /* await axios.post("/api/bookings", formData) */ };
    ```

## 🛠️ Tools and Libraries

* **Next.js:** Framework for server-side rendering and routing.
* **React Hooks:** Essential for managing state (`useState`) and side effects (`useEffect`).
* **Axios:** Promise-based HTTP client used for all API communication.
* **TypeScript:** Used throughout the project for type-safe data handling.
* **Tailwind CSS:** Used for consistent styling.

## 👤 Author

* **Musa Ogunsolu** (GitHub: [Musakalamz](https://github.com/Musakalamz))
* **LinkedIn:** [Musa Ogunsolu](https://www.linkedin.com/in/musa-ogunsolu)

---

## ⚖️ License

* **ALX** - This project is for educational purposes as part of the ALX curriculum.
