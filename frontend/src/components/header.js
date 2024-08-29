import React from 'react';
import Logo from '../assets/images/abstract_logo.png';

function Header(props) {
    return (<header
            className={"flex items-center justify-between px-2 py-1 h-[4rem] text-white w-full bg-[var(--bg-header-footer)] text"}>
            <div className="logo-box h-full flex justify-center items-center py-2 md:ml-8">
                <img src={Logo} alt="logo" className={"h-full mr-2"}/>
                <h1 className="logo-text text-white ">Abstract | Help Center</h1>
            </div>
            <button
                className="request-btn border-[2px]
                 border-gray-500 px-4 py-[.5rem]
                rounded-[10px] bg-gray-900
                 hover:bg-gray-800 transition-colors duration-300
                 md:mr-8
                 "
            >
                Submit a Request
            </button>
        </header>);
}

export default Header;