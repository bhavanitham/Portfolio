import news1 from "../assets/news1.png";
import news2 from "../assets/news2.png";
import news3 from "../assets/news3.png";
import news4 from "../assets/news4.png";
import news5 from "../assets/news5.png";
import movie1 from "../assets/movie1.png";
import movie2 from "../assets/movie2.png";
import movie3 from "../assets/movie3.png";
import password1 from "../assets/password1.png";
import password2 from "../assets/password2.png";
import landing1 from "../assets/landing1.png";
import landing2 from "../assets/landing2.png";
import landing3 from "../assets/landing3.png";
import landing4 from "../assets/landing4.png";
import landing5 from "../assets/landing5.png";
import store1 from "../assets/store1.png"
export const projects = [
  {
    title: "Live News Application",
    frontEndCodeUrl: "https://github.com/bhavanitham/MehaNewsApplication-Frontend",
    backEndCodeUrl: "https://github.com/bhavanitham/MehaNewsApplication-Backend",
    demoUrl: "https://bhava-mehalivenewsapplicationfrontend.netlify.app/",
    desc: "A dynamic live news application delivering real-time updates across various categories including politics, sports, entertainment, and technology. It features a clean, responsive interface with live news feeds, article previews, and category-based filtering to enhance the user’s news browsing experience.",
    techStacks: [
      "React.js",
      "TailwindCSS",
      "Express.js",
      "MongoDB",
      "NewsAPI",
      "NodeMailer",
      "Axios",
    ],
    images: [news1, news2, news3, news4, news5],
    video: [],
    data: [
      {
        title: "Live News Feed",
        features: [
          "Fetch and display breaking news in real-time.",
          "Auto-refresh feature for continuous updates.",
        ],
      },
      {
        title: "Category-Based Browsing",
        features: [
          "Filter news by categories like politics, sports, and technology.",
          "Seamless navigation between topics.",
        ],
      },
      {
        title: "Article Preview",
        features: [
          "Show headlines with images and short descriptions.",
          "Clickable cards redirect to full articles.",
        ],
      },
      {
        title: "Responsive Design",
        features: [
          "Optimized layout for mobile, tablet, and desktop views.",
          "Smooth user experience across all devices.",
        ],
      },
      {
        title: "Search Functionality",
        features: [
          "Keyword-based search to find specific news quickly.",
          "Real-time result filtering while typing.",
        ]
      },
      {
        title: "User Roles",
        features: ["Define roles and permissions for users."],
      },
      {
        title: "Notifications",
        features: ["Send alerts for events and updates via email."],
      },
    ],
  },
  {
    title: "React Store Application",
    frontEndCodeUrl: "https://github.com/bhavanitham/REACT-STORE",
    backEndCodeUrl: "",
    demoUrl: "https://bhava-react-store.netlify.app/",
    desc: "A simple React-based online store application enabling users to browse products, view detailed descriptions, and add items to a shopping cart. Built with React for a dynamic UI and local state management for seamless cart functionality and smooth user experience.",
    techStacks: [
      "React.js",
      "Inline Styling CSS",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Material UI",
      "JWT",
      "Node.js",
      "Axios",
    ],
    images: [store1],
    video: [],
    data: [
      {
        title: "Product Showcase",
        features: [
          "Display a variety of products with images and prices.",
          "Responsive grid layout for all screen sizes.",
        ],
      },
      {
        title: "Shopping Cart",
        features: [
          "Add, remove, and update product quantities in cart.",
          "Cart state persists during session.",
        ],
      },
      {
        title: "Product Details",
        features: [
          "Detailed view of selected product with image and description.",
          "Includes price, availability, and ‘Add to Cart’ option.",
        ],
      },
      {
        title: "Category Filtering",
        features: [
          "Filter products based on categories or types.",
          "Instant updates without page reload.",
        ],
      },
      {
        title: "Mobile Responsive UI",
        features: [
          "Adaptive layout for desktop and mobile.",
          "Collapsible chat list for small screens.",
        ],
      },
      {
        title: "Search Functionality",
        features: [
          "Keyword-based product search bar.",
          "Real-time filtering of product list based on input.",
        ]
      },
    ],
  },

  {
    title: "Movie Searching App",
    frontEndCodeUrl: "https://github.com/bhavanitham/REACT-MOVIE-SEARCH-APP",
    backEndCodeUrl: "",
    demoUrl: "https://bhava-movie-search-app.netlify.app/",
    desc: "A sleek Movie Search App built with ReactJS, enabling users to search for movies by title and view key details like ratings, posters, and release dates. The app uses the OMDb API to fetch real-time movie data and offers a clean, responsive interface for smooth browsing on all devices.",
    techStacks: [
      "React.js",
      "Redux",
      "TailwindCSS",
      "OMDB API",
      "Axios",
    ],
    images: [movie1, movie2, movie3], // Add actual image variables or URLs
    video: [],
    data: [
      {
        title: "Movie Search App",
        features: [
          "Search  for movies by title and display matching results instantly.",
        ],
      },
      {
        title: "CineScope",
        features: [
          "Display movie posters, titles, and release years using OMDb API.",
        ],
      },
      {
        title: "Film Finder",
        features: [
          "View detailed movie information including genre and plot.",
        ],
      },
      {
        title: "Reel Explorer",
        features: [
          "Responsive layout for seamless experience on all devices.",
        ],
      },
      {
        title: "Movie Lookup",
        features: [
          "Show loading indicators and handle API errors gracefully.",
        ],
      },
      {
        title: "API Integration",
        features: ["Fetch recipe data dynamically using the Spoonacular API."],
      },
      {
        title: "State Management",
        features: ["Utilize ReactJS and Redux for efficient state management."],
      },
    ],
  },
  {
    title: "Password Reset Flow",
    frontEndCodeUrl: "https://github.com/bhavanitham/PASSWORDRESETFLOW-Frontend",
    backEndCodeUrl: "https://github.com/bhavanitham/PasswordResetFlowBackend",
    demoUrl: "https://bhava-password-reset-flow.netlify.app/",
    desc: "A secure and efficient password reset system using Nodemailer for email verification. This project ensures users can reset their passwords only after verifying their identity through a unique reset link sent via email.",
    techStacks: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Nodemailer",
      "jwt",
    ],
    images: [password1, password2], // Add actual image variables or URLs
    video: [],
    data: [
      {
        title: "Forgot Password Flow",
        features: [
          "Users enter their email to request a password reset.",
          "Checks if the user exists in the database.",
        ],
      },
      {
        title: "Email Verification",
        features: [
          "Generates a unique reset token and sends a secure reset link via email.",
          "Uses Nodemailer for email handling.",
        ],
      },
      {
        title: "Token Storage & Validation",
        features: [
          "Stores the token in the database for verification.",
          "Ensures tokens expire for security purposes.",
        ],
      },
      {
        title: "Secure Password Reset",
        features: [
          "Users reset their password after clicking the link.",
          "Validates the token before updating the password.",
        ],
      },
      {
        title: "Security Measures",
        features: [
          "Tokens have expiration times to prevent misuse.",
          "Prevents unauthorized password resets.",
        ],
      },
      {
        title: "Environment Configuration",
        features: [
          "Uses environment variables for email configurations.",
          "Keeps credentials secure.",
        ],
      },
      {
        title: "Project Setup & Deployment",
        features: ["Step-by-step instructions for setup and running locally."],
      },
    ],
  },
  {
    title: "Landing Page Trabook",
    frontEndCodeUrl: "https://github.com/bhavanitham/Landing-Page-Trabook",
    backEndCodeUrl: "",
    demoUrl: "https://landingpage-trabook.netlify.app/",
    desc: "A fully responsive landing page built using HTML and Tailwind CSS. The design is implemented as per the provided Figma file, ensuring pixel-perfect accuracy and adaptability across all devices.",
    techStacks: ["HTML", "TailwindCSS"],
    images: [landing1, landing2, landing3, landing4, landing5], // Replace with actual images
    video: [],
    data: [
      {
        title: "Pixel-Perfect Design",
        features: [
          "Follows the provided Figma design accurately.",
          "Maintains a clean and modern layout.",
        ],
      },
      {
        title: "Fully Responsive",
        features: [
          "Optimized for desktops, tablets, and mobile devices.",
          "Uses Tailwind's responsive utilities.",
        ],
      },
      {
        title: "Fast & Lightweight",
        features: [
          "Built with pure HTML and Tailwind CSS for performance.",
          "Ensures smooth and fast loading.",
        ],
      },
      {
        title: "Scalable & Maintainable",
        features: [
          "Uses Tailwind's utility-first approach.",
          "Easy to modify and extend.",
        ],
      },
      {
        title: "Figma Reference",
        features: [
          "The design is based on the given Figma file.",
          "Ensures consistency with modern UI trends.",
        ],
      },
    ],
  },
];
