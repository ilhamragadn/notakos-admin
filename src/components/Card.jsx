import { PropTypes } from "prop-types";

const Card = (props) => {
  return (
    <>
      <div className="block max-w-sm p-4 m-2 rounded-lg shadow-sm shadow-primary-400 hover:shadow-none hover:bg-primary-600 group">
        <div className="group-hover:text-yellow-400">
          <h3 className="mb-1 text-xl font-semibold tracking-wide">
            {props.title}
          </h3>
          <p className="font-normal text-justify">{props.content}</p>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Card;
