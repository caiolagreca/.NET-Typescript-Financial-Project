# Financial Data Application

## Introduction

This project is a **Financial Data Application** that allows users to search for relevant financial data and company information without the noise of news or external opinions. The application offers features like creating and managing a portfolio, accessing company financial documents such as income statements and balance sheets, and tracking historical dividend data.

The app is built with a modern stack, featuring a **React** frontend and a **.NET Core** backend, following best practices for authentication, state management, and API consumption.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure login and registration using JWT authentication.
- **Portfolio Management**: Users can add, delete, and manage their portfolios with ease.
- **Company Search**: Search for companies by stock symbols to view financial data.
- **Financial Statements**: Access detailed company financial data such as income statements, balance sheets, and cash flow statements.
- **Historical Dividends**: Visualize historical dividend data using interactive charts.
- **Responsive Design**: The application is mobile-friendly and adapts to different screen sizes.
- **Modern UI**: Dark mode and rounded corners for a clean and professional user experience.

## Technologies Used

### Frontend

- **React**: For building interactive UIs.
- **React Router**: For handling navigation and dynamic routing.
- **React Hook Form**: For handling forms with validation.
- **TailwindCSS**: For styling and building responsive layouts.
- **Material-UI**: For additional modern UI components.
- **Recharts**: For interactive charts to display financial data.
- **Axios**: For making HTTP requests to the backend API.

### Backend

- **.NET Core**: For building the API and handling business logic.
- **Entity Framework Core**: For database management and queries.
- **SQL Server**: The relational database used for storing user and financial data.
- **JWT (JSON Web Tokens)**: For secure user authentication and authorization.

## Getting Started

### Prerequisites

To run this project locally, you will need the following tools installed:

- **Node.js** (>= 14.x)
- **npm** or **yarn**
- **.NET Core SDK** (>= 5.x)
- **SQL Server** or **Azure SQL**

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/financial-data-app.git
   cd financial-data-app
   ```

2. **Backend Setup: Navigate to the /backend folder, and restore the necessary packages:**

   ```bash
   cd backend
   dotnet restore
   ```

3. **Set up the SQL Server Database: Update the connection string in appsettings.json to point to your SQL Server instance.**

   ```bash
   dotnet ef database update
   ```

4. **Start the backend server:**

   ```bash
   dotnet run
   ```

5. **Frontend Setup: Navigate to the /frontend folder, and install the dependencies:**

   ```bash
   cd ../frontend
   npm install
   ```

6. **Start the frontend server:**

   ```bash
   npm start
   ```

7. **The application should now be running at http://localhost:3000 for the frontend and http://localhost:5200 for the backend API.**

## Project Structure

```bash
financial-data-app/
│
├── backend/                    # .NET Core backend API
│   ├── Controllers/            # API controllers
│   ├── Models/                 # Data models
│   ├── Services/               # Business logic services
│   ├── Data/                   # Database context and migrations
│   └── appsettings.json        # Configuration (database, JWT, etc.)
│
├── frontend/                   # React frontend
│   ├── src/
│   │   ├── Components/         # Reusable components
│   │   ├── Pages/              # Pages (HomePage, SearchPage, etc.)
│   │   ├── Services/           # API calls and services
│   │   ├── Context/            # Authentication and global state management
│   │   └── App.tsx             # Main App component
│   └── public/
│       └── index.html          # Main HTML file
│
├── README.md                   # Project documentation
└── .gitignore                  # Files to ignore in Git
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder. It bundles React in production mode and optimizes the build for the best performance.

### `dotnet run`

Starts the .NET Core backend server, serving API requests at `http://localhost:5000`.

## API Endpoints

The backend exposes the following API endpoints:

### Authentication

- `POST /api/account/register`: Register a new user.
- `POST /api/account/login`: Login and get a JWT.

### Portfolio

- `GET /api/portfolio`: Get the current user's portfolio.
- `POST /api/portfolio`: Add a stock to the portfolio.
- `DELETE /api/portfolio`: Remove a stock from the portfolio.

### Company Data

- `GET /api/company/{ticker}`: Get company profile by ticker.
- `GET /api/company/{ticker}/income-statement`: Get company income statement.
- `GET /api/company/{ticker}/balance-sheet`: Get company balance sheet.
- `GET /api/company/{ticker}/cash-flow`: Get company cash flow.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
