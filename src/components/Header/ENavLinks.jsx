import { useState } from "react";
// import { SiLinksys } from "react-icons/si";
import { Link } from "react-router-dom";
import navlinks from "./Links";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useTheme } from "@mui/material";



const ENavLinks = () => {
  const theme = useTheme()
    
  
const [heading, setHeading] = useState('');
const [subHeading, setSubHeading] = useState('');

    return (
      <>
        {navlinks.map((link, index) => (
          <div>
            <div key={index} className="  group ">
            <h1 className="cursor-pointer hover:text-[#195630] group text-[0.9rem] md:text-[0.9rem] font-bold
            flex items-center justify-between md:justify-center pr-3 md:pr-0 "
            onClick={()=>heading !== link.name ? setHeading(link.name) : setHeading('')}
            > {link.name}
            <span className="inline md:hidden"
            >{heading !== link.name ? <IoIosArrowDown/> : <IoIosArrowUp/>}</span>
            <span className="inline hidden md:inline group-hover:rotate-180"
            > <IoIosArrowDown/> </span>
            </h1>
            {link.submenu && link.sublinks && (
              <div>
                <div className="hidden group-hover:md:block hover:block  absolute top-14 transition-all duration-[2000ms]">
                {/* <div className="">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-gray-300 rotate-45"
                    ></div>
                  </div> */}
                  <div className=" bg-white p-10  grid grid-cols-3 gap-10 " >
                    {link.sublinks.map((mysublinks, index) => (
                      <div className="">
                          <h1 key={index} className="text-[1rem] md:text-[1.1rem] font-semibold"> 
                              {mysublinks.head}
                              </h1>
                          {mysublinks.sublink.map((slinks)=>(
                              <li className="text-[0.9rem] md:text-[1rem] hover:text-blue-500">
                                  <Link to={slinks.route}>{slinks.name}</Link>
                              </li>
                          ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* =================================MOBILE SCREEN=========================================== */}
            {link.sublinks &&(
                <div className={`${heading === link.name ? 'md:hidden' : 'hidden'}
                px-5 py-2 
                `}>
                {link.sublinks.map((slinks, index)=>(
                   <div>
                     <div key={index} className="py-2">
                    <h1 onClick={()=>subHeading !== slinks.head ? setSubHeading(slinks.head) : setSubHeading('')}
                       className="font-semibold text-[1rem] flex items-center justify-between md:justify-center pr-3 md:pr-0"
                       >{slinks.head}
                       <span>{subHeading !== slinks.head ? <IoIosArrowDown/> : <IoIosArrowUp/>}</span>
                       </h1> 
                    <div className={`${subHeading === slinks.head ? 'md:hidden' :'hidden'}
                    px-5 py-3
                    `} >
                    {slinks.sublink.map((slinks)=>(
                        <li className="font-semibold text-[0.9rem] text-gray-800 py-2">
                            <Link to={slinks.route}>{slinks.name}</Link> 
                        </li>
                    ))}
                    </div>
                    </div>
                   </div>
                ))}
            </div>
            
            )}
          </div>
        ))}
      </>
    );
  };
  
  export default ENavLinks;