import { getImageUrl } from '../api/tickets.js';

export function renderTicketCard(ticket) {
  return `
    <article class="bg-white flex flex-col w-full pb-5 rounded-3xl shadow-2xl overflow-hidden gap-7 hover:-translate-y-1 transition-transform">
      <div class="relative w-full h-56">
        <img src="${getImageUrl(ticket.img)}" alt="${ticket.title}" class="w-full h-full object-cover" />
        ${ticket.isFeatured ? `
          <div class="absolute top-4 left-4 bg-white px-2.5 py-1 rounded-full">
            <p class="text-[10px] font-medium">Featured</p>
          </div>
        ` : ''}
      </div>

      <div class="flex flex-col px-5 gap-7">
        <div class="flex flex-col gap-1">
          <h3 class="text-xl font-medium">${ticket.title}</h3>
          <p class="text-xs font-medium text-gray-500">${ticket.shortDescription}</p>
        </div>

        <div class="flex justify-between items-center">
          <div class="text-base font-medium">from ${ticket.priceReduced || ticket.price}.00 €</div>
          <div class="flex items-center gap-1">
            <div class="bg-gray-200 flex items-center justify-center rounded-full w-7 h-7 hover:scale-105 transition-transform cursor-pointer">
                <i class="webfont webfont-bookmark" alt="Previous"></i>
            </div>
            <a href="/product/${ticket.id}" data-link class="bg-black rounded-full text-[10px] font-medium text-white py-1.5 px-2.5 hover:scale-105 transition-transform">
              See Details
            </a>

          </div>
        </div>
      </div>
    </article>
  `
}