"use client";

import React, { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";

function Accordion() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section: any) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return  <>
      <div className="ml-[14px]    transition-all duration-1000 lg:ml-[50px]  mt-10">
        <h1 className="font-poppins   text-4xl tracking-tight font-semibold text-[#042638]   lg:text-4xl xl:text-4xl">
          Frequently Asked Questions
        </h1>
        <h1 className="font-poppins   text-lg tracking-tight  text-[#454545]   lg:text-xl xl:text-2xl">
          Are you Intrigued?
        </h1>
      </div>

<div className="flex justify-center flex-wrap gap-4  mt-14">
<div className="flex flex-col gap-8 ">
<div>
  <div 
   onClick={() => toggleSection("section1")}
   className={`w-[90vw] lg:w-[530px] flex items-center justify-between px-6 pt-5 rounded-xl border  cursor-pointer py-6 transition duration-1000 ease-in-out transform ${
     activeSection === "section1" ? "bg-[#042638] transition duration-900 ease-in-out transform " : "bg-[#fafafa] "
   }`}>
    <div className="flex items-center gap-4">
      <h1
        className={` ${
          activeSection === "section1"
            ? " text-white"
            : "text-[#454545]"
        } text-5xl font-poppins transition duration-1000`}
      >
        01
      </h1>
      <div
        className={`w-[1px]  ${
          activeSection === "section1" ? "bg-white" : "bg-[#454545]"
        }   h-10 rounded-xl  transition duration-1000`}
      ></div>
      <h1
        className={` ${
          activeSection === "section1" ? " text-white" : "#042638"
        } font-medium text-xs sm:text-xs md:text-sm lg:text-base font-poppins transition duration-1000`}
      >
Is Devsinc a GDPR-Compliant company?
     </h1>
    </div>

    <BiSolidDownArrow
      className={`fill-current h-4 w-4 text-${
        activeSection === "section1"
          ? " text-white"
          : " text-[#454545]"
      } ${
        activeSection === "section1" ? "transform rotate-180" : ""
      } transition-transform duration-100 ease-in-out`}
    />
  </div>
  <div
    className={`w-[90vw] lg:w-[550px]    text-sm font-poppins transition-max-height duration-300 ease-in-out overflow-hidden ${
      activeSection === "section1"
        ? "  transition duration-1000 px-4 py-4 border-l   border-[#042638d8] border-r"
        : "h-0 "
    }`}
  >
Yes, as per the privacy policy of Devsinc, it is ensured that Devsinc is a GDPR-compliant company abiding by all the laws and rules underlying it  </div>
</div>
<div>
  <div 
   onClick={() => toggleSection("section2")}
   className={`w-[90vw] lg:w-[550px] flex items-center justify-between px-6 pt-5 rounded-xl border  cursor-pointer py-6 transition duration-1000 ease-in-out transform ${
     activeSection === "section2" ? "bg-[#042638] transition duration-900 ease-in-out transform " : "bg-[#fafafa] "
   }`}>
    <div className="flex items-center gap-4">
      <h1
        className={` ${
          activeSection === "section2"
            ? " text-white"
            : "text-[#454545]"
        } text-5xl font-poppins transition duration-1000`}
      >
        02
      </h1>
      <div
        className={`w-[1px]  ${
          activeSection === "section2" ? "bg-white" : "bg-[#454545]"
        }   h-10 rounded-xl  transition duration-1000`}
      ></div>
      <h1
        className={` ${
          activeSection === "section2" ? " text-white" : "#042638"
        } font-medium text-xs sm:text-xs md:text-sm lg:text-base font-poppins transition duration-1000`}
      >
How is Devsinc's approach towards tackling challenging projects?              </h1>
    </div>

    <BiSolidDownArrow
      className={`fill-current h-4 w-4 text-${
        activeSection === "section2"
          ? " text-white"
          : " text-[#454545]"
      } ${
        activeSection === "section2" ? "transform rotate-180" : ""
      } transition-transform duration-100 ease-in-out`}
    />
  </div>
  <div
    className={`w-[90vw] lg:w-[550px]    text-sm font-poppins transition-max-height duration-300 ease-in-out overflow-hidden ${
      activeSection === "section2"
        ? "  transition duration-1000 px-4 py-4 border-l   border-[#042638d8] border-r"
        : "h-0 "
    }`}
  >
  Yes, we believe in fostering a bond of trust and reliability with our investors and we appreciate their contribution in our business by celebrating such events periodically.
  </div>
