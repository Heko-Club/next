"use client";
import styles from "@/style/header.module.scss";
import Image from "next/image";
import pp from "@/../assets/examples/moi.png";
import React, { useState } from "react";
import SignInButton from "./SignInButton";

const Header = () => {
  const [isNSFW, setIsNSFW] = useState(false); // Default is SFW
  return (
    <header className={styles.headerContainer}>
      <div className={styles.desktopHeader}>
        <nav className={styles.leftNavbar} aria-label="Primary Navigation">
          {/* First block */}
          <div className={styles.logoBlock}>
            <span className={styles.logoText}>Heko</span>{" "}
            {/* Assuming 'Heko' is just text and not an actual image logo */}
          </div>

          {/* Second block */}
          <div className={styles.iconBlock}>
            <span className={`${styles.homeIcon} ${styles.selected}`}>
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18H9"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M21.6359 12.9579L21.3572 14.8952C20.8697 18.2827 20.626 19.9764 19.451 20.9882C18.2759 22 16.5526 22 13.1061 22H10.8939C7.44737 22 5.72409 22 4.54903 20.9882C3.37396 19.9764 3.13025 18.2827 2.64284 14.8952L2.36407 12.9579C1.98463 10.3208 1.79491 9.00229 2.33537 7.87495C2.87583 6.7476 4.02619 6.06234 6.32691 4.69181L7.71175 3.86687C9.80104 2.62229 10.8457 2 12 2C13.1543 2 14.199 2.62229 16.2882 3.86687L17.6731 4.69181C19.9738 6.06234 21.1242 6.7476 21.6646 7.87495"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            <span className={styles.messageIcon}>
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                id="_24x24_On_Light_Messages-Alert"
                data-name="24x24/On Light/Messages-Alert"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect id="view-box" width="24" height="24" fill="none" />
                <path
                  id="Shape"
                  d="M10.751,19.5a9.66,9.66,0,0,1-4.266-.981,9.889,9.889,0,0,1-4.876.981c-.279,0-.578-.006-.887-.018a.74.74,0,0,1-.65-.432.738.738,0,0,1,.085-.775,11.191,11.191,0,0,0,2.072-3.787A9.754,9.754,0,0,1,12.682.192a5.478,5.478,0,0,0-.676,1.4A8.252,8.252,0,0,0,3.668,13.983a.75.75,0,0,1,.092.535A10.189,10.189,0,0,1,2.2,17.99a7.2,7.2,0,0,0,3.816-.947.746.746,0,0,1,.431-.136A.755.755,0,0,1,6.808,17a8.254,8.254,0,0,0,12.1-8.5,5.477,5.477,0,0,0,1.4-.676A9.755,9.755,0,0,1,10.751,19.5Zm3-7h-7a.75.75,0,0,1,0-1.5h7a.75.75,0,0,1,0,1.5Zm-2-4h-5a.75.75,0,1,1,0-1.5h5a.75.75,0,0,1,0,1.5Zm6.612-1.931h0a8.34,8.34,0,0,0-4.43-4.43,3.527,3.527,0,0,1,.781-1.3,9.773,9.773,0,0,1,4.946,4.946,3.527,3.527,0,0,1-1.3.781Z"
                  transform="translate(1.249 2.25)"
                />
                <path
                  id="Shape-2"
                  data-name="Shape"
                  d="M3.5,7A3.5,3.5,0,1,1,7,3.5,3.5,3.5,0,0,1,3.5,7Z"
                  transform="translate(15 2)"
                />
              </svg>
            </span>
          </div>

          <div className={styles.spacer}></div>

          {/* Third block */}
          <div className={styles.notificationBlock}>
            <span className={styles.notificationIcon}>
              <svg
                fill="#000000"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                id="notification-circle"
                data-name="Line Color"
                xmlns="http://www.w3.org/2000/svg"
                class="icon line-color"
              >
                <path
                  id="secondary"
                  d="M15,18H9a3,3,0,0,0,3,3h0A3,3,0,0,0,15,18Z"
                ></path>
                <path
                  id="primary"
                  d="M18,9v4l1.38,1.38A2.12,2.12,0,0,1,17.88,18H6.12a2.12,2.12,0,0,1-1.5-3.62L6,13V9a6,6,0,0,1,6-6,6,6,0,0,1,2.88.73"
                ></path>
                <path
                  id="secondary-2"
                  data-name="secondary"
                  d="M14,6a3,3,0,0,0,3,3h0a3,3,0,0,0,3-3h0a3,3,0,0,0-3-3h0a3,3,0,0,0-3,3Z"
                  style={{ fill: "red" }}
                ></path>
              </svg>
            </span>
            <div className={styles.profileBlock}>
              <Image src={pp} alt="Profile" className={styles.profileImage} />
              <span className={styles.walletAddress}></span>
            </div>
          </div>
        </nav>

        <nav className={styles.topNavbar} aria-label="Secondary Navigation">
          {/* Top navbar content goes here */}

          <div
            className={`${styles.rightTopNavbar} ${
              isNSFW ? styles.switchOnRight : ""
            }`}
            onClick={() => setIsNSFW(!isNSFW)}
          >
            <button
              className={isNSFW ? styles.switchActive : styles.switchButton}
            >
              Safe
            </button>
            <button
              className={!isNSFW ? styles.switchActive : styles.switchButton}
            >
              NSFW
            </button>
          </div>
          <div className={styles.leftTopNavbar}>
            <div
              type="text"
              placeholder="Search..."
              className={styles.searchBar}
            >
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18ZM11 6C10.3434 6 9.69321 6.12933 9.08658 6.3806C8.47995 6.63188 7.92876 7.00017 7.46447 7.46447C7.00017 7.92876 6.63188 8.47996 6.3806 9.08658C6.12933 9.69321 6 10.3434 6 11C6 11.5523 6.44772 12 7 12C7.55228 12 8 11.5523 8 11C8 10.606 8.0776 10.2159 8.22836 9.85195C8.37913 9.48797 8.6001 9.15726 8.87868 8.87868C9.15726 8.6001 9.48797 8.37913 9.85195 8.22836C10.2159 8.0776 10.606 8 11 8C11.5523 8 12 7.55228 12 7C12 6.44772 11.5523 6 11 6Z"
                  fill="#A3A3A3"
                />
                <path
                  d="M20 20L18 18"
                  stroke="#A3A3A3"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <input type="Search Creators..." placeholder="Search Users..." />
            </div>
            <button className={styles.plusButton}>
              <div>
                +
              </div>
              <div>
                Become Creator
              </div>
            </button>
            <SignInButton/>
          </div>
        </nav>
      </div>

      <nav className={styles.mobileNavbar} aria-label="Mobile Navigation">
        {/* Mobile navbar content goes here */}
      </nav>
    </header>
  );
};

export default Header;
