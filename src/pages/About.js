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






