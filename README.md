# Sonificafy Frontend

This is the frontend application for the Sonificafy project, built with React and Vite. It provides an interactive interface for data sonification.

## 🚀 Technologies

- **React**: UI library
- **Vite**: Build tool and development server
- **React Router**: For application routing
- **PostCSS**: For modern CSS processing

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Modern web browser

## 🔧 Installation

1. Clone the repository:

```bash
git clone https://github.com/alejandromur/sonificafy-frontend.git
cd sonificafy-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

- Copy `.env.local.example` to `.env.local`
- Adjust the variables according to your environment

## 🚀 Development

To start the development server:

```bash
npm run dev
```

The application will start at `http://localhost:5173` with hot module replacement (HMR) enabled.

Other available commands:

```bash
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📦 Project Structure

```
sonificafy-frontend/
├── src/              # Application source code
│   ├── components/   # React components
│   ├── pages/        # Page components
│   ├── styles/       # PostCSS styles
│   └── App.jsx      # Root component
├── public/           # Static assets
├── index.html        # HTML entry point
└── vite.config.js    # Vite configuration
```

## 📚 Main Dependencies

### Production

- react: ^19.0.0
- react-dom: ^19.0.0
- react-router-dom: ^7.4.1

### Development

- vite: ^6.2.0
- @vitejs/plugin-react: ^4.3.4
- postcss: ^8.5.3
- eslint: ^9.21.0

## 🔧 Configuration

The project includes several configuration files:

- `vite.config.js`: Vite bundler configuration
- `postcss.config.js`: PostCSS plugins and settings
- `eslint.config.js`: ESLint rules and settings

## 📄 License

This project is under the MIT License - see the [LICENSE](LICENSE) file for details.

## ✍️ Author

Alejandro - [alejandro@mamutlove.com](mailto:alejandro@mamutlove.com)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git switch -c feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

Please make sure to:

- Follow the existing code style
- Add comments to your code where necessary
- Update the documentation if needed
- Test your changes before submitting
