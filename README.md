# SwiftCart

![SwiftCart E-commerce Application](/public/assets/readme.png)

A modern React-based e-commerce application for browsing and purchasing products online.

## Description

SwiftCart is a fully functional e-commerce web application built with React. It provides users with a seamless shopping experience including product browsing, search functionality, shopping cart management, and checkout process.

Key features include:

- Product catalog with search functionality
- Individual product detail pages with reviews and ratings
- Shopping cart with quantity management
- Checkout process with order confirmation
- Responsive design for all devices
- Contact form with validation

## Built With

This project is built using modern web technologies:

- [React.js](https://reactjs.org/) - Frontend framework
- [React Router](https://reactrouter.com/) - Client-side routing
- [Zustand](https://github.com/pmndrs/zustand) - State management
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Yup](https://github.com/jquense/yup) - Form validation
- [FontAwesome](https://fontawesome.com/) - Icons
- [Vite](https://vitejs.dev/) - Build tool and development server

## Getting Started

### Installing

1. Clone the repository:

```bash
git clone [your-repo-url]
```

2. Navigate to the project directory:

```bash
cd frameworks-ca-e-com
```

3. Install the dependencies:

```bash
npm install
```

### Running

To run the application in development mode:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

To build for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Carticon.jsx    # Shopping cart icon with counter
│   ├── Footer.jsx      # Site footer
│   ├── Header.jsx      # Site navigation header
│   ├── Home.jsx        # Homepage product listing
│   ├── Layout.jsx      # Main layout wrapper
│   ├── NotFound.jsx    # 404 error page
│   └── StarRating.jsx  # Product rating display
├── pages/              # Page components
│   ├── CheckoutPage.jsx        # Shopping cart and checkout
│   ├── CheckoutSuccessPage.jsx # Order confirmation
│   ├── ContactPage.jsx         # Contact form
│   └── ProductPage.jsx         # Individual product details
├── store/              # State management
│   └── cart.jsx        # Shopping cart store
├── api/                # API configuration
│   └── apiUrl.jsx      # API endpoint configuration
└── App.jsx             # Main application component
```

## Features

- **Product Browsing**: View all available products with images and pricing
- **Search Functionality**: Filter products by name
- **Product Details**: Detailed product information with customer reviews
- **Shopping Cart**: Add/remove items, adjust quantities
- **Checkout Process**: Complete purchase flow with order confirmation
- **Contact Form**: Get in touch with form validation
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## API Integration

The application integrates with the Noroff API for product data. The API endpoint is configured in `src/api/apiUrl.jsx`.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Noroff School of Technology for the API and project requirements
- React community for excellent documentation and resources
- FontAwesome for the icon library
