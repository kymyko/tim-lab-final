document.addEventListener("DOMContentLoaded", () => {
    const artworks = [
        { category: "concept-art", src: "https://cdnb.artstation.com/p/assets/images/images/033/826/855/4k/sergey-samsonov-list-1-end.jpg", alt: "Concept Art 1" },
        { category: "concept-art", src: "https://cdnb.artstation.com/p/assets/images/images/038/269/835/4k/vinh-lam-fishmonger-step.jpg", alt: "Concept Art 2" },
        { category: "3d-modeling", src: "https://cdna.artstation.com/p/assets/images/images/083/514/012/4k/roman-goliaf-20250104214532-1.jpg", alt: "3D Modeling 1" },
        { category: "3d-modeling", src: "https://cdnb.artstation.com/p/assets/images/images/082/682/627/large/aleksandr-silantev-rostok-tower-13.jpg", alt: "3D Modeling 2" },
        { category: "illustration", src: "https://cdna.artstation.com/p/assets/images/images/083/882/722/large/xinran-li-3.jpg", alt: "Illustration 1" },
        { category: "illustration", src: "https://cdnb.artstation.com/p/assets/images/images/083/779/499/large/aerofsles-grs-a.jpg", alt: "Illustration 2" },
        { category: "concept-art", src: "https://cdnb.artstation.com/p/assets/images/images/083/645/671/4k/sara-hermellin-001-lineup-1-protected-intensity-low-v2.jpg", alt: "Concept Art 3" },
        { category: "3d-modeling", src: "https://cdna.artstation.com/p/assets/images/images/081/227/892/large/max-stromberg-siemens-munchen-station-02.jpg", alt: "3D Modeling 3" },
        { category: "illustration", src: "https://cdna.artstation.com/p/assets/images/images/083/835/704/large/kiuyan-ran-krusier-6.jpg", alt: "Illustration 3" },
        { category: "illustration", src: "https://cdna.artstation.com/p/assets/images/images/083/415/948/large/cycle-circle-carriage.jpg", alt: "Illustration 4" },
        { category: "illustration", src: "https://cdna.artstation.com/p/assets/images/images/083/827/260/4k/marie-magny-steris-web.jpg", alt: "Illustration 5" },
        { category: "concept-art", src: "https://cdna.artstation.com/p/assets/images/images/083/644/970/4k/sara-hermellin-003-fixer.jpg", alt: "Concept Art 4" },
        { category: "concept-art", src: "https://cdna.artstation.com/p/assets/images/images/083/645/452/4k/sara-hermellin-002-lineup-2-protected-intensity-low-v2.jpg", alt: "Concept Art 5" },
        { category: "3d-modeling", src: "https://cdnb.artstation.com/p/assets/images/images/083/562/789/large/monireh-kordasti-f12.jpg", alt: "3D Modeling 4" },
        { category: "3d-modeling", src: "https://cdnb.artstation.com/p/assets/images/images/083/369/679/large/terje-hannisdal-u4040-3.jpg", alt: "3D Modeling 5" }
    ];

    const gallery = document.querySelector(".gallery");
    const buttons = document.querySelectorAll(".filter-menu button");

    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-image");
    const closeBtn = document.querySelector(".close-btn");

    // Close the modal when the user clicks on the close button
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    function displayArtworks(category) {
        gallery.innerHTML = "";
        const filteredArtworks = category === "all" ? artworks : artworks.filter(art => art.category === category);

        filteredArtworks.forEach(art => {
            const img = document.createElement("img");
            img.src = art.src;
            img.alt = art.alt;
            img.classList.add("gallery-item");

            // Add a click event listener to each image
            img.addEventListener("click", () => {
                modal.style.display = "block";
                modalImg.src = art.src;
                modalImg.alt = art.alt;
            });

            gallery.appendChild(img);
        });
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");
            displayArtworks(category);
        });
    });

    // Display all artworks by default
    displayArtworks("all");
});
