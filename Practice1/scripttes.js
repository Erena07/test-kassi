// Select the burger menu and nav links
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Toggle navbar on burger click (for mobile view)
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Reset the navbar state when resizing the screen
window.addEventListener('resize', () => {
  document.querySelectorAll('.dropdown-content.open').forEach((openDropdown) => {
        openDropdown.classList.remove('open'); // Close opened dropdowns
    });
  if (window.innerWidth >= 768 && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active'); // Close the navbar if open
  }
});

// Select all dropdown elements
const dropdowns = document.querySelectorAll('.dropdown');

// Add click event listeners to each dropdown (for mobile view)
dropdowns.forEach(dropdown => {
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    dropdown.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click from bubbling up
        dropdownContent.classList.toggle('open'); // Toggle open class
    });
});

// Close all open dropdowns when clicking outside
document.addEventListener('click', () => {
    dropdowns.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        dropdownContent.classList.remove('open');
    });
});

// Optional: Prevent default behavior and handle hover only on desktop
if (window.innerWidth >= 768) {
    const dropdownBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Toggle dropdown on hover for desktop
    dropdownBtn.addEventListener('mouseenter', (event) => {
        event.preventDefault(); // Prevent default behavior
        dropdownContent.classList.toggle('open');
    });

    // Keep dropdown open while hovering inside
    dropdownContent.addEventListener('mouseenter', () => {
        dropdownContent.classList.add('open');
    });

    // Close dropdown when mouse leaves the content
    dropdownContent.addEventListener('mouseleave', () => {
        dropdownContent.classList.remove('open');
    });
}
