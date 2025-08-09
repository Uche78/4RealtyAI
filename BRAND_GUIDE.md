# 4RealtyAI Typography Hierarchy & Brand Usage Guide

## 🎨 **Brand Color Palette**

### Primary Colors
```css
#E6DED9  /* brand-primary - Warm cream background */
#5C6173  /* brand-accent - Sophisticated blue-gray for CTAs */
#2C2926  /* brand-text - Rich dark brown for text */
#AEA7A2  /* brand-secondary - Warm gray for subtle elements */
```

### Extended Color Scales
- **Cream Scale**: `cream-50` to `cream-900` (based on #E6DED9)
- **Slate Scale**: `slate-50` to `slate-900` (based on #5C6173)
- **Charcoal Scale**: `charcoal-50` to `charcoal-900` (based on #2C2926)
- **Warm Scale**: `warm-50` to `warm-900` (based on #AEA7A2)

## 🔤 **Typography Hierarchy**

### Font Families
```css
font-display: 'Playfair Display'  /* Luxury headlines, product names */
font-serif: 'Source Serif Pro'    /* Body text, interface */
font-sans: 'Inter'                /* Buttons, labels, fine print */
font-alt: 'Montserrat'           /* Alternative sans-serif */
```

### Typography Usage

#### 1. **Headlines & Hero Text**
- **Font**: `font-display` (Playfair Display)
- **Weight**: `font-bold` (700-800)
- **Color**: `text-charcoal-800`
- **Size**: `text-4xl lg:text-5xl` or `text-5xl lg:text-6xl`
- **Usage**: Main headlines, hero sections, major product names

```html
<h1 class="text-5xl lg:text-6xl font-display font-bold text-charcoal-800">
  AI Tools for Real Estate — 4Real
</h1>
```

#### 2. **Product Names & Section Headers**
- **Font**: `font-display` (Playfair Display)
- **Weight**: `font-semibold` (600) or `font-bold` (700)
- **Color**: `text-charcoal-800`
- **Size**: `text-2xl` to `text-3xl`
- **Usage**: ShowSmart™, LeadBoost™, section titles

```html
<h3 class="text-3xl font-display font-bold text-charcoal-800">
  ShowSmart™
</h3>
```

#### 3. **Body Text & Descriptions**
- **Font**: `font-serif` (Source Serif Pro)
- **Weight**: `font-normal` (400)
- **Color**: `text-charcoal-800`
- **Size**: `text-base` to `text-lg`
- **Usage**: Paragraphs, descriptions, feature lists

```html
<p class="text-lg font-serif text-charcoal-800">
  Your always-on showing assistant that never misses a lead.
</p>
```

#### 4. **Buttons & Call-to-Actions**
- **Font**: `font-sans` (Inter)
- **Weight**: `font-semibold` (600)
- **Color**: Depends on button style
- **Size**: `text-base`
- **Usage**: Primary/secondary buttons, CTAs

```html
<a class="bg-slate-700 text-brand-primary px-6 py-3 rounded-lg font-sans font-semibold">
  Join Beta (Free)
</a>
```

#### 5. **Labels & Fine Print**
- **Font**: `font-sans` (Inter)
- **Weight**: `font-medium` (500)
- **Color**: `text-warm-600` or `text-slate-700`
- **Size**: `text-sm` or `text-xs`
- **Usage**: Form labels, disclaimers, badges

```html
<span class="text-sm font-sans font-medium text-slate-700">
  Now in Beta
</span>
```

#### 6. **Navigation & Interface**
- **Font**: `font-serif` (Source Serif Pro) for links, `font-sans` for buttons
- **Weight**: `font-medium` (500)
- **Color**: `text-charcoal-800`
- **Size**: `text-base`
- **Usage**: Menu items, footer links

## 🎯 **Color Usage Guidelines**

### Backgrounds
- **Primary**: `bg-brand-primary` (#E6DED9) - Main backgrounds
- **Section Alt**: `bg-cream-50` or `bg-cream-100` - Alternating sections
## 🎯 **Color Usage Guidelines**

### Backgrounds
- **Primary**: `bg-brand-primary` (#E6DED9) - Main backgrounds
- **Section Alt**: `bg-cream-50` or `bg-cream-100` - Alternating sections
- **Cards**: `bg-brand-primary` with `border-warm-300` - Product cards, forms
- **Dark Sections**: `bg-slate-700` to `bg-charcoal-800` - Footer, CTAs

### Text Colors
- **Primary Text**: `text-charcoal-800` (#2C2926) - Headlines, body text
- **Secondary Text**: `text-warm-600` - Supporting text, captions
- **Accent Text**: `text-slate-700` - Links, product taglines
- **Light Text**: `text-brand-primary` - Text on dark backgrounds

### Interactive Elements
- **Primary Buttons**: `bg-slate-700` with `text-brand-primary`
- **Secondary Buttons**: `border-slate-700` with `text-slate-700`
- **Hover States**: `hover:bg-slate-800` or `hover:text-slate-400`
- **Focus States**: `focus:ring-slate-500`

### Status & Accent Colors
- **Success**: Green variants for "beta", "online", "captured"
- **Warning**: Yellow/orange for notifications
- **Info**: Purple/indigo for features
- **Error**: Red variants (sparingly)

## 📱 **Responsive Typography**

### Mobile-First Scaling
```html
<!-- Large Headlines -->
<h1 class="text-4xl lg:text-6xl font-display font-bold">

<!-- Section Headers -->
<h2 class="text-3xl lg:text-4xl font-display font-bold">

<!-- Subsections -->
<h3 class="text-xl lg:text-2xl font-display font-semibold">

<!-- Body Text -->
<p class="text-base lg:text-lg font-serif">

<!-- Small Text -->
<span class="text-sm lg:text-base font-sans">
```

## 🎨 **Component-Specific Guidelines**

### Header/Navigation
```html
<!-- Logo -->
<span class="text-xl font-display font-bold text-charcoal-800">
  4RealtyAI<span class="text-slate-700">.com</span>
</span>

<!-- Nav Links -->
<a class="text-charcoal-800 hover:text-slate-700 font-medium font-serif">
  Products
</a>

<!-- CTA Button -->
<a class="bg-slate-700 text-brand-primary px-4 py-2 rounded-lg font-sans font-medium">
  Get Started
</a>
```

### Hero Section
```html
<!-- Badge -->
<div class="bg-slate-100 text-slate-800 text-sm font-sans font-medium">
  Launching ShowSmart™ Beta
</div>

<!-- Main Headline -->
<h1 class="text-5xl lg:text-6xl font-display font-bold text-charcoal-800">
  AI Tools for <span class="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-600">Real Estate</span> — 4Real
</h1>

<!-- Subheadline -->
<p class="text-xl font-serif text-charcoal-800 leading-relaxed">
  Stop losing leads to delayed responses...
</p>
```

### Product Cards
```html
<!-- Product Name -->
<h4 class="text-xl font-display font-semibold text-charcoal-800">
  ShowSmart™
</h4>

<!-- Description -->
<p class="text-charcoal-800 font-serif">
  AI Property Listing Generator...
</p>

<!-- Tagline -->
<p class="text-sm text-slate-700 font-sans font-medium">
  From photos to polished listings — instantly.
</p>
```

### Forms
```html
<!-- Form Labels -->
<label class="text-sm font-sans font-medium text-charcoal-800">
  Email Address
</label>

<!-- Input Fields -->
<input class="font-serif text-charcoal-800 border-warm-400 focus:ring-slate-500">

<!-- Submit Button -->
<button class="bg-slate-700 text-brand-primary font-sans font-semibold">
  Join Beta Program
</button>
```

### Footer
```html
<!-- Section Headers -->
<h4 class="text-lg font-display font-semibold text-brand-primary">
  Products
</h4>

<!-- Links -->
<a class="text-warm-400 font-serif hover:text-slate-400">
  ShowSmart™
</a>

<!-- Copyright -->
<p class="text-warm-400 font-serif text-sm">
  © 2025 4RealtyAI.com. All rights reserved.
</p>
```

## ⚡ **Quick Reference Classes**

### Typography Combinations
```css
/* Luxury Headlines */
.luxury-heading {
  @apply font-display font-bold text-charcoal-800;
}

/* Body Text */
.body-text {
  @apply font-serif text-charcoal-800;
}

/* Button Text */
.button-text {
  @apply font-sans font-semibold;
}

/* Supporting Text */
.supporting-text {
  @apply font-serif text-warm-600;
}

/* Interface Text */
.interface-text {
  @apply font-sans font-medium text-charcoal-800;
}
```

### Color Combinations
```css
/* Primary Button */
.btn-primary {
  @apply bg-slate-700 text-brand-primary hover:bg-slate-800;
}

/* Secondary Button */
.btn-secondary {
  @apply border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-brand-primary;
}

/* Card Background */
.card-bg {
  @apply bg-brand-primary border-warm-300;
}

/* Dark Section */
.dark-section {
  @apply bg-charcoal-800 text-brand-primary;
}
```

## 🎯 **Brand Personality Through Typography**

### Luxury & Sophistication
- **Playfair Display** for headlines creates elegant, high-end feel
- **Serif fonts** maintain professional, established credibility
- **Generous spacing** and **proper hierarchy** show attention to detail

### Modern & Tech-Forward
- **Inter** for interface elements shows innovation
- **Clean layouts** with **contemporary spacing**
- **Subtle gradients** in text colors add modern touch

### Trustworthy & Professional
- **Consistent color usage** builds brand recognition
- **Readable font sizes** prioritize user experience
- **Accessible contrast ratios** show attention to all users

## 📏 **Implementation Tips**

1. **Always use the font stack**: Include fallbacks for each font family
2. **Test on devices**: Ensure readability across screen sizes
3. **Maintain hierarchy**: Don't skip heading levels or mix font purposes
4. **Use color meaningfully**: Each color should serve a purpose
5. **Stay consistent**: Use the same patterns across all components

## 🚀 **Next Steps**

1. **Update all components** with the new color and typography system
2. **Test responsiveness** across different devices
3. **Validate accessibility** with color contrast tools
4. **Create component library** with reusable classes
5. **Document any custom modifications** to maintain consistency
