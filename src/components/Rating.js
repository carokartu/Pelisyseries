import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

export const StyledIcon = styled(FontAwesomeIcon)`
	color: lightblue;
`;

const Rating = ({ rating }) => {
	const ratingStars = (rating) => {
		const rate = [];
		for (let i = 0; i < rating; i++) {
			rate.push(<StyledIcon icon={faStar} />);
		}
		if (rate.length < 10) {
			const rest = 10 - rate.length;
			for (let i = 0; i < rest; i++) {
				rate.push(<StyledIcon icon={faStarRegular} />);
			}
			return <div>{rate}</div>;
		} else {
			return <div>{rate}</div>;
		}
	};
	return ratingStars(rating);
};

export default Rating;
