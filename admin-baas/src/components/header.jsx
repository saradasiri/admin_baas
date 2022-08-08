import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import { Form } from "bootstrap-4-react";
import "./header.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import API_PATHS from "../constants/apiPaths";
import axios from "axios";
import Select from "react-select";
import { Dropdown } from "bootstrap-4-react";
import SignOut from "../signOut";

const Header = ({ title }) => {
  const pic =
    "https://previews.123rf.com/images/apoev/apoev1904/apoev190400012/124108711-person-gray-photo-placeholder-woman-in-costume-on-white-background.jpg?fj=1";
  const [name, setName] = useState();
  const [profilePic, setProfilePic] = useState();
  const [selectedValue, setSelectedValue] = useState();
  const options = [{ value: "signOut", label: "Sign Out" }];

  const customStyles = {
    control: () => {
      return <IoIosArrowDown size={20} />;
    },
  };

  useEffect(() => {
    const email = localStorage.getItem("userEmail");

    axios
      .get(`https://backend.paymentplanet.co/users/get_userDetails/${email}`)
      .then((res) => {
        console.log(res.data);
        const picture = res.data.profile_pic ? atob(res.data.profile_pic) : pic;
        setProfilePic(picture);
        setName(res.data.first_name);
      });
  }, []);

  return (
    <Container fluid style={{ paddingTop: "5px" }}>
      <Card
        body
        style={{
          backgroundColor: "#fff",
          flexDirection: "row",
          width: "100%",
          margin: 0,
        }}
      >
        <Row>
          <Col lg={5} sm={6}>
            <h1
              style={{
                fontWeight: "600",
                fontSize: "34px",
                lineHeight: "51px",
                fontFamily: "poppins",
              }}
            >
              {title}
            </h1>
          </Col>
          <Col lg={7} sm={6} style={{ float: "right" }}>
            <ul
              style={{
                flexDirection: "row",
                display: "flex",
                listStyle: "none",
                float: "right",
              }}
            >
              <li style={{ paddingRight: "15px", paddingTop: "5px" }}>
                <Form.Input
                  placeholder="Search"
                  style={{
                    width: "70%",
                    border: "1px solid border",
                    float: "right",
                  }}
                />
              </li>

              <li style={{ paddingRight: "15px", paddingTop: "10px" }}>
                <Dropdown>
                  <Dropdown.Button id="dropdownMenuButton">
                    {name || localStorage.getItem("userName")}
                  </Dropdown.Button>
                  <Dropdown.Menu aria-labelledby="dropdownMenuButton">
                    <Dropdown.Item active>
                      <SignOut />
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Header;
