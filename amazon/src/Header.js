import React from "react";
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
    return (
        <div className="header">
            <img className="header_logo" src="/flavo.png" />

            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">LOGIN</span>
                    {/* <span className="header_optionLineTwo"></span> */}
                </div>

                <div className="header_option">
                    <span className="header_optionLineOne">ORDER</span>
                </div>

                <div className="header_option">
                    <span className="header_optionLineOne">CONTACT</span>
                </div>
            </div>

            <div className="header_nav">
                <div className="header_option header_search">
                    <input className="header_searchInput" type='text' />
                    <SearchIcon className="header_searchIcon" />
                </div>

                <div className="header_option header_cart">
                    <ShoppingCartIcon className="header_cartIcon" />
                    <span className="header_optionLineTwo_cartCount">5</span>
                </div>
            </div>
        </div>
    );
}

export default Header;