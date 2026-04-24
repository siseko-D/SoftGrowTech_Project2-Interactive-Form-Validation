// Simple animation for contact section elements when they come into view
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fadeIn");
            }
        });
    },
    { threshold: 0.1 }
);

// Observe contact section animations
document.querySelectorAll(".contact-info-animate, .contact-form-animate").forEach((element) => {
    observer.observe(element);
});

// Add CSS for fadeIn animation
const style = document.createElement("style");
style.textContent = `
    .animate-fadeIn {
        animation: fadeIn 1s ease-in-out;
    }
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);