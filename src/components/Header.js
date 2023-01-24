import React, {useState, useEffect} from "react";
import { useMediaQuery } from "react-responsive";

const Header = () => {

    const [toggle, setToggle] = useState(false);
    const style = {
      overflow: useMediaQuery({ maxWidth: 767 }) ? "hidden":"visible",
      height: useMediaQuery({ maxWidth: 767 }) && toggle ? 215: 0,
      transition: "0.5s"
    }

    
    return(
        <header className="relative py-[18px] px-[5%] after:block after:clear-both
        md:static md:px-[52px] md:py-[28px]">
        <h1 className="float-left">
          <a className="font-normal text-[26px] text-indigo-blue" href>INDIGO</a>
        </h1>
        <nav>
        <ul style={style} className="absolute top-full left-0 w-full bg-indigo-blue
        md:block md:static md:float-right md:w-auto md:mt-[3px] md:bg-transparent">
          <li className="py-[14px] pl-[5%] border-solid border-b-[1px] border-[#303f9f] md:float-left md:p-0  md:ml-[21px] md:border-b-0"><a className="text-[14px] block pt-0 text-white md:text-indigo-blue md:p-0 md:text-base"href>HOME</a></li>
          <li className="py-[14px] pl-[5%] border-solid border-b-[1px] border-[#303f9f] md:float-left md:p-0 md:ml-[21px] md:border-b-0"><a className="text-[14px] block pt-0 text-white md:text-indigo-blue md:p-0 md:text-base"href>WE ARE</a></li>
          <li className="py-[14px] pl-[5%] border-solid border-b-[1px] border-[#303f9f] md:float-left md:p-0 md:ml-[21px] md:border-b-0"><a className="text-[14px] block pt-0 text-white md:text-indigo-blue md:p-0 md:text-base"href>WORK</a></li>
          <li className="py-[14px] pl-[5%] border-solid border-b-[1px] border-[#303f9f] md:float-left md:p-0 md:ml-[21px] md:border-b-0"><a className="text-[14px] block pt-0 text-white md:text-indigo-blue md:p-0 md:text-base"href>BLOG</a></li>
          <li className="py-[14px] pl-[5%] border-solid border-b-[1px] border-[#303f9f] md:float-left md:p-0 md:ml-[21px] md:border-b-0"><a className="text-[14px] block pt-0 text-white md:text-indigo-blue md:p-0 md:text-base"href>CONTACT US</a></li>
        </ul>
        </nav>
        <span onClick={ () => setToggle(prev => !prev)} className="float-right w-[20px] my-[5px] cursor-pointer md:hidden">
            <span className="block w-full h-[2px] bg-indigo-blue"></span>
            <span className="block w-full h-[2px] bg-indigo-blue my-[5px]"></span>
            <span className="block w-full h-[2px] bg-indigo-blue"></span>
        </span>
      </header>
    );
};

export default Header;