</div>

<div>
  <div 
   onClick={() => toggleSection("section3")}
   className={`w-[90vw] lg:w-[550px] flex items-center justify-between px-6 pt-5 rounded-xl border  cursor-pointer py-6 transition duration-1000 ease-in-out transform ${
     activeSection === "section3" ? "bg-[#042638] transition duration-900 ease-in-out transform " : "bg-[#fafafa] "
   }`}>
    <div className="flex items-center gap-4">
      <h1
        className={` ${
          activeSection === "section3"
            ? " text-white"
            : "text-[#454545]"
        } text-5xl font-poppins transition duration-1000`}
      >
        03
      </h1>
      <div
        className={`w-[1px]  ${
          activeSection === "section3" ? "bg-white" : "bg-[#454545]"
        }   h-10 rounded-xl  transition duration-1000`}
      ></div>
      <h1
        className={` ${
          activeSection === "section3" ? " text-white" : "#042638"
        } font-medium text-xs sm:text-xs md:text-sm lg:text-base font-poppins transition duration-1000`}
      >
How sooner can we get tech teams assigned to your project normally?
             </h1>
    </div>

    <BiSolidDownArrow
      className={`fill-current h-4 w-4 text-${
        activeSection === "section3"
          ? " text-white"
          : " text-[#454545]"
      } ${
        activeSection === "section3" ? "transform rotate-180" : ""
      } transition-transform duration-100 ease-in-out`}
    />
  </div>
  <div
    className={`w-[90vw] lg:w-[550px]    text-sm font-poppins transition-max-height duration-300 ease-in-out overflow-hidden ${
      activeSection === "section3"
        ? "  transition duration-1000 px-4 py-4 border-l   border-[#042638d8] border-r"
        : "h-0 "
    }`}
  >
  
  Devsinc offers either a team building plan where you can hire customized teams according to your business needs or a fixed bid plan with a particular cost estimation based on your project's requirements.  </div>
</div>

<div>
  <div 
   onClick={() => toggleSection("section4")}
   className={`w-[90vw] lg:w-[550px] flex items-center justify-between px-6 pt-5 rounded-xl border  cursor-pointer py-6 transition duration-1000 ease-in-out transform ${
     activeSection === "section4" ? "bg-[#042638] transition duration-900 ease-in-out transform " : "bg-[#fafafa] "
   }`}>
    <div className="flex items-center gap-4">
      <h1
        className={` ${
          activeSection === "section4"
            ? " text-white"
            : "text-[#454545]"
        } text-5xl font-poppins transition duration-1000`}
      >
        04
      </h1>
      <div
        className={`w-[1px]  ${
          activeSection === "section4" ? "bg-white" : "bg-[#454545]"
        }   h-10 rounded-xl  transition duration-1000`}
      ></div>
      <h1
        className={` ${
          activeSection === "section4" ? " text-white" : "#042638"
        } font-medium text-xs sm:text-xs md:text-sm lg:text-base font-poppins transition duration-1000`}
      >
What must be considered by a business while choosing an IT service provider company?
           </h1>
    </div>

    <BiSolidDownArrow
      className={`fill-current h-4 w-4 text-${
        activeSection === "section4"
          ? " text-white"
          : " text-[#454545]"
      } ${
        activeSection === "section4" ? "transform rotate-180" : ""
      } transition-transform duration-100 ease-in-out`}
    />
  </div>
  <div
    className={`w-[90vw] lg:w-[550px]    text-sm font-poppins transition-max-height duration-300 ease-in-out overflow-hidden ${
      activeSection === "section4"
        ? "  transition duration-1000 px-4 py-4 border-l   border-[#042638d8] border-r"
        : "h-0 "
    }`}
  >
  

  It is a continuous improvement process of strong partnership with the right IT service provider company, depending upon its adaptability to new technologies and working with tenacity for a purpose broader than usual tech-horizons.</div>


