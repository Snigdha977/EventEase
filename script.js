// Event array to store events
let events = [];

// Function to add an event
function addEvent() {
  const eventName = document.getElementById('event-name').value;
  const eventDate = document.getElementById('event-date').value;

  if (eventName && eventDate) {
    const newEvent = {
      name: eventName,
      date: eventDate
    };
    events.push(newEvent);

    // Clear input fields
    document.getElementById('event-name').value = '';
    document.getElementById('event-date').value = '';

    renderEvents();
  } else {
    alert('Please enter both event name and date.');
  }
}

// Function to delete an event
function deleteEvent(index) {
  events.splice(index, 1);
  renderEvents();
}

// Function to render events in the list
function renderEvents() {
  const eventList = document.getElementById('event-list');
  eventList.innerHTML = ''; // Clear current list

  events.forEach((event, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${event.name} - ${event.date}</span>
      <button onclick="deleteEvent(${index})">Delete</button>
    `;
    eventList.appendChild(li);
  });
}
