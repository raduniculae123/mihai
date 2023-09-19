import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa6";
import {useState} from "react";
import TermsModal from "../components/modal/TermsModal";
import PolicyModal from "../components/modal/PolicyModal";
import CookieModal from "../components/modal/CookieModal";
import LinkComponent from "../components/layout/LinkComponent";

function Footer() {

    const [openTerms, setOpenTerms] = useState(false);
    const [openPolicy, setOpenPolicy] = useState(false);
    const [openCookie, setOpenCookie] = useState(false);

    function closeModal() {
        setOpenTerms(false);
        setOpenPolicy(false);
        setOpenCookie(false);
    }

    return (<>
            <footer className="relative bg-blue-200 pt-8 pb-6 mt-[50px]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl">Fii la curent</h4>

                            <h5 className="text-lg mt-0 mb-2">
                                Mă poți găsi pe oricare din platformele <br/> de mai jos
                            </h5>

                            <div className="mt-6 lg:mb-0 mb-6 flex space-x-3">
                                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                                    <FaFacebook className="text-blue-600 font-normal h-10 w-10 rounded-full"/>
                                </a>

                                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                                    <FaInstagram className="text-orange-700 font-normal h-10 w-10"/>
                                </a>

                                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                                    <FaLinkedin className="text-sky-600 font-normal h-10 w-10 rounded-full"/>
                                </a>
                            </div>
                        </div>

                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-sm font-bold mb-2">Link-uri utile:</span>

                                    <ul className="list-unstyled">
                                        <li className="block pb-2 text-sm">
                                            <LinkComponent
                                                to="/"> Acasă </LinkComponent>
                                        </li>

                                        <li className="block pb-2 text-sm">
                                            <LinkComponent
                                                to="/despre"> Despre </LinkComponent>
                                        </li>

                                        <li className="block pb-2 text-sm">
                                            <LinkComponent to="/contact">Contact</LinkComponent>
                                        </li>
                                    </ul>
                                </div>

                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-sm mb-2 font-bold">Alte resurse:</span>
                                    <ul className="list-unstyled">
                                        <li onClick={() => {
                                            setOpenTerms(true)
                                        }}>
                                            <span
                                                className="block pb-2 text-sm cursor-pointer">Termeni si conditii</span>
                                        </li>

                                        <li onClick={() => {
                                            setOpenPolicy(true)
                                        }}>
                                            <span className="block pb-2 text-sm cursor-pointer">Politica de
                                                confidentialitate </span>
                                        </li>

                                        <li onClick={() => {
                                            setOpenCookie(true)
                                        }}>
                                            <span
                                                className="block pb-2 text-sm cursor-pointer"> Politica de cookie </span>
                                        </li>

                                        <li>
                                            <a className="block pb-2 text-sm" target="_blank"
                                               rel="noreferrer" href="https://anpc.ro/">ANPC</a>
                                        </li>

                                        <li>
                                            <a className="block pb-2 text-sm" target="_blank"
                                               rel="noreferrer"
                                               href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=EN"> Solutionarea
                                                Online a Litigiilor </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 space-x-3 max-w-2xl ml-auto">
                        <div className="p-5 max-w-[300px] mx-auto">
                            <a href="https://anpc.ro/" target="_blank" rel="noreferrer">
                                <img src="image/SAL.png" alt=""/>
                            </a>
                        </div>

                        <div className="p-5 max-w-[300px] mx-auto">
                            <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=EN"
                               target="_blank" rel="noreferrer">
                                <img src="image/SOL.png" alt=""/>
                            </a>
                        </div>
                    </div>


                    <hr className="my-6"/>
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 py-1">
                                Copyright © 2023
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <TermsModal openModal={openTerms} closeModal={closeModal}/>

            <PolicyModal openModal={openPolicy} closeModal={closeModal}/>

            <CookieModal openModal={openCookie} closeModal={closeModal}/>

        </>
    )
}

export default Footer;