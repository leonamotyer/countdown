# Countdown Timer

A simple, responsive countdown timer website with a big red countdown display centered on a white background. Built with React, TypeScript, and Vite.

## Features

- 🕐 Big red countdown timer in the center of the screen
- 📱 Fully responsive design for mobile and desktop
- ⚡ Real-time countdown updates
- 🎨 Clean, modern UI with white background
- 🔴 Prominent red countdown numbers
- 📱 Mobile-first responsive design

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm

### Installation

1. Clone or download this project
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

The application will open in your browser at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Changing the Target Date

To change the countdown target date, edit the `targetDate` variable in `src/components/CountdownTimer.tsx`:

```typescript
const targetDate = new Date('2024-12-31T23:59:59').getTime()
```

### Modifying Styles

All CSS styles are located in `src/global.css`. The main styling includes:

- White background (`background-color: white`)
- Big red countdown numbers (`color: #ff0000`)
- Responsive design with `clamp()` functions
- Mobile-first approach

## Project Structure

```
countdown/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   └── CountdownTimer.tsx
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── global.css        # All CSS styles
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md             # This file
```

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features like `clamp()`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design works on all screen sizes

## License

This project is open source and available under the MIT License.
# countdown
