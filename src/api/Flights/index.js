export const fetchItineraries = () =>
  fetch('http://localhost:3000/itineraries', {
    method: 'get',
  }).then(response => response.json());

export const fetchLegs = () =>
  fetch('http://localhost:3000/legs', {
    method: 'get',
  }).then(response => response.json());
