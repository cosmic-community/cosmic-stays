# StayScape - Property Rental Platform

![StayScape Preview](https://imgix.cosmicjs.com/da689130-006c-11f1-a746-2b7bd6c613da-photo-1613490493576-7fde63acd811-1770060294526.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, minimal Airbnb-style property rental platform built with Next.js 16 and Cosmic CMS. Browse beautiful vacation properties, meet your hosts, and read guest testimonials.

## Features

- 🏠 **Property Listings** - Browse stunning vacation properties with detailed information
- 🖼️ **Image Galleries** - Beautiful photo galleries for each property
- 👤 **Host Profiles** - Learn about property hosts with superhost badges
- ⭐ **Guest Reviews** - Read testimonials from previous guests
- 🔍 **Property Filtering** - Filter by property type (Villa, Loft, Cabin, etc.)
- 📱 **Fully Responsive** - Optimized for all devices
- ⚡ **Fast & Modern** - Built with Next.js 16 App Router and React 19

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=6980f9a35b3edb4a7d046f51&clone_repository=6980fb465b3edb4a7d046f71)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a complete content model for: An airbnb clone with properties, hosts, and testimonials
>
> Use the install_content_model action to create ALL object types AND demo content in one step. Include:
> 1. All necessary object types with appropriate metafields
> 2. 2-3 demo objects for each type with realistic content
> 3. Unsplash image URLs for thumbnails and file metafields (use real URLs like https://images.unsplash.com/photo-...)
>
> Remember to create types that are referenced by others FIRST (e.g., categories and authors before blog posts)."

### Code Generation Prompt

> "Next.js modern, minimal, inter font, responsive"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [Cosmic](https://www.cosmicjs.com/) - Headless CMS
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the Airbnb clone content model

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd stayscape
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Cosmic SDK Examples

### Fetching Properties with Host Data

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: properties } = await cosmic.objects
  .find({ type: 'properties' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Include related host data
```

### Fetching a Single Property

```typescript
const { object: property } = await cosmic.objects
  .findOne({
    type: 'properties',
    slug: 'oceanfront-villa-malibu'
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app uses three content types:

### Properties
- Name, description (markdown), location
- Price per night, bedrooms, bathrooms
- Property type (dropdown)
- Amenities (checkboxes)
- Gallery (multiple images)
- Host (relationship)

### Hosts
- Name, bio, profile photo
- Superhost status (toggle)
- Email

### Testimonials
- Guest name and photo
- Rating (1-5 stars)
- Review text
- Property (relationship)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project to [Vercel](https://vercel.com)
3. Add environment variables in the Vercel dashboard
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import the project to [Netlify](https://netlify.com)
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy!

## License

MIT

<!-- README_END -->