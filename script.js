
// Function to show the popup and update the content dynamically
function showPopup(title, description) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-description').innerText = description;
    document.getElementById('popup').style.display = 'flex'; // Show the popup
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none'; // Hide the popup
}
// Close the popup when clicking outside the popup content
window.onclick = function (event) {
    var popup = document.getElementById("popup");
    if (event.target === popup) {
        closePopup();
    }
}
function closePopup() {
    document.getElementById('popup').style.display = 'none'; // Hides the popup
}
$(document).ready(function () {
    $(".menu-items li").click(function () {
        $(".menu-items li").removeClass("active"); // Remove 'active' class from all items
        $(this).addClass("active"); // Add 'active' class to clicked item
    });
});
