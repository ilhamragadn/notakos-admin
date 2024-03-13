import { Link } from "react-router-dom";
import notakosLogo from "../assets/notakos-logo.svg";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center justify-center">
        <img src={notakosLogo} alt="logo-notakos" srcSet="" className="w-12" />
        <span className="self-center ml-3 text-2xl font-semibold whitespace-nowrap">
          NOTAKOS
        </span>
      </div>
    </Link>
  );
};

export default Logo;
