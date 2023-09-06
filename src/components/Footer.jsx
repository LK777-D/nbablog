import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16  ">
      <div className="container mx-auto md:flex  gap-4 ">
        {/* Column 1 */}
        <div className="w-full md:w-1/4 px-4 ">
          <h3 className="text-3xl font-semibold mb-6">About Us</h3>
          <p className="text-lg mb-4">
            Dedicated to celebrating NBA greatness. Join us in exploring the
            world of basketball through quizzes, games, and insights
          </p>

          <Link href="#" className="text-lg hover:text-gray-400">
            Our Team
          </Link>
          <br />
          <Link href="#" className="text-lg hover:text-gray-400">
            Contact Us
          </Link>
          <br />
          <Link href="#" className="text-lg hover:text-gray-400">
            Privacy Policy
          </Link>
        </div>

        <div className="w-full md:w-1/4 px-4 mt-7">
          <h3 className="text-3xl font-semibold mb-6">Teams</h3>
          <Link href="#" className="text-lg hover:text-gray-400">
            Eastern Conference
          </Link>
          <br />
          <Link href="#" className="text-lg hover:text-gray-400">
            Western Conference
          </Link>
          <br />
          <Link href="#" className="text-lg hover:text-gray-400">
            Team Directory
          </Link>
        </div>

        <div className="w-full md:w-1/4 px-4 mt-8">
          <h3 className="text-3xl font-semibold mb-6">Connect</h3>
          <a href="#" className="text-lg hover:text-gray-400">
            Facebook
          </a>
          <br />
          <a href="#" className="text-lg hover:text-gray-400">
            Twitter
          </a>
          <br />
          <a href="#" className="text-lg hover:text-gray-400">
            Instagram
          </a>
        </div>

        <div className="w-full md:w-1/4 px-4 mt-7">
          <h3 className="text-3xl font-semibold mb-6">Subscribe</h3>
          <p className="text-lg mb-4">
            Stay updated with the latest NBA news and updates.
          </p>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-white rounded-lg p-3 w-full text-lg"
            />
            <button className="mt-4 bg-zinc-500 hover:bg-zinc-600 text-white px-6 py-3 rounded-md text-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className=" mt-12  text-center">
        <p className="text-lg">&copy; 2023 NBA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
