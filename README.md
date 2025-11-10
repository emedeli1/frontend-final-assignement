# Final Assignment: Single Page Application (SPA) Ticketshop

Build a Single Page Application (SPA) that allows users to browse, search, and view details from a ticket API.

## Requirements

### 0. Fork gitlab repo

https://gitlab.mediacube.at/fhs47785/frontend-final-assignment

### 0.1 Design/Page Structure

todo: add link

### 1. Tooling & Project Setup

- Set up a fresh frontend environment using **Vite**.
- Configure development (`dev`) and build scripts.
- Add and configure at least:
  - **ESLint** and **Prettier** for linting and formatting.
  - **EditorConfig** for consistent editor settings.
  - (Optional) **TailwindCSS** or **PostCSS** for styling.
  - (Optional) you can use Typescript if you want to.

### 2. SPA Routing (Manual, no libraries)

- Implement **client-side routing** yourself using the History API (`pushState`, `popstate`).
- Implement **three routes/views**:
  - **Portal page** (featured content)
  - **Overview/List page** (with pagination)
  - **Detail page**

### 3. API Integration

- Use the **API provided here: https://github.com/j-handlechner/ticket-fake-api**.
- Implement **asynchronous API fetching** for list and detail data (using Promises/async/await).
- For the **portal page**, fetch **only items marked `isFeatured`**.
- Implement **pagination** for overview/list pages and **only fetch the items needed per page** (max 12 per page)
  - pagination should work by both clicking on the arrows and the numbers.
  - style the active number different than the not-active ones
  - use the meta field in the api for finding out how many ticket products there are in total and render the pagination based on that (one page should show 12 items)
- Show both **loading** and **error** states.

### 4. Loading Skeletons and Error Handling

- Display **loading skeletons or placeholders** during API requests.
- Implement **error states for failed API calls. Simulate ~10% failures even when the API is working.**
  - https://en.wikipedia.org/wiki/Fault_injection
- Handle these errors gracefully, show error states and a **“Try Again”** button in failed states.

### 5. Browser Data Persistence

- Use **localStorage** or **sessionStorage** to save data where appropriate.
  - For example for bookmarks/favourites/... in the dedicated sidebar.
- Allow users to revisit or delete this stored information.
  - Clear bookmarks/favourites/...

### 6. Features

- **Bookmark teasers**

  - Allow users to bookmark any teaser and view a list of their saved items.

- **Bookmark list**

  - Show references to all bookmarked items

- **Portal Page with Featured Teasers**

  - Display only the teasers marked as featured.
  - Fetch only the data needed for the current page.

- **Overview/List Pages with Pagination**

  - Show 10 teasers per page.
  - Fetch only the data needed for the current page.

- **Detail Pages**

  - Display full details when clicking on a teaser from the portal or overview pages. (should mirror the design)

- **Complete Data Display**

  - Show all available information for each teaser and on detail pages where provided (should mirror the design)
    - for example: if there is a reducedPrice available, show the reduced price and the original price striked through

- **Update the UI meaningfully**
  - for example, the button "add to bookmarks" (or the bookmark icon) need to change wether the product is already bookmarked or not. You can take a look into custom events for that, if you want to.
- **Make sure that all data from the design is displayed on your page - design doesn't have to match 1:1**
- **Make sure to add empty states and handle errors gracefully. Add try-again buttons to all error states.**

### 7. Code Structure

- Use JavaScript modules (`import`/`export`) and logical code organization (routing, API, UI).
- Demonstrate awareness of **scoping and module patterns**.

### 8. UI & UX

- Ensure functional navigation, loading feedback, and error handling.
- Use CSS/Tailwind for styling as desired, prioritizing **usability and feedback**.

### 9. Documentation / Validation

Include a `README.md` describing:

- Project setup (tools, running instructions)
- SPA routing logic
- API integration and error simulation
- Browser persistence (what, why, and how)
- Loading and error states (with screenshots)
- **Major problems encountered and learnings**

### 10. Deployment

- Deploy the application to a public hosting platform such as **Netlify**, **Vercel**, or similar.
- Include deployment link in the README.

## Hints & Tips

- Take a look at the template component for rendering

```html
<!-- Template with placeholders -->
<template id="code-block-template">
  <article class="code-wrapper">
    <h3 class="title">TITLE_PLACEHOLDER</h3>
    <pre><code class="language-js">CODE_PLACEHOLDER</code></pre>
    <p class="description">DESC_PLACEHOLDER</p>
  </article>
</template>

<script>
  const template = document.getElementById("code-block-template");
  const output = document.getElementById("output");

  function renderCodeBlock({ title, code, description }) {
    const clone = template.content.cloneNode(true);

    clone.querySelector(".title").textContent = title;
    clone.querySelector("code").textContent = code;
    clone.querySelector(".description").textContent = description;

    output.appendChild(clone);
  }

  renderCodeBlock({
    title: "Simple greeting function",
    code: `function greet(name) {
  return "Hello " + name;
}`,
    description: "This snippet shows a tiny reusable function.",
  });
</script>
```

This can help you to render things through JS more easily (instead of having to create everything with DOM Nodes in your JS)

- use the icons given to you in the base assets, transform them into an iconfont (as shown in the lecture) and use them in your code that way (grants bonuspoints)

- custom events could help you in some cases -> window.dispatchEvent(new CustomEvent(...))

## Submission Checklist

- Source code in a public or private repository with correct permissions set for me to view
- Documentation as described above
- Working demo (via Vite dev server or deployed)
- Clear run instructions
- <span style="background-color:#c1121f; color: white; padding: 2px;">**Link to Repo and Link to deployed page submitted in Moodle Assignment**</span>
