# Weather App Setup

This document provides a step-by-step guide to set up and run a React-based weather app using Vite.

## Prerequisites

Before starting, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

### 1. Clone the Repository

Clone the project repository to your local machine:

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Install Dependencies

Install the necessary dependencies for the project:

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project and add the required environment variables. Example:

```
VITE_API_KEY=<Your_API_Key>
```

Replace `<Your_API_Key>` with your API key from [Weather Api](https://www.weatherapi.com/my/).

### 4. Start the Development Server

Start the development server to preview your app:

Using npm:

```bash
npm run dev
```

Or using yarn:

```bash
yarn dev
```

## Project Features

- **Real-time Weather Data:** Fetches current weather details using the WeatherApi API.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Modern Build Tool:** Powered by Vite for fast development and production builds.

## Contributions

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.