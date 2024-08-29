import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";

function Layout({children}) {
    return (
        <div className={"layout min-h-full flex flex-col justify-stretch"}>
            <Header/>
            <div className="content flex-grow">
                {children}
            </div>

            <Footer/>
        </div>
    );
}

export default Layout;