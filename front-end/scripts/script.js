document.addEventListener("DOMContentLoaded", () => {
    // Add interactivity to the menu
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "rgb(255, 0, 85)";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "#fff";
        });
    });

    // Fetch images from Unsplash API
    const gallerySection = document.querySelector("main");

    fetch("https://api.unsplash.com/photos/random?query=digital-art&count=5&client_id=FIKnXt2JglTMBwHwn4R-7Mw6z0N8RzRx0uh8hIY_Dg4")
        .then(response => response.json())
        .then(data => {
            console.log("Unsplash data:", data);
            const galleryDiv = document.createElement("div");
            galleryDiv.className = "gallery";

            data.forEach(image => {
                const img = document.createElement("img");
                img.src = image.urls.small;
                img.alt = image.alt_description || "Artwork";
                img.title = image.description || "Artwork";
                galleryDiv.appendChild(img);
            });

            gallerySection.appendChild(galleryDiv);
        })
        .catch(error => console.error("Error fetching Unsplash data:", error));
});


// Get modal elements
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');

// Add click event listeners to grid images
document.querySelectorAll('.grid img').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex'; // Show modal
        modalImage.src = img.src; // Set clicked image as modal content
    });
});

// Close modal
function closeModal() {
    modal.style.display = 'none';
}

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

