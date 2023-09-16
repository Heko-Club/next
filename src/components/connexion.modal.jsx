"use client";
import Image from "next/image";
import pp from "@/../assets/examples/moi.png";
import React, { useState, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import  styles  from "@/style/connexion.modal.module.scss"
const Connexion = () => {
  const [isNSFW, setIsNSFW] = useState(false); // Default is SFW
  const { token, saveToken, removeToken, userInfo } = useContext(AuthContext);

  return (
    <div class={styles.connexion}>
		test
		<h1>test</h1>
	</div>
  );
};

export default Connexion;
