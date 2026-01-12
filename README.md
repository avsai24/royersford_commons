# Royersford Commons Website

A modern, responsive leasing website for **Royersford Commons**, a luxury apartment community in Royersford, PA. This project features a polished user interface, interactive unit availability, and seamless contact integration.

## 🚀 Features

### User Interface & Experience
-   **Modern Design**: Clean, luxurious aesthetic using a professional color palette and typography (Inter & Playfair Display).
-   **Responsive Layout**: Fully optimized for desktop, tablet, and mobile devices.
-   **Hero Slideshow**: Immersive auto-playing background slider showcasing property views.
-   **Scroll-Based Animations**: Elements fade, slide, and scale in as the user scrolls for a dynamic experience.

### Interactive Elements
-   **Unit Availability**: Interactive floor plan cards that open detailed views.
-   **Detailed Unit View**:
    -   **Split View Layout**: Independent scrolling for image gallery and unit details on desktop.
    -   **Vertical Gallery**: High-quality image stack for immersive viewing.
    -   **Pricing Breakdown**: "Estimate your total" calculator showing base rent, bundles, and pet fees.
-   **Chatbot Widget**: A simulated AI assistant that auto-opens on scroll to engage users.
-   **Smooth Modals**: elegant transitions for "Check Availability" and "Unit Details" modals.

### Integrations
-   **EmailJS**: Fully functional contact form.
    -   **Instant Notification**: Leasing team receives immediate alerts for new inquiries.
    -   **Auto-Reply**: Users receive an instant confirmation email upon submission.

## 📂 Project Structure

The project has been organized for scalability and maintainability:

```text
royersford_commons/
├── index.html            # Main entry point
├── README.md             # Project documentation
└── assets/               # Static resources
    ├── css/
    │   └── styles.css    # Global styles and variables
    ├── js/
    │   ├── script.js     # Main UI logic (scroll, nav, form handling)
    │   ├── availability.js # Unit data and modal logic
    │   └── chat.js       # Chatbot widget functionality
    └── images/           # Consolidated image assets
```

## 🛠️ Technologies Used

-   **HTML5**: Semantic structure.
-   **CSS3**: Modern layout using Flexbox, CSS Grid, and CSS Variables for easy theming.
-   **JavaScript (Vanilla)**: Lightweight and fast interaction without heavy frameworks.
-   **EmailJS SDK**: Serverless email sending direct from the client.

## 📦 How to Run

1.  Clone or download the repository.
2.  Open `index.html` in your web browser.
3.  No build step or server required!

## 📝 License

This project is for demonstration purposes. All images and content are placeholders or used with permission for this demo.
