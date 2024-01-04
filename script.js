document.addEventListener("DOMContentLoaded", function () {
    // Fetch JSON data
    fetch("index.json")
        .then(response => response.json())
        .then(data => {
            // Update dynamic content
            document.getElementById("dynamicContent").innerText = data.html.body.header.h1;

            // Reload the page and redirect after 1.5 seconds
            setTimeout(function () {
                // Redirect to another URL
                window.location.replace("https://x.com/0xRaskin");
            }, 1500); // Adjust the time as needed
        })
        .catch(error => console.error("Error fetching JSON:", error));
});
