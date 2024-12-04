// Example: Toggle the side nav on small screens

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active"); // Toggle the active class
    });



// Toggle branches input based on selection
function toggleBranchesInput() {
    const branches = document.getElementById('branches').value;
    const branchCountDiv = document.getElementById('branch-count');
    
    if (branches === 'multiple') {
        branchCountDiv.style.display = 'block';
    } else {
        branchCountDiv.style.display = 'none';
    }
};

// Password verification
document.getElementById('business-registration').addEventListener('submit', function (e) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        e.preventDefault();
    }
});

// Quote Generator
function generateQuote() {
    const branches = document.getElementById('branches').value;
    let quote = branches === 'multiple' ? 1500 : 2500;
    alert('Your registration fee is: R' + quote);
};




