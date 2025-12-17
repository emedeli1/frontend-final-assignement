import { fetchTickets } from '../api/tickets.js';
import { renderTicketCard } from '../components/ticketCard.js';
import heroImage from '../../base-assets/image.png';

export async function renderPortal() {
  const app = document.getElementById('app');
  
  app.innerHTML = '<div class="flex h-screen items-center justify-center text-4xl font-medium italic uppercase">Loading...</div>';

  try {
    const { tickets } = await fetchTickets({ featured: true });

    app.innerHTML = `
      <section class="mb-32">
        <div class="h-[500px] w-full">
          <img src="${heroImage}" class="w-full h-full object-cover" alt="Ski Resort" />
        </div>
        <div class="-mt-32 text-center px-4">
          <h1 class="text-[196px] font-medium leading-none tracking-tighter mb-4">Ticketshop</h1>
          <p class="max-w-md mx-auto text-base font-regular text-gray-700">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </div>
      </section>

      <section class="flex flex-col mx-36 items-center justify-center gap-9 mb-28">
        <div class="text-4xl font-medium">Featured Products</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          ${tickets.map(ticket => renderTicketCard(ticket)).join('')}
        </div>
      </section>
    `;
  } catch (error) {
    app.innerHTML = `<div class="text-center py-20 text-red-500">Error: ${error.message}</div>`;
  }
}