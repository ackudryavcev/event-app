import { Link, Outlet } from "react-router-dom";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

//type Props = {};

const Navbar = () => {
  return (
    <div className="flex">
      <div className="w-1/4">
        <div className="p-4 mt-10 text-gray-600">
          <CalendarDaysIcon className="h-7 w-7 text-gray-600 inline-block" /> My
          events
        </div>
        <div>
          <Link to="/music">Music</Link>
        </div>
        <div>Exhibition</div>
        <div>Theater</div>
        <div>Movies</div>
      </div>
      <div className="w-3/4">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
