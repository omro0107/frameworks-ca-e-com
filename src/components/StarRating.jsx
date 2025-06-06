import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

/**
 * Individual star icon component
 * @returns {JSX.Element} A FontAwesome star icon
 */
const StarIcon = () => <FontAwesomeIcon icon={faStar} className='star-icon' />;

/**
 * Renders an array of star icons based on the given number
 * @param {number} number - The number of stars to render
 * @returns {JSX.Element[]} Array of StarIcon components
 */
function renderStars(number) {
  return Array.from({ length: number }, (_, index) => <StarIcon key={index} />);
}

/**
 * Star rating component that displays a visual rating using star icons
 * @param {Object} props - Component props
 * @param {number} props.rating - The rating value (number of stars to display)
 * @returns {JSX.Element} A div containing the star rating
 * @component
 */
const StarRating = ({ rating }) => {
  return <div>{renderStars(rating)}</div>;
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;