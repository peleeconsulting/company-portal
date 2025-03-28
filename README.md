# 6ixStack Solutions Website

A modern, responsive website for 6ixStack Solutions, a software solutions company specializing in small business technology consulting.

The website will be available: 
🔗 [6ixStack Website](https://www.6ixstack.com)
🔗 [GitHub Pages](https://6ixstack.github.io/company-portal)
🔗 [Pre-Production Site](https://effervescent-licorice-a3c4ff.netlify.app)

## Features

- Fully responsive design that works on all devices
- Modern, sleek UI with animations and interactive elements
- 3D particle background using Three.js
- Animated sections using GSAP and AOS libraries
- Bootstrap 5 framework for layout and components
- Contact form with validation
- Multi-page structure with shared components

## Pages

1. **Home** - Overview of the company and services
2. **Solutions** - Detailed information about offered services
3. **Team** - Profiles of the company's founders
4. **Contact** - Contact form and company information

## Technologies Used

- HTML5, CSS3, JavaScript
- Bootstrap 5
- Three.js for 3D animations
- GSAP for animations
- AOS (Animate On Scroll) for scroll animations
- Webpack for bundling
- Font Awesome for icons

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm start
```

The site will be available at http://localhost:3000

### Building for Production

Build the production version:

```bash
npm run build
```

The production build will be in the `dist` directory.

## Deployment

You can deploy the contents of the `dist` directory to any static hosting service like GitHub Pages, Netlify, Vercel, etc.

To deploy to GitHub Pages:

```bash
npm run deploy
```

## Project Structure

```
/
├── dist/              # Production build
├── src/               # Source files
│   ├── css/           # CSS styles
│   ├── js/            # JavaScript files
│   ├── assets/        # Images and static assets
│   ├── index.html     # Home page
│   ├── team.html      # Team page
│   ├── solutions.html # Solutions page
│   ├── contact.html   # Contact page
│   └── index.js       # Main entry point
├── package.json       # Dependencies and scripts
└── webpack.config.js  # Webpack configuration
```

## Credits

- Created for 6ixStack Solutions
- Developed by 6ixStack Solutions technology team

## License

This project is licensed under the ISC License.
