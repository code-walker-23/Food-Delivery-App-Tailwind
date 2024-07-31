# Food Delivery App

This is a React-based food delivery application that displays restaurant information, menus, and allows users to search for restaurants. The app is deployed on Vercel and can be accessed [here](https://food-delivery-app-pi-sable.vercel.app/).

## Features

- Display restaurant information including name, city, area, rating, and delivery time.
- Display restaurant menu with categories, item descriptions, images, and prices.
- Add items to the cart and view add-ons.
- Search for restaurants.
- Carousel display for menu items.
- Attractive and responsive UI design.
- Fetches live data from Swiggy's API.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/code-walker-23/Food-Delivery-App.git
    cd Food-Delivery-App
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Running the App

You can also access the deployed app [here](https://food-delivery-app-pi-sable.vercel.app/). Please ensure you have the CORS Unblocker extension installed and enabled in your browser for the app to function correctly. This is necessary because the app fetches live data from Swiggy's API, which has CORS restrictions.

## Project Structure

- `src/`: Contains the source code for the application.
  - `components/`: Contains the React components.
  - `pages/`: Contains the different page components (e.g., Home, About, Contact).
  - `styles/`: Contains CSS files for styling the components.
  - `App.js`: Main app component.
  - `index.js`: Entry point of the application.
- `public/`: Contains static assets and the `index.html` file.

## Dependencies

- React
- React DOM
- Parcel
- Additional dependencies can be found in the `package.json` file.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. Make your changes.
4. Commit your changes:
    ```bash
    git commit -m 'Add some feature'
    ```
5. Push to the branch:
    ```bash
    git push origin feature/your-feature-name
    ```
6. Create a new pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Author

Vinay Chhabra

GitHub: [code-walker-23](https://github.com/code-walker-23)
