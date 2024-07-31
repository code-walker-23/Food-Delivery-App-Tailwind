// The funcional component must start with capital letter.

/* 
function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>
          Discover our journey and what drives us to deliver the best to our
          customers.
        </p>
      </header>

      <section className="about-overview">
        <h2>Company Overview</h2>
        <p>
          Welcome to <strong>Suman Food and Beverages</strong>, your go-to
          destination for delicious and healthy food options. Founded in 2008,
          we have been committed to providing our customers with the finest
          culinary experiences. Our journey began with a simple idea - to make
          good food accessible to everyone.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to create a memorable dining experience by offering
          high-quality, diverse, and sustainable food choices. We believe in the
          power of good food to bring people together and make a positive impact
          on the community.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li>
            <h3>Quality</h3>
            <p>
              We are dedicated to providing the best quality ingredients and
              exceptional service to our customers.
            </p>
          </li>
          <li>
            <h3>Sustainability</h3>
            <p>
              We prioritize sustainable practices in sourcing, production, and
              packaging to protect our planet.
            </p>
          </li>
          <li>
            <h3>Community</h3>
            <p>
              We believe in giving back to the community and supporting local
              initiatives and causes.
            </p>
          </li>
        </ul>
      </section>

      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          {
            <Ser
              name="John Doe"
              designation={"Founder & CEO"}
              image={"team-member1.jpg"}
            />
          }
          {
            <Ser
              name="Jane Smith"
              designation={"Head Chef"}
              image={"team-member2.jpg"}
            />
          }

          {
            <Ser
              name="Emily Johnson"
              designation={"Marketing Director"}
              image={"team-member3.jpg"}
            />
          }
          <UserClass
            name="Emily Parkenson"
            designation={"Marketing Director"}
            image={"team-member3.jpg"}
          />
        </div>
      </section>

      <section className="about-contact">
        <h2>Contact Us</h2>
        <p>Have any questions? Feel free to reach out to us!</p>
        <a href="mailto:info@sumanfoods.com" className="contact-button">
          Get in Touch
        </a>
      </section>
    </div>
  );
}
import UserClass fromUserClass";

export default About;
 */


/* 

Life Cycle of the Class based component:

lifecycle of parent class component and children class component:
1. It will call contructor of parent class component.
2. it will call the render method
3. if we are using a child component inside render method,it will first trigger the lifecycle of the child component and then come to the aprent component.
4. first child componentDidMount(it will execute after the component has been rendered or loaded or mounted onto the web page ) will be called and then parent componentDidMount is called.

*/




/* import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { TailSpin } from "react-loader-spinner"; // Import the spinner

const Body = () => {
  const [resFilter, setListOfRestaurant] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetchData();
  }, []);

  console.log("Body Component is Rendered!");

  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
      setListOfRestaurant(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Set loading to false even if there is an error
    }
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <TailSpin color="#00BFFF" height={80} width={80} />
      </div>
    );
  }

  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          setListOfRestaurant(
            resFilter.filter((res) => res.info.avgRating > 4.4)
          );
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="restaurant-container">
        {resFilter.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
 */

/* 

as i write something in the search bar it will update the state of searchText and when i click on the search button it will console log the searchText.
and it will re-render on each alphabet typed in the search bar.and only update the search button part of the UI not the whole UI by comparing current virtual dom with the previous virtual dom.

This all is happing because new react fibre reconcilation and differntial rendering.that is why it is faster than the previous react version. 

For re-render the function component we have to use useEffect and useState hooks.

Routing in react is done by react-router-dom.

Routing : It is the process of determining the path of the URL and rendering the component based on the path.

Behind the scene Link is using anchor tag.This is special type of anchor tag which is provided by react-router-dom.

Link is wrapper over the anchor tag.

*/



/* 


when setBtnName is called it will re render the whole UI again. and create a new variable btnName that's wht it's work even if it's const.

when the button is clicked, the button name should change to Logout and it will re render the whole header again and when it compare it with the previous virtual dom it will find the difference only in div where the button is placed and it will update only that part of the UI not load different parts of header except the button.

That's why it is reconcilation and differntial rendering.

useEffect is called whenever our component is rendered and it will run the function inside it.

useEffect is called after the first render and after every update.

useEffect takes two arguments first is the function that we want to run and the second is the array of dependencies.

array of dependencies is the list of variables that useEffect depends on.

if we pass an empty array of dependencies then it will run only once after the first render.

if we pass a variable in the array of dependencies then it will run whenever that variable is updated.

if we pass multiple variables in the array of dependencies then it will run whenever any of the variables is updated.

useEffect is used to run the side effects in the function component.

1. If there dependency array is not present then useEffect is called on every render as eg. login/logout button.

2. If there is an empty array of dependencies then useEffect is called only once after the first render.





*/





// Class Based Component : it is a class which extends React.Component and has a render method which returns the JSX.
// Functional Component : it is a function which returns the JSX.

// render method is called whenever the state variable changes.
// render method is called whenever the props changes.
// render method is called whenever the parent component re-render.

// Difference between Class Component and Functional Component:
// 1. Class Component has a render method which returns the JSX.
// 2. Functional Component is a simple function which returns the JSX.
// 3. Class Component has a state variable and lifecycle methods.
// 4. Functional Component has a props and hooks.
// 5. Class Component has a this keyword.
// 6. Functional Component has a arrow function.
// 7. Class Component has a constructor method.
// 8. Functional Component has a useState hook.
// 9. Class Component has a lifecycle methods.
// 10. Functional Component has a useEffect hook.
// 11. Class Component has a setState method.

// Class based component is deprecated(Still supported by many s/w but not recommended by React).

// when we say we are loading the function based component on the web page(Rendering the component on the web page). (mounting or invoking function based component)

// when we say Loading the class based component that we are creating the instance of  the class and loading

// whenever we create the instance of the class the contructor method is called.

// That's why we create local state variable in the constructor method so whenver the instance is created the state variable is also created.

// this.state is a whole big object which contains all the state variables.
// this.setState is a method which is used to update the state variable.

// this.setState is a method which is used to update the state variable and re-render the component.

// In fucntional to store each state varibale we used to create a big boject behind the scene but in class based component we have a state object which contains all the state variables.

// Inside the state object we can store multiple state variables.but in setState we can update state variables but it will update only that you send as argument and don't touch the others .

// Let's see how we mount the class based components:
// 1. Whenever we create the instance of the class based component the constructor method is called.
// 2. Whenever we create the instance of the class based component the render method is called.
// 3. Whenever we create the instance of the class based component the componentDidMount method is called.
// 4. Whenever we create the instance of the class based component the componentDidUpdate method is called.
