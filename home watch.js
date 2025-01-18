document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert("Thank you for contacting us! We will get back to you shortly.");
  // You can also integrate backend API to process the form data
});