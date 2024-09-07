document.querySelector('.review-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;
    const review = document.getElementById('review').value;

    // For now, just show an alert (In real application, you would send this data to a server)
    alert('Thank you for your review, ' + name + ' from ' + location + '!');

    // Clear the form
    document.getElementById('name').value = '';
    document.getElementById('location').value = '';
    document.getElementById('review').value = '';
});
