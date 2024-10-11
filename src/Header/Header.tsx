import React from "react";
import styles from "../Header/Header.module.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import icon from "../Header/0HsQyg-LogoMakr.png";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className={styles.main}>
      <Link to="/">
        <img
          alt="shop-logo"
          src={icon}
          style={{
            alignSelf: "flex-start",
            height: "70px",
            marginLeft: "100px",
          }}
        />
      </Link>
      <Link to="/cartList">
        <ShoppingCartOutlined
          style={{
            color: "#1877F2",
            fontSize: "40px",
            marginRight: "120px",
            marginTop: "15px",
          }}
        />
      </Link>
    </header>
  );
};
