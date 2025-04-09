// Select the toggle button
const themeToggleBtn = document.getElementById("theme-toggle");

// Check local storage for theme preference
const currentTheme = localStorage.getItem("theme") || "light-theme";
document.body.classList.add(currentTheme);

// Function to switch themes
function toggleTheme() {
  const newTheme = document.body.classList.contains("light-theme")
    ? "dark-theme"
    : "light-theme";

  // Remove the existing theme class and add the new one
  document.body.classList.remove("light-theme", "dark-theme");
  document.body.classList.add(newTheme);

  // Save the user's preference to local storage
  localStorage.setItem("theme", newTheme);
}

// Add event listener to the toggle button
themeToggleBtn.addEventListener("click", toggleTheme);
