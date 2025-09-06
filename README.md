# Simple App

An Ionic React application with TypeScript support and tabbed navigation.

## Features

- ✨ Ionic React framework
- 📱 Cross-platform (Web, iOS, Android)
- 🔧 TypeScript support
- 🧪 Testing with Jest
- 📋 Tabbed navigation interface
- ⚡ Capacitor for native functionality

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/HarishGangula/Simple-App.git
cd Simple-App
```

2. Install dependencies
```bash
npm install
```

### Development

Start the development server:
```bash
npm start
```

The app will be available at `http://localhost:3000`

### Building

Build the app for production:
```bash
npm run build
```

### Testing

Run the test suite:
```bash
npm test
```

### Mobile Development

This project is configured with Capacitor for mobile development.

To add iOS platform:
```bash
npx cap add ios
npx cap sync
npx cap open ios
```

To add Android platform:
```bash
npx cap add android
npx cap sync
npx cap open android
```

## Project Structure

```
src/
├── pages/          # Page components
│   ├── Tab1.tsx    # Home page
│   ├── Tab2.tsx    # Features page
│   └── Tab3.tsx    # Settings page
├── App.tsx         # Main app component
├── App.test.tsx    # App tests
└── index.tsx       # Entry point
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (⚠️ one-way operation)

## Learn More

- [Ionic React Documentation](https://ionicframework.com/docs/react)
- [Capacitor Documentation](https://capacitorjs.com/docs)
- [React Documentation](https://reactjs.org/)