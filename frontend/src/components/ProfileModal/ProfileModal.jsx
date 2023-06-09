import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ProfileModal.module.css";
import Button from "../shared/Button/Button";
import { setAuth } from "../../store/authSlice";
import { resetStep } from "../../store/multiStepFormSlice";
import { resetUserReg } from "../../store/userRegistrationSlice";
import { resetActiveRoute } from "../../store/navbarSlice";
import { resetUser } from "../../store/userSlice";
import { globalContext } from "../../context/globalContext";
import { logout } from "../../api";

function ProfileModal({ closeModalHandler }) {
  const { clearContext } = useContext(globalContext);

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const signOutHandler = async () => {
    const response = await logout();
    dispatch(setAuth(response.data.auth));
    dispatch(resetStep());
    dispatch(resetActiveRoute());
    dispatch(resetUserReg());
    dispatch(resetUser());

    clearContext();

    closeModalHandler();
  };

  const [hover, setHover] = useState(false);

  return (
    <div className={styles.modalMask}>
      <div className={styles.modalBody}>
        <button
          onClick={closeModalHandler}
          className={styles.closeButton}
          type="button"
        >
          <img src="/images/close.png" alt="close" />
        </button>
        <div className={styles.modalContent}>
          <img className={styles.avatar} src={user.avatar} alt="avatar" />
          <h3 className={styles.name}>{user.name}</h3>
          {/* <h5 className={styles.username}>@{user.username}</h5> */}
          {/* <div className={styles.memberSince}>
            You&apos;ve been a part of our community since:
            {` ${
              user.memberSince.split(' ')[0] === '1'
                ? user.memberSince.slice(0, -1)
                : user.memberSince
            } ❤️‍🔥`}
          </div> */}
          <div className={styles.signOutButton}>
            <Button
              buttontitle="Sign Out"
              onClick={signOutHandler}
              buttonimage="sign_out"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{ backgroundColor: hover ? "#a60938" : "#de1b55" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
