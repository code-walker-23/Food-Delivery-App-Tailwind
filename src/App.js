import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./main/Header";
import Body from "./main/Body";
import Footer from "./main/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RatingFilter from "./components/RatingFilter";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/Error";
import Menu from "./pages/Menu";
import ScrollToTop from "./components/ScrollToTop";
import TopRatedRestaurant from "./pages/TopRatedRestaurant";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import SearchCities from "./pages/SearchCities";
import { lazy, Suspense, useEffect } from "react";
import { Shimmer } from "./utils/Shimmer";
import LandingPage from "./pages/LandingPage";
import "./styles/tailwind.css";
import LocationComponent from "./pages/FindMe";
import "animate.css";
import UserContex from "./utils/UserContext";

const Grocery = lazy(() => import("./pages/Grocery"));
const About = lazy(() => import("./pages/About"));

// dynamic import is used to load the component lazily.
// lazy is a function that takes a function as an argument and returns a promise.
// the function passed to lazy is a dynamic import that loads the component asynchronously.
// this allows the component to be loaded only when it is needed, reducing the initial bundle size and improving performance.
// the lazy loaded component is wrapped in a Suspense component to handle the loading state and show a fallback UI while the component is being loaded.
// lazy loading or Dynamic Loading or Code Splitting or Chunking or Dynamic importing  is a technique used to improve the performance of web applications by loading code only when it is needed.

