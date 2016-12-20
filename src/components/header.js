import React from 'react';

const Header = ({message}) => {
	return (
		<h2 className="Header text-center">
			This is a {message}
		</h2>
		);
}

export default Header;