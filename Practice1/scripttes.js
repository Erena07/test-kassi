const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

//Fitur dropdown button

//Dropdown mobile-----
// dropdowns.forEach(dropdown => {
//   dropdown.addEventListener('click', () => {
//     dropdown.classList.toggle('active');
//   });
// });
// -----------------------

// Select the dropdown button and content
const dropdownBtn = document.getElementsByTagName('.dropbtn')[0];
const dropdownContent = document.getElementsByTagName('.dropdown-content')[0];
// Function to open the dropdown
function openDropdown() {
  dropdownContent.classList.add('open');
}
// Function to close the dropdown
function closeDropdown() {
  dropdownContent.classList.remove('open');
}
// Toggle dropdown on button click
dropdownBtn.addEventListener('mouseenter', function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  dropdownContent.classList.toggle('open');
});
// Keep dropdown open while hovering inside the content
dropdownContent.addEventListener('mouseenter', function() {
  dropdownContent.classList.add('open');
});
// Close dropdown when mouse leaves the content area
dropdownContent.addEventListener('mouseleave', function() {
  closeDropdown();
});