# StoreApp - Modern E-commerce Frontend

A modern e-commerce store frontend built with Next.js 14, Tailwind CSS, and TypeScript.

## Features

- 🛍️ Product browsing and details
- 🛒 Shopping cart functionality
- 🔐 Mock authentication
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast and optimized with Next.js

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **State Management**: Zustand
- **Icons**: Lucide React
- **Form Handling**: @tailwindcss/forms
- **Image Handling**: @tailwindcss/aspect-ratio

## Project Structure

```
apps/web/
├── app/                    # Next.js app directory
│   ├── auth/              # Authentication page
│   ├── cart/              # Shopping cart page
│   ├── products/          # Product detail pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Navbar.tsx        # Navigation bar
│   └── ProductCard.tsx   # Product card component
├── db/                    # Mock data
│   └── products.ts       # Product data
├── store/                # State management
│   ├── auth.ts          # Authentication store
│   └── cart.ts          # Shopping cart store
└── types/               # TypeScript types
    └── index.ts         # Type definitions
```

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run the development server:
   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features in Detail

### Product Browsing
- View all products on the home page
- Responsive grid layout
- Product cards with images and details

### Product Details
- Detailed product information
- Add to cart functionality
- Responsive image display

### Shopping Cart
- Add/remove items
- Update quantities
- Calculate total price
- Persistent cart state

### Authentication
- Mock sign-in functionality
- User state management
- Protected routes (to be implemented)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
