import React, { useState } from 'react';

const MyDialog = ({ isDialogOpen, setIsDialogOpen }) => {
	return (
		<div
			className="dialog"
			style={isDialogOpen ? { display: 'flex' } : { display: 'none' }}
		>
			<div className="dialog__body">
				<button
					onClick={() => setIsDialogOpen(false)}
					type="button"
					className="dialog__close"
				>
					X
				</button>
				<div className="dialog__text">The email was sended</div>
			</div>
		</div>
	);
};

export default MyDialog;
