// Example of a simple JavaScript function
document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript is working!");
    
    // Example: Adding a click event to the Home link
    const homeLink = document.querySelector('a[href="#home"]');
    homeLink.addEventListener('click', function() {
        alert('You clicked on Home!');
    });
});
