# Ski Pass Ticketshop - Single Page Application

This is my frontend development final assignement project. By Raúl Delicado González

## 1. Project Setup
The development environment was initialized using **Vite**.
```bash
npm create vite@latest ski-spa
```
And intialized with
```bash
npm install
npm run dev
```
* **Linting & Formatting**: Installed and configured **ESLint** and **Prettier** (as shown in the lecture) to ensure code consistency and maintain a clean codebase.
* **Styling**: Integrated **Tailwind CSS v4** for rapid, utility-first styling.
* **Typography**: Configured **Helvetica Neue** as the default font family in the Tailwind theme to ensure a professional and modern look.

## 2. SPA Routing Logic
The application manages navigation entirely on the client side.
* **`routes.js`**: I established a central route map where each URL path is associated with a specific rendering function (e.g., `/` to `renderPortal`, `/products` to `renderOverview`).
* **History API**: In `routes.js`, I implemented a navigation system using `window.history.pushState`. This allows the URL to change while the router dynamically swaps the content within the `#app` container.
* **Link Interception**: A global event listener captures clicks on elements with the `data-link` attribute. It uses `e.preventDefault()` to stop standard navigation and triggers the internal router instead.

## 3. API Integration and Loading States
The app connects to a remote REST API to fetch real-time ticket data.
* **Data Layer (`api/tickets.js`)**: I developed asynchronous functions using the `fetch` API.
    * `fetchTickets`: Manages pagination via `_page` and `_limit` and handles filtering for featured items.
    * `fetchTicketById`: Retrieves complete data for specific product detail pages.
* **Metadata & Pagination**: The logic specifically extracts the `X-Total-Count` header from the API response to calculate the number of pages needed for the 12-item-per-page requirement.
* **Loading States**: To improve UX, a "Loading..." state is injected into the DOM before the data is received, preventing a blank screen during network requests.

## 4. View Architecture and Refactoring
The project follows a component-based approach to keep the UI consistent.
* **Portal View**: Displays a Hero section and a "Featured Products" grid by filtering tickets based on their `isFeatured` status.
* **Overview View**: Implements a full product listing with a pagination bar.
* **Detail View**: Designed to show one specific ticket given the id.
### Refactoring: 
* I  decided to extract the ticket card HTML into a reusable `ticketCard` component function. That way it is much easier to reuse or make changes in that component.
* I also created the webfont with the given icon assets.
## 5. Problems Encountered
* **ESLint and prettier Configuration**: I initially struggled with ESLint and prettier installation, but after a few tries and some Google research I finally solved it
* **Understangin TailwindCSS**: It was my first time using a CSS framework, so I was not sure about the installation or the usage. Luckily I found a great tutorial (in spanish) on youtube: https://www.youtube.com/watch?v=R5EXap3vNDA&t=10s.
I got to say that in the end I loved it, I will use it in my future projects for sure!


## Running the Project
```bash
# Install dependencies
npm install

# Start development server
npm run dev