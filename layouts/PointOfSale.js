import React from "react";

// components
import PoSNavbar from "components/Navbars/PoSNavbar.js";
import SidebarPoS from "components/Sidebar/SidebarPoS.js";
import HeaderPoS from "components/Headers/HeaderPoS.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

export default function PointOfSale({ children }) {
  return (
    <>
      <SidebarPoS />
      <div className="relative md:ml-64 bg-gray-200">
        <PoSNavbar />
        {/* Header */}
        <HeaderPoS />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
