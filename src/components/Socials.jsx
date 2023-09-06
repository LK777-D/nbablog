import { UilFacebook } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilDiscord } from "@iconscout/react-unicons";
import { UilYoutube } from "@iconscout/react-unicons";
import { UilTwitter } from "@iconscout/react-unicons";
import { UilSnapchatSquare } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <section className="text-white flex flex-col gap-4 p-5 rounded-lg min-w-[18rem] bg-zinc-900 ">
      <span>Follow Us</span>
      <div className=" bg-zinc-600 w-full h-[2px] "></div>
      <div className=" grid grid-cols-2 gap-5 w-full place-items-center  ">
        <Link>
          <UilFacebook size="40" className="text-blue-500" />
        </Link>
        <Link>
          <UilInstagram size="40" className="text-red-400" />
        </Link>
        <Link>
          <UilDiscord size="40" className="text-purple-500" />
        </Link>
        <Link>
          <UilYoutube size="40" className="text-red-700" />
        </Link>
        <Link>
          <UilTwitter size="40" className="text-blue-500" />
        </Link>
        <Link>
          <UilSnapchatSquare size="40" className="text-yellow-400" />
        </Link>
      </div>
    </section>
  );
};

export default Socials;
