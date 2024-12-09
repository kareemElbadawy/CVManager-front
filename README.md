
# CVManager Frontend (Angular)

CVManager Frontend is a modern Angular application designed for managing CVs, including creating, viewing, and updating CV details. This project is built with Angular, integrating with a RESTful API to interact with the backend data. 

## Technologies

- **Angular**: Frontend framework used for building the application
- **RxJS**: Reactive programming for handling asynchronous operations
- **Angular Material**: UI component library for modern, responsive interfaces
- **ngx-toastr**: Notification library for displaying alerts (success, error, etc.)
- **TypeScript**: Language used to build the application
- **HTML/CSS**: For structuring and styling the frontend

## Setup Instructions

To set up the frontend application, follow these steps:

### Prerequisites

- Install [Node.js](https://nodejs.org/) (version 14 or higher) and [npm](https://www.npmjs.com/).
- Angular CLI is required for building and running the project. Install it globally by running:
  
  ```bash
  npm install -g @angular/cli
  ```

### Steps to run the app

1. **Clone the repository**

   Clone the project repository to your local machine:

   ```bash
   git clone https://github.com/kareemElbadawy/CVManager-front.git
   ```

2. **Install dependencies**

   Navigate into the project directory and install the required dependencies:

   ```bash
   cd CVManager-front
   npm install
   ```

3. **Configure environment variables**

   Set up the environment variables for API connections. Open `src/environments/environment.ts` and update the API base URL:

   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:44355/api/'  // Update this to your API URL
   };
   ```

4. **Run the application**

   After setting up the environment, you can run the Angular application using:

   ```bash
   ng serve
   ```

   The application will be accessible at `http://localhost:4200`.

## Directory Structure

```
src/
├── app/
│   ├── components/
│   ├── services/
│   ├── models/
│   ├── pages/
│   └── app.module.ts
├── assets/
├── environments/
└── index.html
```

- **components/**: Contains reusable UI components such as form controls, buttons, etc.
- **services/**: Contains Angular services to interact with the API.
- **models/**: Contains TypeScript models representing the data structure.
- **pages/**: Contains components that represent specific views or pages.
- **app.module.ts**: The root module of the Angular application.

## API Endpoints

Here are the available API endpoints the frontend interacts with:

- **GET /cv** - Fetch all CVs
- **GET /cv/{id}** - Fetch a specific CV by ID
- **POST /cv** - Create a new CV
- **PUT /cv/{id}** - Update an existing CV
- **DELETE /cv/{id}** - Delete a CV

## Authentication

This frontend does not handle authentication directly. If needed, you can integrate JWT authentication by storing the token in `localStorage` or `sessionStorage` and adding an `Authorization` header for API requests.

## Error Handling

The application uses the following strategies for error handling:

- **HTTP errors**: If an API call fails, the error is displayed using `ngx-toastr` to notify the user.
- **Form validation errors**: Input fields in forms are validated, and any errors are shown near the respective fields.

## Testing

The frontend includes unit tests and end-to-end (e2e) tests:

- To run unit tests:
  
  ```bash
  ng test
  ```

- To run end-to-end tests:

  ```bash
  ng e2e
  ```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
