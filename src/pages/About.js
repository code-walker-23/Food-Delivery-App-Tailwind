import React from "react";
import UserClass from "../components/UserClass";
import OfflineComponent from "../utils/offlineComponent";
import useOnlineStatus from "../hooks/useOnlineStatus";

const About = () => {
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <OfflineComponent />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-100 text-gray-900">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover our journey and what drives us to deliver the best to our
          customers.
        </p>
      </header>

      <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Company Overview</h2>
        <p className="text-base text-gray-700 leading-relaxed">
          Welcome to <strong className="text-blue-600">Suman Food and Beverages</strong>, your go-to
          destination for delicious and healthy food options. Founded in 2008,
          we have been committed to providing our customers with the finest
          culinary experiences. Our journey began with a simple idea - to make
          good food accessible to everyone.
        </p>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Mission</h2>
        <p className="text-base text-gray-700 leading-relaxed">
          Our mission is to create a memorable dining experience by offering
          high-quality, diverse, and sustainable food choices. We believe in the
          power of good food to bring people together and make a positive impact
          on the community.
        </p>
      </section>

      <section className="bg-gray-50 py-8">
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Quality</h3>
            <p className="text-gray-600">
              We are dedicated to providing the best quality ingredients and
              exceptional service to our customers.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sustainability</h3>
            <p className="text-gray-600">
              We prioritize sustainable practices in sourcing, production, and
              packaging to protect our planet.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Community</h3>
            <p className="text-gray-600">
              We believe in giving back to the community and supporting local
              initiatives and causes.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <UserClass
            name="John Doe"
            designation={"Founder & CEO"}
            image={"team-member1.jpg"}
          />
          <UserClass
            name="Jane Smith"
            designation={"Head Chef"}
            image={"team-member2.jpg"}
          />
          <UserClass
            name="Emily Johnson"
            designation={"Marketing Director"}
            image={"team-member3.jpg"}
          />
          <UserClass
            name="Emily Parkenson"
            designation={"Marketing Director"}
            image={"team-member3.jpg"}
          />
        </div>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-6">Have any questions? Feel free to reach out to us!</p>
        <a
          href="mailto:info@sumanfoods.com"
          className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default About;



/* 

This is an optimization for react.

when there is multiple class based child component so react will batch render phase of all the child component and then commit phase of all the child component happen together in one go.

https://medium.com/codex/the-lifecycle-of-a-react-component-8e01332a068d

why we batch render phase of all the components together?
- because react want to minimize the number of dom manipulation.
- if we render the component one by one then it will cause multiple dom manipulation which is not good for performance.
- so react will batch the render phase of all the child component and then commit phase of all the child component happen together in one go.
- this is called batch rendering.
- this is the reason why we see the console log of all the child component first and then parent component.


- After rendering the component, react will call the componentDidMount method of all the child component and then parent component.
- DOM Update in Single Batch: React will update the DOM in a single batch. This means that if there are multiple updates to the DOM, React will batch them together and update the DOM in a single go. This is done to minimize the number of DOM manipulations and improve performance.

- React will batch the render phase of all the child component and then commit phase of all the child component happen together in one go.

*/

/* 


It looks like you're trying to use a custom hook (useOnlineStatus) inside a class component. Custom hooks can only be used inside functional components. To fix this, you can convert your class component to a functional component or use the custom hook in a wrapper functional component and pass the state down to your class component.




class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor Called");
  }

  componentDidMount(){
    console.log("Parent ComponentDidMount Called");
  };

  render() {
    const onlineStatus = useOnlineStatus();
    if(onlineStatus == false){
      return <OfflineComponent/>;
    }
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
            high-quality, diverse, and sustainable food choices. We believe in
            the power of good food to bring people together and make a positive
            impact on the community.
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
              <UserClass
                name="John Doe"
                designation={"Founder & CEO"}
                image={"team-member1.jpg"}
              />
            }
            {
              <UserClass
                name="Jane Smith"
                designation={"Head Chef"}
                image={"team-member2.jpg"}
              />
            }

            {
              <UserClass
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
}

export default About;




/* 


Key Points:
Custom Hooks in Functional Components: Custom hooks like useOnlineStatus should be used inside functional components.
Wrapper Component: Use a functional component to handle the hook logic and pass data as props to the class component if you prefer to keep the class-based structure.
This approach will ensure that you can use the custom hook while maintaining the structure of your class component.


*/



