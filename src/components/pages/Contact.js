import OfflineComponent from "../../utils/offlineComponent";
import useOnlineStatus from "../../hooks/useOnlineStatus";

function Contact() {
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <OfflineComponent />;
  }

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen mt-8">
      <header className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h1>
        <p className="text-gray-600">We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.</p>
      </header>

      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
        <form className="space-y-4">
          <div className="form-group">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Information</h2>
        <p className="text-gray-600"><strong>Address:</strong> 123 Food Street, Flavor Town, FT 45678</p>
        <p className="text-gray-600"><strong>Email:</strong> info@sumanfoods.com</p>
        <p className="text-gray-600"><strong>Phone:</strong> (123) 456-7890</p>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Find Us Here</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095975!2d144.9556513153107!3d-37.81732797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57706b4eae2057!2sVictoria!5e0!3m2!1sen!2sau!4v1622721324871!5m2!1sen!2sau"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contact;
