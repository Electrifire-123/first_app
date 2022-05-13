import React from "react";
import Button from './Button';

const Header = () => {
    return(
        <header className="header">
            <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="logo of site" />
            <section>
                <Button buttonText="Login" />
                <Button buttonText="Logout" />
            </section>
        </header>
    );
};

export default Header;