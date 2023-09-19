import React, {PropsWithChildren} from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout({children}: PropsWithChildren<{}>) {
    return (
        <>
            <NavBar />
            <main className="lg:container mx-auto"> {children} </main>
            <Footer />
        </>
    )
}

export default Layout;
