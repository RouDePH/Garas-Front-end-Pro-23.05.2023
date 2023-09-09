import '../App.css';

import { React } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <div className='header'>
            <Link to={`/`}>
                <button className='button-4'>Home</button>
            </Link>
        </div>
    );
};

export default Header;
