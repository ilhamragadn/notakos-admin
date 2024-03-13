import { PropTypes } from "prop-types";

const RouteBar = (props) => {
  return (
    <>
      <div className="mt-2 mb-4 p-4 bg-gradient-to-r from-yellow-400 from-20% via-amber-500 via-40% to-primary-400 to-80% rounded-lg shadow-lg">
        <h1 className="font-medium text-lg text-primary-900 ">{props.title}</h1>
      </div>
    </>
  );
};

RouteBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default RouteBar;
