import React from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ isAuth }) => {
    return (
        <nav>
            <Link to="/">
                <FontAwesomeIcon icon={faHouse} />
                Home
            </Link>

            {!isAuth ? (
                <Link to="/login">
                    <FontAwesomeIcon icon={faArrowRightToBracket} />
                    Login
                </Link>
            ) : (
                <>
                    <Link to="/createpost">
                        <FontAwesomeIcon icon={faFilePen} />
                        Post
                    </Link>
                    <Link to="/logout">
                        <FontAwesomeIcon icon={faArrowRightToBracket} />
                        Logout
                    </Link>
                </>
            )}
        </nav>
    )
}

export default Nav;