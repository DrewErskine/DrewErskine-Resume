# Drew Erskine Resume - Spring Boot + React Application

This project is a personal portfolio website built with Next.js for the frontend and Spring Boot for the backend, using PostgreSQL for data storage.

## Technology Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios for API calls

### Backend
- Spring Boot 3
- Spring Data JPA
- PostgreSQL
- Maven

## Prerequisites

- JDK 17 or later
- Node.js 18 or later
- npm or yarn
- PostgreSQL 13 or later

## Setup Instructions

### Database Setup

1. Install PostgreSQL if you haven't already
2. Create a new PostgreSQL database:
   ```sql
   CREATE DATABASE drewerskine_resume;
   ```
3. The application will automatically create the necessary tables when it starts

### Backend Setup

1. Configure database connection in `src/main/resources/application.properties` (modify username and password as needed)
2. Build the project using Maven:
   ```bash
   mvn clean install
   ```
3. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```
   The backend will start on http://localhost:8080

### Frontend Setup

If you want to run the frontend separately during development:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
   The frontend will be available at http://localhost:3000

## Running the Full Application

To run both frontend and backend as a single application:

1. Build the entire application:
   ```bash
   mvn clean install
   ```
2. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```
3. The application will be available at http://localhost:8080

## Features

- Responsive portfolio website with light/dark mode
- Contact form with backend storage
- Admin dashboard for managing contact form submissions
- PostgreSQL database integration

## Admin Dashboard

The admin dashboard is available at `/admin/contacts` and allows you to:
- View all contact form submissions
- Mark submissions as read
- Delete submissions

## Project Structure

- `/src/main/java` - Java backend code
- `/src/main/resources` - Configuration and static resources
- `/src/` - Next.js frontend code
- `/src/components` - Reusable React components
- `/src/pages` - Next.js pages
- `/src/styles` - CSS styles
