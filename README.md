# Scuderia Vision - Ferrari Luxury Showcase

A premium, high-end luxury dealership showcase for Ferrari featuring immersive animations, interactive 3D car galleries, and an AI-powered concierge experience powered by Google Gemini.

## Overview

Scuderia Vision is a sophisticated web application designed to showcase Ferrari vehicles with an emphasis on luxury, performance, and exclusivity. The platform combines cutting-edge web technologies with elegant UI/UX design to create an unforgettable digital experience.

### Features

- **Hero Section**: Immersive landing experience with luxury animations
- **3D Car Viewer**: Interactive 3D models of Ferrari vehicles with scroll-driven animations
- **AI Concierge**: Voice of Ferrari concierge powered by Google Gemini API, offering personalized assistance in French
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Animation**: Smooth, luxury-oriented animations using Framer Motion
- **Modern Stack**: Built with React, TypeScript, and Vite for optimal performance

## Tech Stack

- **React 19** - UI Framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **Google Generative AI** - AI-powered concierge
- **Lucide React** - Premium icon library

## Prerequisites

- Node.js 18.0+
- npm or yarn package manager
- Google Gemini API Key

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/scuderia-vision.git
   cd scuderia-vision
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env.local`
   - Add your Google Gemini API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

## Running Locally

**Development mode:**
```bash
npm run dev
```
The app will be available at `http://localhost:3000`

**Build for production:**
```bash
npm run build
```

**Preview production build:**
```bash
npm run preview
```

## Project Structure

```
scuderia-vision/
├── components/           # React components
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── CarCard.tsx      # Car display card
│   ├── Car3DViewer.tsx  # 3D model viewer
│   ├── ScrollScrub3D.tsx # Scroll-based 3D interaction
│   └── Concierge.tsx    # AI concierge chat
├── pages/               # Page components
│   ├── Home.tsx         # Home page
│   ├── About.tsx        # About Ferrari
│   └── Contact.tsx      # Contact information
├── services/            # API services
│   └── geminiService.ts # Google Gemini integration
├── types.ts             # TypeScript type definitions
├── constants.tsx        # App constants and car data
├── App.tsx              # Main application component
└── index.tsx            # React entry point
```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

⚠️ **Never commit `.env.local` to version control!**

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

## Customization

### Ferrari Models

Edit `constants.tsx` to modify the featured Ferrari models, specifications, and images.

### Colors & Styling

- Primary Ferrari Red: `scuderia-red` (Tailwind class)
- Modify colors in `index.html` Tailwind configuration
- Custom fonts: Cinzel (display), Outfit (body), Bebas Neue (accent)

### Concierge AI

Modify the system prompt in `services/geminiService.ts` to customize the concierge behavior and personality.

## Deployment

### Vercel (Recommended)

1. Push your repository to GitHub
2. Connect to [Vercel](https://vercel.com)
3. Add `GEMINI_API_KEY` to environment variables
4. Deploy

### Other Platforms

The app can be deployed to any static hosting platform (Netlify, AWS S3, GitHub Pages, etc.) as long as you set the `GEMINI_API_KEY` environment variable properly.

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Performance

- Optimized for Core Web Vitals
- Lazy loading for images
- Efficient animations with GPU acceleration
- Code splitting with Vite

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For issues and questions, please create an issue on the GitHub repository.

## Acknowledgments

- Ferrari for the iconic brand and heritage
- Google Generative AI for the Gemini API
- Framer Motion for powerful animations
- Tailwind CSS for rapid UI development
