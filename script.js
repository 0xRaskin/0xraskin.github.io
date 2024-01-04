document.addEventListener("DOMContentLoaded", function () {
    // Fetch JSON data
    fetch("index.json")
        .then(response => response.json())
        .then(data => {
            // Update dynamic content
            document.getElementById("dynamicContent").innerText = data.html.body.header.h1;
        })
        .catch(error => console.error("Error fetching JSON:", error));
});
