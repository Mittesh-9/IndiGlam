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
            `;
            <p>Price: ${dress.price}</p>
        dressesSection.appendChild(dressElement);
    });
}

function navigateToPage(pageUrl) {
    // set the current pages url to the clicked page URL
    window.location.href = pageUrl;
}

displayDresses();