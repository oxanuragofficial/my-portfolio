# Portfolio Website

A modern, responsive portfolio website built with React.
## Link : https://aman-0402.github.io/My-Portfolio/

## Features

- **Responsive Design** - Works perfectly on all devices
- **3D Particle Animation** - Interactive antigravity background with mouse tracking
- **Smooth Animations** - Engaging user experience with CSS animations
- **Project Showcase** - Filter and display your projects
- **Contact Form** - Interactive contact section
- **Modern UI** - Beautiful gradient design with dark theme
- **Mobile Navigation** - Hamburger menu for mobile devices

## Installation

1. Make sure you have Node.js installed (version 14 or higher)

2. Navigate to the project directory:
```bash
cd portfolio
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## Customization

### Personal Information

**Hero Section** (`src/components/Hero.js`):
- Replace "Your Name" with your actual name
- Update the job title "Full Stack Developer"
- Customize the description text

**About Section** (`src/components/About.js`):
- Update the bio paragraphs
- Modify skills and their proficiency levels
- Update the statistics (projects, years, clients)

**Projects Section** (`src/components/Projects.js`):
- Add your own projects to the `projects` array
- Update project titles, descriptions, and technologies
- Replace placeholder images with your project screenshots
- Add your GitHub and live demo links

**Contact Section** (`src/components/Contact.js`):
- Update email address
- Add your phone number
- Update location
- Replace social media links with your profiles

**Footer** (`src/components/Footer.js`):
- Update "Your Name" in copyright text
- Replace social media links

### Colors and Styling

All colors are defined in `src/App.css` using CSS variables:

```css
:root {
  --primary-color: #6366f1;     /* Main purple/blue */
  --secondary-color: #8b5cf6;   /* Secondary purple */
  --dark-bg: #0f172a;           /* Dark background */
  --light-bg: #1e293b;          /* Lighter sections */
  --text-primary: #f1f5f9;      /* Main text color */
  --text-secondary: #cbd5e1;    /* Secondary text */
  --accent: #f59e0b;            /* Accent color */
}
```

Modify these values to change the entire color scheme.

### Customizing the 3D Background

The Antigravity animation can be customized in `src/components/Hero.js`:

```jsx
<Antigravity
  magnetRadius={14}        // Magnetic field radius
  ringRadius={12}          // Ring size around cursor
  waveAmplitude={1.6}      // Wave effect strength
  particleSize={1.3}       // Size of particles
  count={700}              // Number of particles
  particleShape="tetrahedron"  // Shape: tetrahedron, sphere, box, capsule
  color="#6366f1"          // Particle color
  autoAnimate={true}       // Auto-animate when idle
/>
```

You can adjust the opacity in `src/components/Hero.css`:
```css
.antigravity-background {
  opacity: 0.4;  /* Adjust between 0 and 1 */
}
```

### Adding Your Photo

Replace the SVG placeholder in `src/components/Hero.js` with an actual image:

```jsx
<div className="image-placeholder">
  <img src="/path/to/your/photo.jpg" alt="Your Name" />
</div>
```

### Project Images

Update the `image` property in each project object with your actual project screenshots. You can:
- Use local images: Place them in `public/images/` and reference as `/images/project1.png`
- Use external URLs: Direct links to hosted images

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The build folder will contain all the files ready for deployment.

## Deployment

You can deploy this portfolio to:

- **Vercel**: `npm install -g vercel` then `vercel`
- **Netlify**: Drag and drop the `build` folder
- **GitHub Pages**: Use `gh-pages` package
- **Firebase Hosting**: Use Firebase CLI

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Hero.js
│   │   ├── Hero.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Projects.js
│   │   ├── Projects.css
│   │   ├── Contact.js
│   │   ├── Contact.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Technologies Used

- React 18
- Three.js (3D Graphics)
- React Three Fiber (React renderer for Three.js)
- CSS3 (with animations and gradients)
- Responsive Design
- Modern JavaScript (ES6+)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.

## Contact

For questions or suggestions, feel free to reach out!