</div>
</div>
  <div className="flex flex-col gap-8 ">
<div>
  <div 
   onClick={() => toggleSection("section5")}
   className={`w-[90vw] lg:w-[550px] flex items-center justify-between px-6 pt-5 rounded-xl border  cursor-pointer py-6 transition duration-1000 ease-in-out transform ${
     activeSection === "section5" ? "bg-[#042638] transition duration-900 ease-in-out transform " : "bg-[#fafafa] "
   }`}>
    <div className="flex items-center gap-4">
      <h1
        className={` ${
          activeSection === "section5"
            ? " text-white"
            : "text-[#454545]"
        } text-5xl font-poppins transition duration-1000`}
      >
        05
      </h1>
      <div
        className={`w-[1px]  ${
          activeSection === "section5" ? "bg-white" : "bg-[#454545]"
        }   h-10 rounded-xl  transition duration-1000`}
      ></div>
      <h1
        className={` ${
          activeSection === "section5" ? " text-white" : "#042638"
        } font-medium text-xs sm:text-xs md:text-sm lg:text-base font-poppins transition duration-1000`}
      >
How important is transparency in communication at Devsinc?      </h1>
    </div>

    <BiSolidDownArrow
      className={`fill-current h-4 w-4 text-${
        activeSection === "section5"
          ? " text-white"
          : " text-[#454545]"
      } ${
        activeSection === "section5" ? "transform rotate-180" : ""
      } transition-transform duration-100 ease-in-out`}
    />
  </div>
  <div
    className={`w-[90vw] lg:w-[550px]    text-sm font-poppins transition-max-height duration-300 ease-in-out overflow-hidden ${
      activeSection === "section5"
        ? "  transition duration-1000 px-4 py-4 border-l   border-[#042638d8] border-r"
        : "h-0 "
    }`}
  >
Transparency is one of the main pillars of our values and we believe in delivering all the IT services with honest and dignified communication skills thus bridging the gaps between businesses.
  </div>
</div>
<div>
  <div 
   onClick={() => toggleSection("section6")}
   className={`w-[90vw] lg:w-[550px] flex items-center justify-between px-6 pt-5 rounded-xl border  cursor-pointer py-6 transition duration-1000 ease-in-out transform ${
     activeSection === "section6" ? "bg-[#042638] transition duration-900 ease-in-out transform " : "bg-[#fafafa] "
   }`}>
    <div className="flex items-center gap-4">
      <h1
        className={` ${
          activeSection === "section6"
            ? " text-white"
            : "text-[#454545]"
        } text-5xl font-poppins transition duration-1000`}
      >
        06
      </h1>
      <div
        className={`w-[1px]  ${
          activeSection === "section6" ? "bg-white" : "bg-[#454545]"
        }   h-10 rounded-xl  transition duration-1000`}
      ></div>
      <h1
        className={` ${
          activeSection === "section6" ? " text-white" : "#042638"
        } font-medium text-xs sm:text-xs md:text-sm lg:text-base font-poppins transition duration-1000`}
      >
How is Devsinc's approach towards tackling challenging projects?              </h1>
    </div>

    <BiSolidDownArrow
      className={`fill-current h-4 w-4 text-${
        activeSection === "section6"
          ? " text-white"
          : " text-[#454545]"
      } ${
        activeSection === "section6" ? "transform rotate-180" : ""
      } transition-transform duration-100 ease-in-out`}
    />
  </div>
  <div
    className={`w-[90vw] lg:w-[550px]    text-sm font-poppins transition-max-height duration-300 ease-in-out overflow-hidden ${
      activeSection === "section6"
        ? "  transition duration-1000 px-4 py-4 border-l   border-[#042638d8] border-r"
        : "h-0 "
    }`}
  >
  Yes, we believe in fostering a bond of trust and reliability with our investors and we appreciate their contribution in our business by celebrating such events periodically.
  </div>
