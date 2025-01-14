let events = [];
document.addEventListener('DOMContentLoaded', function () {
  // Fetch user data from localStorage
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");

  // If user is logged in, display their name; otherwise, show a default message
  if (userName && userEmail) {
      document.getElementById("user-name").textContent = userName;
  } else {
      // Optionally, redirect to the login page if no user is found in localStorage
      window.location.href = "login.html"; // Replace with your actual login page URL
  }
});

// Function to add an event
function addEvent() {
  const eventName = document.getElementById('event-name').value;
  const eventDate = document.getElementById('event-date').value;
  const eventReminder = document.getElementById('event-reminder').value;

  if (eventName && eventDate && eventReminder) {
    const newEvent = {
      name: eventName,
      date: eventDate,
      reminder: eventReminder
    };
    events.push(newEvent);

    // Clear input fields
    document.getElementById('event-name').value = '';
    document.getElementById('event-date').value = '';
    document.getElementById('event-reminder').value = '';

    renderEvents();
    setReminder(newEvent);
  } else {
    alert('Please enter all fields: event name, date, and reminder.');
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
      <span>Reminder: ${event.reminder}</span>
      <button onclick="deleteEvent(${index})">Delete</button>
    `;
    eventList.appendChild(li);
  });
}

// Function to set a reminder alarm
function setReminder(event) {
  const reminderTime = new Date(event.reminder).getTime();
  const currentTime = new Date().getTime();

  // If reminder time is in the future
  if (reminderTime > currentTime) {
    const timeUntilReminder = reminderTime - currentTime;

    // Display the time remaining before the reminder
    console.log(`Time until reminder for '${event.name}': ${timeUntilReminder}ms`);

    // Set the alarm with a delay
    setTimeout(() => {
      alert(`Reminder: ${event.name} is coming up!`);
    }, timeUntilReminder);
  } else {
    alert('The reminder time must be in the future!');
  }
}
