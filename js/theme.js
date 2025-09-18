// Get the small and large icons
const iconSmall = document.getElementById("icon-small");
const iconLarge = document.getElementById("icon-large");

// Retrieve the current theme from localStorage (if any)
let currentTheme;
try {
    currentTheme = localStorage.getItem("theme");
} catch (error) {
    console.error("Error accessing localStorage: ", error);
    currentTheme = "light"; // Default to light theme in case of error
}

// Check if a theme exists in localStorage
if (currentTheme) {
    document.body.classList.add(currentTheme);  // Add saved theme to body
} else {
    // Default theme is light, set it initially if not present
    try {
        localStorage.setItem("theme", "light");
    } catch (error) {
        console.error("Error setting localStorage: ", error);
    }
    document.body.classList.add("light");  // Apply light theme
}

// Function to toggle themes
function toggleTheme() {
    const isDarkTheme = document.body.classList.contains("dark-theme");
    const newTheme = isDarkTheme ? "light" : "dark";
    const newClass = isDarkTheme ? "light-theme" : "dark-theme";
    const iconType = isDarkTheme ? "moon" : "sun";

    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(newClass);

    try {
        localStorage.setItem("theme", newTheme); // Save new theme in localStorage
    } catch (error) {
        console.error("Error setting localStorage: ", error);
    }

    updateIcon(iconType); // Update icon based on theme
}

// Function to update icon based on theme
function updateIcon(theme) {
    switch (theme) {
        case "moon":
            iconSmall.src = "img/moon.png";  // Set moon icon for small screens
            iconLarge.src = "img/moon.png";  // Set moon icon for large screens
            iconSmall.style.filter = "invert(8%) sepia(1153%) saturate(470%) hue-rotate(572deg) brightness(78%)";  // Apply moon style
            iconLarge.style.filter = "invert(8%) sepia(1153%) saturate(470%) hue-rotate(572deg) brightness(78%)";  // Apply moon style
            break;
        case "sun":
            iconSmall.src = "img/sun.png";   // Set sun icon for small screens
            iconLarge.src = "img/sun.png";   // Set sun icon for large screens
            iconSmall.style.filter = "invert(18%) sepia(234%) saturate(253%) hue-rotate(814deg) brightness(67%)";  // Apply sun style
            iconLarge.style.filter = "invert(18%) sepia(234%) saturate(253%) hue-rotate(814deg) brightness(67%)";   // Apply sun style
            break;
        default:
            console.error("Unknown theme: ", theme);
            break;
    }
}

// Debounce function to limit event triggering
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Set the initial icon based on the current theme
if (currentTheme === "dark") {
    updateIcon("sun");  // If dark theme is active, show sun icon
} else {
    updateIcon("moon");  // If light theme is active, show moon icon
}

// Add event listeners to both small and large screen icons
const debouncedToggleTheme = debounce(toggleTheme, 300);
iconSmall.addEventListener("click", debouncedToggleTheme);
iconLarge.addEventListener("click", debouncedToggleTheme);
