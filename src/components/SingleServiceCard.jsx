import ConstructionIcon from '@mui/icons-material/Construction';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleServiceCard = ({ data }) => {
	return (
		<div className="single-card-container">
			<Link className='Link singleServiceCard' to={'/wallets'}>
					<div className='icon'>
						<ConstructionIcon className='card-icon'  />
					</div>
					<h3>{data.title}</h3>
					<p>{data.description}</p>
			</Link>
		</div>

	);
};

export default SingleServiceCard;
