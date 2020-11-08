import React from "react";
import { createPopper } from '@popperjs/core';

const MenuDessertsDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <div className="flex flex-wrap">

        <div className="sm:hidden md:w-4/12 w-full px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className="text-white font-bold uppercase text-sm px-12 py-12 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 bg-red-500 active:bg-red-600 ease-linear transition-all duration-150"
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
               <i className="fas fa-heart"></i> 
              desserts
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "bg-red-500 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-2"
              }
            >
              <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white"
                onClick={e => e.preventDefault()}
              >
                Action
              </a>
              <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white"
                onClick={e => e.preventDefault()}
              >
                Another action
              </a>
              <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white"
                onClick={e => e.preventDefault()}
              >
                Something
              </a>
              
            
            </div>
          </div>
        
          
        </div>
      </div>
    </>
  );
};

export default MenuDessertsDropdown;