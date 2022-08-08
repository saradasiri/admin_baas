import React, { useState } from "react";
import {MdOutlineDashboard}  from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { BsPeople } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";
import { IoIosArrowUp } from "react-icons/io";
import { createBrowserHistory } from "history";
import { Button, Row, Col, Container } from "bootstrap-4-react";
const history = createBrowserHistory();

const SideBar = ({ children }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItems = [
    {
      path: "/console/dashboard",
      name: "Dashboard",
      icon: <MdOutlineDashboard size={20} />,
    },
    {
      path: "/console/users",
      name: "Users",
      icon: <HiOutlineUsers size={20} />,
      contact: [
        {
          card: "Users",
          path1: "/console/users",
        },
        {
          card: "Add User",
          path1: "/console/addUser",
        },
      ],
    },
    {
      path: "/logged/profile",
      name: "Profile",
      icon: <CgProfile size={20} />,
    },
    {
      path: "/logged/kyc",
      name: "Kyc",
      icon: <BsPeople size={20} />,
    },
  ];
  const [isSubMenu, setIsSubMenu] = useState(false);

  const handleClick = () => {
    setIsSubMenu(!isSubMenu);
  };

  const handleCard = (cardPath) => {
    console.log(cardPath);
    navigate("/logged/card/jdb");
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={isOpen ? 2 : 1} sm={2}>
            <div style={{ width: isOpen ? "110%" : "40px" }} className="sidebar">
              <div className="top_section">
                <h1
                  style={{ display: isOpen ? "block" : "none" }}
                  className="logo"
                >
                  <Image
                    src={require("../assets/PaymentP.png")}
                    width={90}
                  />
                </h1>
                <div
                  style={{ marginLeft: isOpen ? "20px" : "0px" }}
                  className="bars"
                >
                  <FaBars
                    onClick={toggle}
                    style={{ cursor: "pointer" }}
                    size={25}
                  />
                </div>
              </div>
              {menuItems.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className="accordion link" id="accordionSidebar"  
                  activeclassname="active"
                >
                  <div className="icon">{item.icon}</div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    {item.name}
                  </div>
                  {item.contact ? (
                      <div style={{ display: isOpen ? "block" : "none"}}>
                        <IoIosArrowUp
                        size={40}
                        style={{paddingLeft:"25px"}}
                          onClick={() => handleClick(item.contact)}
                        />
                        {item.contact && (
                          <div
                            style={{
                              display: isSubMenu ? "block" : "none",                             
                          }}
                          className="submenu"
                          >
                            {item.contact.map((a, i) => (
                              <NavLink
                                to={a.path1}
                                key={i}
                                className="sub-options sidebar accordion"
                                style={{
                                  cursor: "pointer",
                                  padding: "12px",                                                                   
                                }}
                              >
                                {a.card}
                                <br />
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : null}                 
                </NavLink>
              ))}
            </div>
          </Col>

          <Col lg={isOpen ? 10 : 11} sm={10} style={{ right: 0 }}>
            <main className="container-fluid">{children}</main>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SideBar;
