const BASE_URL = 'https://my-json-server.typicode.com/j-handlechner/ticket-fake-api/tickets';

// to generate URL
export function getImageUrl(imgId) {
  return `https://images.unsplash.com/photo-${imgId}`;
}

// Obtains the tickets
export async function fetchTickets({ page = 1, limit = 12, featured = false } = {}) {
  const url = new URL(BASE_URL);
  
  // Params
  url.searchParams.append('_page', page);
  url.searchParams.append('_limit', limit);
  if (featured) {
    url.searchParams.append('isFeatured', 'true');
  }

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    
    // IMPORTANTE: my-json-server devuelve el total en la cabecera 'X-Total-Count'
    const totalCount = response.headers.get('X-Total-Count');
    const data = await response.json();
    
    return {
      tickets: data,
      total: parseInt(totalCount || 0)
    };
  } catch (error) {
    console.error("Error fetching tickets:", error);
    throw error;
  }
}

export async function fetchTicketById(id) {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) throw new Error('Ticket not found');
    return await response.json();
}