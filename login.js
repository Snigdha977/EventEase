document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from reloading the page
  
    // Get user input
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    // Save data to local storage (for the sake of simplicity, as no backend is involved)
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
  
    // Redirect to the main event management page (index.html)
    window.location.href = "index.html";
  });
  
