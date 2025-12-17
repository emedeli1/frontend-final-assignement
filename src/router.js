import { renderPortal } from './views/portal.js';
import { renderOverview } from './views/overview.js';
import { renderDetail } from './views/detail.js';

// Routes mapping
const routes = {
  '/': renderPortal,
  '/products': renderOverview,
  '/product/:id': renderDetail // Dynamic
};

// Handle navigation and render views
export async function handleNavigation() {
  const path = window.location.pathname;
  const app = document.getElementById('app');
  
  // Loading state
  app.innerHTML = '<div class="p-20 text-center">Loading...</div>';

  let viewFunction = routes[path];
  let params = {};

  // Dynamic route handling
  if (!viewFunction) {
    const detailMatch = path.match(/^\/product\/(\d+)$/);
    if (detailMatch) {
      viewFunction = routes['/product/:id'];
      params.id = detailMatch[1];
    }
  }

  // Render the view
  if (viewFunction) {
    await viewFunction(params);
  } else {
    app.innerHTML = '<h1 class="text-2xl p-10">404 - Page Not Found</h1>';
  }
}

//SPA navigation function
export function navigateTo(url) {
  window.history.pushState(null, null, url);
  handleNavigation();
}

export function setupRouter() {
  // Manage clicks with data-link attribute
  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  // Manage back/forward navigation
  window.addEventListener('popstate', handleNavigation);
}