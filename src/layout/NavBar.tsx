import {Link} from "react-router-dom";
import {BubblyLink} from "react-bubbly-transitions";
import React from "react";
import LinkComponent from "../components/layout/LinkComponent";

function NavBar() {

    return (<>
        <style type="text/css">
            {`
            @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap');
            
            nav {
            box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
            margin-bottom: 15px;
            }
            
            .logo {
            color: #FFFFFF;
            font-size: 32px !important;
            font-weight: 900;
            font-family: 'Black Ops One', cursive;
            }
            
            .link {
            flex: 1;
            font-size: 18px;
            font-weight: 700;
            color: #FFFFFF;
            text-transform: uppercase;
            transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
            padding-inline: 6px;
            border-radius: 2px;
            }
            
            .link:hover{
              box-shadow: inset 100px 0 0 0 #54b3d6;
  color: white;
            }
            `}
        </style>

        <nav className="flex bg-blue-600 justify-between h-20 items-center m-3 rounded px-5">
            <div className="logo"><LinkComponent to="/">M.P.</LinkComponent></div>

            <ul className="flex ms-auto space-x-4">
                <li className="link">
                    <LinkComponent to="/"> Acasă </LinkComponent>
                </li>
                <li className="link">                    <LinkComponent to="/despre"> Despre </LinkComponent>
                </li>
                <li className="link">
                    <LinkComponent to="/contact"> Contact </LinkComponent>
                </li>
            </ul>
        </nav>
    </>)
}

export default NavBar