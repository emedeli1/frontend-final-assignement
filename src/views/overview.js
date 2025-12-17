import { fetchTickets } from '../api/tickets.js'
import { renderTicketCard } from '../components/ticketCard.js'
import { navigateTo } from '../router.js'

export async function renderOverview() {
  const app = document.getElementById('app')

  const urlParams = new URLSearchParams(window.location.search)
  const currentPage = parseInt(urlParams.get('page')) || 1
  const limit = 12

  app.innerHTML =
    '<div class="flex h-screen items-center justify-center text-4xl font-medium italic uppercase">Loading...</div>'

  try {
    const { tickets, total } = await fetchTickets({ page: currentPage, limit })
    const totalPages = Math.ceil(total / limit)

    app.innerHTML = `
      <section class="mb-32">
        <div class="mt-56 text-center px-4">
          <h1 class="text-[116px] font-medium leading-none tracking-tighter mb-4">
            All Products
          </h1>
          <p class="max-w-md mx-auto text-base font-regular text-gray-700">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua.
          </p>
        </div>
      </section>

      <section class="flex flex-col mx-36 items-center justify-center gap-9 mb-28">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          ${tickets.map((ticket) => renderTicketCard(ticket)).join('')}
        </div>

        <div class="flex justify-center items-center gap-4 mt-16">
          ${renderPagination(currentPage, totalPages)}
        </div>
      </section>
    `
    setupPaginationEvents()
  } catch (error) {
    app.innerHTML = `<div class="text-center py-20 text-red-500">Error: ${error.message}</div>`
  }
}

function renderPagination(current, total) {
  let html = ''
  // Left arrow
  html += `
    <button data-page="${current - 1}" ${current === 1 ? 'disabled' : ''} class="p-2 cursor-pointer disabled:opacity-20 hover:scale-110 transition-transform">
      <i class="webfont webfont-arrow rotate-180" alt="Previous"></i>
    </button>`

  // Page numbers
  for (let i = 1; i <= total; i++) {
    const isActive = i === current
    html += `
      <button data-page="${i}"class="w-10 h-10 cursor-pointer rounded-full font-medium transition-colors ${isActive ? 'text-black' : 'text-gray-500 hover:text-black'}">
        ${i}
      </button>`
  }

  // Right arrow
  html += `
    <button data-page="${current + 1}" ${current === total ? 'disabled' : ''} class="p-2 cursor-pointer disabled:opacity-20 hover:scale-110 transition-transform">
      <i class="webfont webfont-arrow" alt="Next"></i>
    </button>`
  return html
}

function setupPaginationEvents() {
  document.querySelectorAll('[data-page]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const page = e.currentTarget.dataset.page
      if (page > 0) {
        navigateTo(`/products?page=${page}`)
      }
    })
  })
}
