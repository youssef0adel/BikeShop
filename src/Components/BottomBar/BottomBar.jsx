import "../BottomBar/BottomBar.css";
import { NavLink } from "react-router-dom";

const BottomBar = () => {
  return (
    <div className="BottomBar position-fixed fixed-bottom rounded-top-5 overflow-hidden">
      <div className="inner bg-second text-center py-2">
        <div className="d-flex justify-content-around align-items-center p-1">
          
          
          <div className="item text-white">
            <NavLink 
              to="/home" 
              className={({ isActive }) => 
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <i className="fa-solid fa-house d-block mb-1"></i>
              Home
            </NavLink>
          </div>

          
          <div className="item text-white">
            <NavLink 
              to="/shop" 
              className={({ isActive }) => 
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <i className="fa-solid fa-bicycle d-block mb-1"></i>
              Shop
            </NavLink>
          </div>

          
          <div className="item text-white">
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <i className="fa-solid fa-network-wired d-block mb-1"></i>
              Services
            </NavLink>
          </div>

          
          <div className="item text-white">
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <i className="fa-solid fa-envelope d-block mb-1"></i>
              Contact
            </NavLink>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BottomBar;
