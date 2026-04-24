# Siyamthanda Dlakavu - Contact Form Module

A standalone, fully functional contact form with Three.js particle background, form validation, and Formspree integration.

## Files Included

- `index.html` - Main HTML structure (contact section only)
- `index.css` - Styling for contact form and animations
- `contact-particles.js` - Three.js particle background animation
- `formspree.js` - Form submission handling with Formspree API
- `smooth-scroll.js` - Intersection Observer for fade-in animations

## Features

- Responsive two-column layout (contact info + form)
- Three.js animated particle background
- Email copy-to-clipboard functionality
- Real-time form validation
- Formspree AJAX form submission
- Success/error message feedback
- Smooth fade-in animations on scroll

## Setup

1. Place all files in the same directory
2. Replace `action="https://formspree.io/f/mandgzqy"` with your own Formspree endpoint if needed
3. Update the `_next` hidden input with your desired redirect URL
4. Serve via a local server or deploy to any static host

## Dependencies

- Tailwind CSS (CDN)
- Three.js (CDN)
- Google Fonts (Open Sans, Playfair Display)
- Font Awesome (CDN)

## License

MIT
