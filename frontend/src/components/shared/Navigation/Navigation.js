import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Navigation.module.css";
import ProfileModal from "../../ProfileModal/ProfileModal";
import { setActiveRoute } from "../../../store/navbarSlice";
import { resetUserReg } from "../../../store/userRegistrationSlice";
import { resetStep } from "../../../store/multiStepFormSlice";

function Navigation() {
  const logoStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
  };

  const navElementStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
  };

  const logoText = {
    marginLeft: "10px",
  };

  const navElementText = {
    marginLeft: "5px",
  };

  const active = useSelector((state) => state.navbar.activeRoute);

  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);

  const showModalHandler = () => {
    setModal(true);
  };

  const closeModalHandler = () => {
    setModal(false);
  };

  const { isAuth } = useSelector((state) => state.auth);

  const user = useSelector((state) => state.user);

  const activeRouteHandler = (route) => {
    dispatch(setActiveRoute(route));
  };

  const activeRouteStyle = "3px solid #f7f7f7";

  const navBarClickHandler = (newActive) => {
    activeRouteHandler(newActive);
  };

  return (
    <>
      <nav className={`${styles.navbar} container`}>
        <Link
          style={logoStyle}
          to="/"
          onClick={() => {
            dispatch(resetUserReg());
            dispatch(resetStep());
            navBarClickHandler("home");
          }}
        >
          <span style={logoText}>Digital Stories</span>
        </Link>

        {isAuth && (
          <Link
            style={navElementStyle}
            to="/home"
            onClick={() => navBarClickHandler("home")}
          >
            <span
              style={{
                ...navElementText,
                borderBottom: active === "home" ? activeRouteStyle : "",
              }}
            >
              Home
            </span>
          </Link>
        )}

        {isAuth && (
          <Link
            style={navElementStyle}
            to="/trending"
            onClick={() => navBarClickHandler("trending")}
          >
            <span
              style={{
                ...navElementText,
                borderBottom: active === "trending" ? activeRouteStyle : "",
              }}
            >
              Trending
            </span>
          </Link>
        )}

        {isAuth && (
          <Link
            style={navElementStyle}
            to="/leaderboard"
            onClick={() => navBarClickHandler("leaderboard")}
          >
            <span
              style={{
                ...navElementText,
                borderBottom: active === "leaderboard" ? activeRouteStyle : "",
              }}
            >
              Leaderboard
            </span>
          </Link>
        )}

        {isAuth && (
          <Link
            style={navElementStyle}
            to="/engagements"
            onClick={() => navBarClickHandler("engagements")}
          >
            <span
              style={{
                ...navElementText,
                borderBottom: active === "engagements" ? activeRouteStyle : "",
              }}
            >
              Engagements
            </span>
          </Link>
        )}

        {isAuth && (
          <Link
            style={navElementStyle}
            to="/my-stories"
            onClick={() => navBarClickHandler("me")}
          >
            <span
              style={{
                ...navElementText,
                borderBottom: active === "me" ? activeRouteStyle : "",
              }}
            >
              My Stories
            </span>
          </Link>
        )}

        {isAuth && (
          <div className={styles.navRight}>
            <button
              className={styles.avatarWrapper}
              onClick={showModalHandler}
              type="button"
            >
              <img className={styles.avatar} src={user.avatar} alt="avatar" />
            </button>
          </div>
        )}
      </nav>
      {modal && <ProfileModal closeModalHandler={closeModalHandler} />}
    </>
  );
}

export default Navigation;