const AppLayout = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const data = {
      name: "Vinay Chhabra",
    };
    setUserName(data.name);
  }, []);

  return (
    // Vinay Chhabra
    <UserContex.Provider value={{ loggedIn: userName }}>
      <div className="app">
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContex.Provider>
  );
};
// whatever we wrapped inside the UserContext.Provider, will be able to access the value that we passed to the provider.
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "main",
    element: <AppLayout />,
    children: [
      { path: "", element: <Body /> }, // Default child route
      {
        path: "about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurants/:id",
        element: <Menu />,
      },
      {
        path: "top-rated-restaurants",
        element: <TopRatedRestaurant />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "cities",
        element: <SearchCities />,
      },
      {
        path: "location",
        element: <LocationComponent />,
      },
      {
        path: "groceries",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "RatingFilter",
        element: <RatingFilter />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

// console.log(appRouter); // it return the object of the router.

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);



/* 

 <UserContex.Provider value={{ loggedIn: userName }}>
      <div className="app">
        <ScrollToTop />
        // kaku -> we can use nested provider to pass the value to the nested components.
        <UserContex.Provider value={{ loggedInUser: "kaku" }}>
          <Header />
        </UserContex.Provider>
        <Outlet />
        <Footer />
      </div>
    </UserContex.Provider>







In this application, you are setting up routing using React Router with a structure that involves nested routes. Here's a breakdown of how routing is configured and how it works in this application:

### Components
1. **AppLayout**: 
   - This component acts as a layout wrapper for the entire application. It includes the `Header`, a placeholder for nested components (`<Outlet />`), and the `Footer`.

2. **Other Components**:
   - `Header`: Represents the header of the application.
   - `Body`: Represents the main content for the home page.
   - `Footer`: Represents the footer of the application.
   - `About`: Represents the about page.
   - `Contact`: Represents the contact page.
   - `Menu`: Represents the menu page for a specific restaurant (with a dynamic `id` parameter).
   - `ErrorPage`: Represents the error page to display for unmatched routes.

### Routing Setup
1. **createBrowserRouter**:
   - You use `createBrowserRouter` from React Router to define the routes for the application. This function creates a router instance that listens to URL changes and renders the appropriate components.

2. **Router Configuration**:
   - The `appRouter` is configured with the `createBrowserRouter` function, defining the routes as an array of objects.
   - **Main Route (`/`)**:
     - The main route's `path` is `/`, and it uses `AppLayout` as the main component.
     - `AppLayout` includes nested routes defined in the `children` array.
   - **Nested Routes**:
     - The nested routes are defined within the `children` array under the main route:
       - `{ path: "/", element: <Body /> }`: Maps the root path to the `Body` component.
       - `{ path: "/about", element: <About /> }`: Maps `/about` to the `About` component.
       - `{ path: "/contact", element: <Contact /> }`: Maps `/contact` to the `Contact` component.
       - `{ path: "/restaurants/:id", element: <Menu /> }`: Maps dynamic paths like `/restaurants/123` to the `Menu` component, where `:id` is a URL parameter that can be accessed in the `Menu` component.
   - **Error Route**:
     - `errorElement: <ErrorPage />`: Specifies that the `ErrorPage` component should be rendered when no route matches the current URL.

### Rendering
1. **RouterProvider**:
   - `RouterProvider` is used to render the configured router. It takes the `appRouter` instance as a prop.
   - The `RouterProvider` component is rendered to the DOM using `root.render(<RouterProvider router={appRouter} />)`.

### How It Works
1. **Navigation**:
   - When the application is loaded at the root URL (`/`), the `AppLayout` component is rendered, which includes the `Header`, `Footer`, and the `Body` component (since it matches the root path).
   - When the URL changes to `/about`, the `AppLayout` component still renders the `Header` and `Footer`, but now the `Outlet` is replaced with the `About` component.
   - When the URL changes to `/contact`, the `Contact` component is rendered in place of the `Outlet`.
   - When the URL changes to `/restaurants/:id` (e.g., `/restaurants/123`), the `Menu` component is rendered, and it can access the `id` parameter from the URL.
   - If a URL does not match any of the defined routes, the `ErrorPage` component is rendered.

### Example URL Mappings
- `/` renders `AppLayout` with `Body` in the `Outlet`.
- `/about` renders `AppLayout` with `About` in the `Outlet`.
- `/contact` renders `AppLayout` with `Contact` in the `Outlet`.
- `/restaurants/123` renders `AppLayout` with `Menu` in the `Outlet`, where `id` is `123`.
- Any undefined URL (e.g., `/random`) renders the `ErrorPage`.

This setup ensures a consistent layout with a header and footer while dynamically loading different components based on the current URL. The use of `createBrowserRouter` and nested routes helps manage this efficiently.







*/

// The process that will tell browser router

// Children routes are the routes that are nested inside the parent route.
// The parent route is the route that is defined in the createBrowserRouter function.
// creating children routes is done by defining the children property in the parent route object.
// creating children routes and loading them is done by using the Outlet component from react-router-dom.
// outlet is replaced by the children routes that are defined in the parent route object.

// SPA : Single Page Application : It is a web application that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server.

// React Router : It is a library that allows you to handle routing in a React application.

// BrowserRouter : It is a component that uses the HTML5 history API to keep UI in sync with the URL.

// Route : It is a component that renders some UI when its path matches the current URL.

// Link : It is a component that allows you to navigate to a different URL.

// Outlet : It is a component that is used to render the children routes of the parent route.

// RouterProvider : It is a component that provides the router context to the children components.

/* 


Single Responsibility Principle (SRP) : It is a software design principle that states that a class should have only one reason to change, meaning that a class should have only one job or responsibility.

SRP : It helps in making the code more modular, easier to maintain, and less prone to bugs. By separating concerns and responsibilities, each class or module can focus on a specific task, making the codebase more organized and scalable.

SRP : It helps in reducing the complexity of the code, improving readability, and facilitating easier testing and debugging.

Custome Hooks : Custom hooks are JavaScript functions that utilize React hooks (like useState, useEffect, etc.) to encapsulate and reuse logic in a React application. They allow you to extract common logic into reusable functions that can be shared across components.

Custom Hooks : Custom hooks can be used to abstract complex logic, manage stateful behavior, handle side effects, and improve code reusability in React components.

Custom Hooks : By creating custom hooks, you can separate concerns, make your code more modular, and reduce duplication, leading to cleaner and more maintainable code.

Custom Hooks : Custom hooks follow the naming convention of starting with "use" (e.g., useCustomHook) to indicate that they are hooks and should be used within functional components.

Custom Hooks : Custom hooks can be shared and reused across multiple components, providing a way to encapsulate and share common functionality in a React application.

Custom Hooks : Custom hooks can be used to abstract API calls, manage form state, handle authentication, implement pagination, and more, making them a powerful tool for building complex and scalable React applications.


When we are lazy loading the components, we are splitting the code into smaller chunks and loading them only when they are needed. This can help improve the initial loading time of the application by reducing the amount of code that needs to be loaded upfront.

Lazy loading can be achieved using dynamic imports in React, where you can import components asynchronously using the `import()` function. This allows you to load components on demand, based on user interactions or specific routes.

By lazy loading components, you can optimize the performance of your application, especially for larger applications with multiple routes and complex UI components. This can help reduce the initial bundle size and improve the overall user experience by loading only the necessary code when required.

Lazy loading is a common practice in modern web development to improve page load times, reduce resource consumption, and enhance the overall performance of web applications.

when we are doing lazy loading , then bundled js file will not include the component that we want to load on demand.As we click on the link, then only that component will be loaded and rendered on the screen.
But react will reject the component that is not loaded at the time of rendering the page.

To handle that state of the component that is not loaded at the time of rendering the page, we can use the Suspense component from react.

Suspense component is used to handle the loading state of the component that is being lazy loaded. It allows you to show a fallback UI (e.g., loading spinner) while the component is being loaded asynchronously.

if we not use suspense component, then react will throw an error when the component is not loaded at the time of rendering the page.

Suspense component is used to wrap the lazy loaded component and provide a fallback UI to display while the component is loading. This helps improve the user experience by showing a loading indicator or placeholder content until the component is fully loaded and rendered.






*/

/* 


React is commonly referred to as a JavaScript library rather than a framework. Here's why:

### Library vs. Framework

1. **Library**:
   - A library is a collection of pre-written code that developers can use to optimize tasks. It offers functions and methods to perform specific tasks.
   - Libraries are typically used to handle certain aspects of development and can be integrated with other libraries and frameworks.

2. **Framework**:
   - A framework provides a complete structure for application development. It dictates the architecture and flow of the application, offering more control over how the application is built.
   - Frameworks often include everything necessary for application development, including libraries, compilers, toolsets, and APIs.

### Why React is a Library

1. **Focused Scope**:
   - React focuses on building user interfaces. It primarily deals with the view layer in the Model-View-Controller (MVC) architecture. This makes it a specialized tool rather than a full-fledged framework.

2. **Flexibility**:
   - React allows developers to choose other libraries and tools they want to use alongside it. For example, developers can use React with different state management libraries like Redux or MobX, and different routing solutions like React Router.

3. **Integration**:
   - React can be integrated into other projects and used with different libraries and frameworks. It doesn’t impose a specific structure on the whole application, allowing for more flexible and modular development.

4. **Component-Based Architecture**:
   - React’s primary offering is its component-based architecture, which allows developers to build encapsulated components that manage their own state and compose them to make complex UIs.

### Supporting Arguments

- **Documentation**: The official React documentation refers to it as a "JavaScript library for building user interfaces."
- **Community Consensus**: The wider developer community generally considers React a library because of its focus and flexibility.

### Conclusion

React is a JavaScript library because it provides the tools to build user interfaces and integrates seamlessly with other libraries and frameworks, allowing developers to structure their applications as they see fit. This distinguishes it from frameworks, which typically impose more structure and control over the entire application development process.


*/

/* 


CSS libraries are tools that provide pre-written CSS code for various UI components, helping developers to quickly and efficiently create consistent and responsive designs. Here is a list of some popular CSS libraries:

### Comprehensive CSS Frameworks

1. **Bootstrap**
   - URL: [getbootstrap.com](https://getbootstrap.com/)
   - Features: Grid system, responsive design, extensive pre-styled components, JavaScript plugins.
   - License: MIT

2. **Foundation**
   - URL: [foundation.zurb.com](https://foundation.zurb.com/)
   - Features: Mobile-first approach, flexible grid, accessible components.
   - License: MIT

3. **Bulma**
   - URL: [bulma.io](https://bulma.io/)
   - Features: Modern, flexbox-based, responsive design, clean syntax.
   - License: MIT

4. **Tailwind CSS**
   - URL: [tailwindcss.com](https://tailwindcss.com/)
   - Features: Utility-first approach, highly customizable, responsive design.
   - License: MIT

### Minimalist and Lightweight Libraries

5. **Skeleton**
   - URL: [getskeleton.com](http://getskeleton.com/)
   - Features: Simple and lightweight, responsive grid.
   - License: MIT

6. **Pure.css**
   - URL: [purecss.io](https://purecss.io/)
   - Features: Minimalist, small file size, responsive grids, modular.
   - License: Yahoo BSD

7. **Milligram**
   - URL: [milligram.io](https://milligram.io/)
   - Features: Minimal setup, lightweight, responsive typography.
   - License: MIT

8. **Tachyons**
   - URL: [tachyons.io](https://tachyons.io/)
   - Features: Functional CSS, responsive design, small file size.
   - License: MIT

### Component-Based Libraries

9. **Semantic UI**
   - URL: [semantic-ui.com](https://semantic-ui.com/)
   - Features: Human-friendly HTML, theming, extensive components.
   - License: MIT

10. **UIkit**
    - URL: [getuikit.com](https://getuikit.com/)
    - Features: Modular, responsive components, customizable.
    - License: MIT

11. **Materialize**
    - URL: [materializecss.com](https://materializecss.com/)
    - Features: Material design components, responsive, mobile-first.
    - License: MIT

12. **Ant Design**
    - URL: [ant.design](https://ant.design/)
    - Features: Enterprise-level components, design language, theming.
    - License: MIT

### Utility-First and Functional CSS Libraries

13. **Basscss**
    - URL: [basscss.com](https://basscss.com/)
    - Features: Lightweight, responsive, utility-first.
    - License: MIT

14. **Picnic CSS**
    - URL: [picnicss.com](https://picnicss.com/)
    - Features: Lightweight, responsive, easy to use.
    - License: MIT

### Animation Libraries

15. **Animate.css**
    - URL: [animate.style](https://animate.style/)
    - Features: Cross-browser animations, easy to use.
    - License: MIT

16. **Hover.css**
    - URL: [ianlunn.github.io/Hover](https://ianlunn.github.io/Hover/)
    - Features: Collection of CSS3 hover effects.
    - License: MIT

### Specialized Libraries

17. **Bootstrap Material Design**
    - URL: [fezvrasta.github.io/bootstrap-material-design](https://fezvrasta.github.io/bootstrap-material-design/)
    - Features: Material design for Bootstrap, responsive.
    - License: MIT

18. **NES.css**
    - URL: [nostalgic-css.github.io/NES.css](https://nostalgic-css.github.io/NES.css/)
    - Features: NES-style UI components, retro design.
    - License: MIT

19. **Bulma-Extensions**
    - URL: [bulma.io/extensions](https://bulma.io/extensions/)
    - Features: Additional components for Bulma, responsive.
    - License: MIT

20. **Chota**
    - URL: [chota.css](https://jenil.github.io/chota/)
    - Features: Super lightweight, responsive, minimalistic.
    - License: MIT

These CSS libraries provide a wide range of tools and components to help you quickly build and style your web applications. Depending on your project's needs, you can choose a library that offers the appropriate balance of features, customization, and ease of use.


*/
