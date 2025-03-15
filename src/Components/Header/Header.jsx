import { useState, useEffect } from "react";
import Logo from "../../img/Logo.png";
import { NavLink } from "react-router-dom";
import Button from "../UI/Buttons/Button";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1230px] border-2 border-MainColor mt-[15px] rounded-[10px] shadow-xl py-[10px] transition-all duration-300 ${scrolled ? "bg-white/30 backdrop-blur-md" : "bg-white"
                }`}
        >
            <div className="Container">
                <div className="flex items-center justify-between">
                    <div className="w-full flex items-center gap-[30px]">
                        <div className="Logo">
                            <img className="w-[200px] sm:w-[250px]" src={Logo} alt="Logo" />
                        </div>
                        <nav className="hidden md:flex items-center gap-[20px]">
                            <NavLink
                                to={`/`}
                                className="font-bold text-MainColor text-[21px] duration-300 hover:opacity-[0.5]"
                            >
                                SAT
                            </NavLink>
                            <NavLink
                                to={`/`}
                                className="font-bold text-MainColor text-[21px] duration-300 hover:opacity-[0.5]"
                            >
                                Exam
                            </NavLink>
                            <NavLink
                                to={`/`}
                                className="font-bold text-MainColor text-[21px] duration-300 hover:opacity-[0.5]"
                            >
                                My result
                            </NavLink>
                            <NavLink
                                to={`/`}
                                className="font-bold text-MainColor text-[21px] duration-300 hover:opacity-[0.5]"
                            >
                                Contact
                            </NavLink>
                        </nav>
                    </div>
                    <Button content={"Login"} />
                </div>
            </div>
        </header>
    );
}
