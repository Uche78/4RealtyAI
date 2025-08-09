# 4RealtyAI.com - AI Tools for Real Estate

A modern, responsive website built with Astro for 4RealtyAI, featuring AI-powered tools for real estate professionals.

## 🚀 Features

- **ShowSmart™**: AI chat assistant for realtor websites
- **Complete Product Suite**: Coming soon products (LeadBoost™, SocialSpark™, AdGenie™, etc.)
- **Beta Signup**: Lead capture for ShowSmart™ beta program
- **Modern Design**: Responsive, accessible, and optimized for performance
- **SEO Optimized**: Built with best practices for search engines

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) 4.x
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **TypeScript**: Full type safety
- **Performance**: Optimized for Core Web Vitals

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 4realtyai-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

## 🏗️ Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Products.astro
│   │   ├── BetaSignup.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## 🎨 Customization

### Colors
The site uses a custom color palette defined in `tailwind.config.mjs`:
- **Primary**: Realty green/teal theme
- **Secondary**: Blue accents
- **Neutral**: Grays for text and backgrounds

### Components
All components are modular and can be easily customized:
- `Header.astro`: Navigation and logo
- `Hero.astro`: Main landing section with CTA
- `Products.astro`: ShowSmart™ feature + coming soon products
- `BetaSignup.astro`: Lead capture form
- `Footer.astro`: Links and company info

## 🚀 Deployment

### Build for production:
```bash
npm run build
```

### Preview production build:
```bash
npm run preview
```

The site can be deployed to any static hosting service like:
- Vercel
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront

## 📱 Features Implemented

- ✅ Responsive design (mobile-first)
- ✅ Modern gradient backgrounds
- ✅ Interactive animations
- ✅ SEO meta tags
- ✅ Accessible markup
- ✅ Fast loading (Astro static generation)
- ✅ Beta signup form
- ✅ Product showcase
- ✅ Brand consistency

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

### Adding New Pages

Create new `.astro` files in the `src/pages/` directory. Astro uses file-based routing.

### Styling

The project uses Tailwind CSS. Custom styles can be added in component files or by extending the Tailwind config.

## 📈 Performance

Built with Astro for optimal performance:
- Static site generation
- Minimal JavaScript
- Optimized CSS
- Fast loading times
- SEO friendly

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

© 2025 4RealtyAI.com. All rights reserved.
