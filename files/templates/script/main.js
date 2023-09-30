// sample dress data
const dressesData = [
    { name: "Dress 1", price: "Rs. 799" },
    { name: "Dress 2", price: "Rs. 899" },
    { name: "Dress 3", price: "Rs. 999" },
];

// displaying dress items
function displayDresses() {
    const dressesSection = document.getElementById("dresses");

    dressesData.forEach((dress) => {
        const dressElement = document.createElement("div");
        dressElement.classList.add("dress");
        dressElement.innerHTML = `
            <h3>${dress.name}</h3>
            <p>Price: ${dress.price}</p>
        `;
        dressesSection.appendChild(dressElement);
    });
}

// navigate through different pages like from home to dresses to contact, etc
function navigateToPage(pageUrl) {
    // set the current pages url to the clicked page URL
    window.location.href = pageUrl;
}

document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const imgWidth = document.querySelector(".img").offsetWidth;
    let currentIndex = 0;

    document.querySelector(".next").addEventListener("click", function() {
        currentIndex++;
        if (currentIndex >= slider.children.length) {
            currentIndex = 0;
        }
        updateSlider();
    });

    document.querySelector(".prev").addEventListener("click", function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slider.children.length - 1;
        }
        updateSlider();
    });

    function updateSlider() {
        const offset = -1 * currentIndex * imgWidth;
        slider.style.transform = `translateX(${offset}px)`;
    }
})

displayDresses();