</div>

<div>
  <div 
   onClick={() => toggleSection("section7")}
   className={`w-[90vw] lg:w-[550px] flex items-center justify-between px-6 pt-5 rounded-xl border  cursor-pointer py-6 transition duration-1000 ease-in-out transform ${
     activeSection === "section7" ? "bg-[#042638] transition duration-900 ease-in-out transform " : "bg-[#fafafa] "
   }`}>
    <div className="flex items-center gap-4">
      <h1
        className={` ${
          activeSection === "section7"
            ? " text-white"
            : "text-[#454545]"
        } text-5xl font-poppins transition duration-1000`}
      >
        07
      </h1>
      <div
        className={`w-[1px]  ${
          activeSection === "section7" ? "bg-white" : "bg-[#454545]"
        }   h-10 rounded-xl  transition duration-1000`}
      ></div>
      <h1
        className={` ${
          activeSection === "section7" ? " text-white" : "#042638"
        } font-medium text-xs sm:text-xs md:text-sm lg:text-base font-poppins transition duration-1000`}
      >
What types of plans are available by Devsinc?              </h1>
    </div>

    <BiSolidDownArrow
      className={`fill-current h-4 w-4 text-${
        activeSection === "section7"
          ? " text-white"
          : " text-[#454545]"
      } ${
        activeSection === "section7" ? "transform rotate-180" : ""
      } transition-transform duration-100 ease-in-out`}
    />
  </div>
  <div
    className={`w-[90vw] lg:w-[550px]    text-sm font-poppins transition-max-height duration-300 ease-in-out overflow-hidden ${
      activeSection === "section7"
        ? "  transition duration-1000 px-4 py-4 border-l   border-[#042638d8] border-r"
        : "h-0 "
    }`}
  >
  
  Devsinc offers either a team building plan where you can hire customized teams according to your business needs or a fixed bid plan with a particular cost estimation based on your project's requirements.  </div>
</div>

<div>
  <div 
   onClick={() => toggleSection("section8")}
   className={`w-[90vw] lg:w-[550px] flex items-center justify-between px-6 pt-5 rounded-xl border  cursor-pointer py-6 transition duration-1000 ease-in-out transform ${
     activeSection === "section8" ? "bg-[#042638] transition duration-900 ease-in-out transform " : "bg-[#fafafa] "
   }`}>
    <div className="flex items-center gap-4">
      <h1
        className={` ${
          activeSection === "section8"
            ? " text-white"
            : "text-[#454545]"
        } text-5xl font-poppins transition duration-1000`}
      >
        08
      </h1>
      <div
        className={`w-[1px]  ${
          activeSection === "section8" ? "bg-white" : "bg-[#454545]"
        }   h-10 rounded-xl  transition duration-1000`}
      ></div>
      <h1
        className={` ${
          activeSection === "section8" ? " text-white" : "#042638"
        } font-medium text-xs sm:text-xs md:text-sm lg:text-base font-poppins transition duration-1000`}
      >
Why should you Prefer Devsinc as Software Development Company?             </h1>
    </div>

    <BiSolidDownArrow
      className={`fill-current h-4 w-4 text-${
        activeSection === "section8"
          ? " text-white"
          : " text-[#454545]"
      } ${
        activeSection === "section8" ? "transform rotate-180" : ""
      } transition-transform duration-100 ease-in-out`}
    />
  </div>
  <div
    className={`w-[90vw] lg:w-[550px]    text-sm font-poppins transition-max-height duration-300 ease-in-out overflow-hidden ${
      activeSection === "section8"
        ? "  transition duration-1000 px-4 py-4 border-l   border-[#042638d8] border-r"
        : "h-0 "
    }`}
  >
  

  With over 15 years of expertise in IT services, Devsinc marks its significance in various industries of Edtech, Healthcare, and Fintech etc. by catering to the flexible requirements of various successful projects, with the best possible solutions and deliverables.</div>


</div>
</div>

</div>
    </>
  
}
export default Accordion;
