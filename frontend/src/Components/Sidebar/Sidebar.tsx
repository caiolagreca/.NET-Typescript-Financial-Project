import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaCashRegister } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <nav className="block py-4 px-6 w-64 bg-gray-900 shadow-xl fixed top-0 left-0 bottom-0 z-50 transition-transform duration-300 ease-in-out transform translate-x-0">
      <div className="flex flex-col items-center min-h-full overflow-y-auto">
        <div className="flex flex-col w-full mt-6">
          <Link
            to="company-profile"
            className="flex items-center text-white font-semibold text-sm uppercase py-3 hover:text-lightGreen transition-all"
          >
            <FaHome className="text-lightGreen mr-3" />
            <span>Company Profile</span>
          </Link>
          <Link
            to="income-statement"
            className="flex items-center text-white font-semibold text-sm uppercase py-3 hover:text-lightGreen transition-all"
          >
            <MdAttachMoney className="text-lightGreen mr-3" />
            <span>Income Statement</span>
          </Link>
          <Link
            to="balance-sheet"
            className="flex items-center text-white font-semibold text-sm uppercase py-3 hover:text-lightGreen transition-all"
          >
            <LuFileSpreadsheet className="text-lightGreen mr-3" />
            <span>Balance Sheet</span>
          </Link>
          <Link
            to="cash-flow"
            className="flex items-center text-white font-semibold text-sm uppercase py-3 hover:text-lightGreen transition-all"
          >
            <FaCashRegister className="text-lightGreen mr-3" />
            <span>Cash Flow</span>
          </Link>
          <Link
            to="historical-dividend"
            className="flex items-center text-white font-semibold text-sm uppercase py-3 hover:text-lightGreen transition-all"
          >
            <FaChartBar className="text-lightGreen mr-3" />
            <span>Historial Dividend</span>
          </Link>
          <Link
            to="/"
            className="flex items-center text-white font-semibold text-sm uppercase py-3 hover:text-lightGreen transition-all"
          >
            <FaChartBar className="text-lightGreen mr-3" />
            <span>Back To Home Page</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
