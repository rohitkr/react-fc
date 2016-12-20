import React from 'react';

const Header = ({message, name}) => {
	return (
		<h2 className="Header text-center">
			This is a {name} {message} 
		</h2>
		);
}

export default Header;