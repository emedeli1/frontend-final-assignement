import { fetchTicketById, getImageUrl } from '../api/tickets.js';

export async function renderDetail() {
  const app = document.getElementById('app');

  const ticketId = window.location.pathname.split('/').pop();

  app.innerHTML = '<div class="flex h-screen items-center justify-center text-4xl font-medium italic uppercase">Loading...</div>';

  try {
    const ticket = await fetchTicketById(ticketId);

  app.innerHTML = `<section class="mb-32">
      <div class="h-[475px] w-full">
          <img src="${getImageUrl(ticket.img)}" alt="${ticket.title}" class="w-full h-full object-cover" alt="Ski Resort" />
      </div>
      <div class="-mt-76 text-center">
        <h1 class="text-[116px] font-medium leading-none tracking-tighter">${ticket.title}</h1>
      </div>
      <div class="h-50"></div>
    </section>
    <section class="flex flex-col justify-center items-center gap-7">
      <div class="flex flex-col gap-7 w-[424px] items-center justify-center">
        <h2 class="text-2xl text-center font-medium leading-none tracking-tighter">${ticket.shortDescription}</h2>
        <p class="text-base text-center font-medium leading-none tracking-tighter">${ticket.detailledDescription}</p>
      </div>
      <div class="flex gap-2.5 items-center justify-center">
        <h2 class="text-2xl font-medium leading-none tracking-tighter">from ${ticket.priceReduced || ticket.price}.00$</h2>
        ${!ticket.priceReduced ? `
        <h2 class="text-2xl font-medium leading-none tracking-tighter text-gray-400 line-through">59.00$</h2>
        ` : ''}
      </div>
    </section>
  `;
  } catch (error) {
    app.innerHTML = `<div class="text-center py-20 text-red-500">Error: ${error.message}</div>`;
  }
}