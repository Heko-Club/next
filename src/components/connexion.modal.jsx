"use client";
import { useState, useContext } from "react";
import { login, register } from "@/services/auth.service";
import { isValidPassword } from "@/utils/password.util";
import { AuthContext } from "@/context/AuthContext";
import styles from "@/style/connexion.modal.module.scss";

const Connexion = () => {
  const [isNSFW, setIsNSFW] = useState(false); // Default is SFW
  const { token, saveToken, removeToken, userInfo } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [policyAccepted, setPolicyAccepted] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState([]);
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  const videoSrc = isMobile ? '/1504sansmusique.mp4' : '/landing.mp4';
  console.log(videoSrc)
  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setErrors([]);
    const { email, password, firstName, lastName, civility } =
      event.target.elements;
    if (isLogin) {
      // Handle login
      try {
        const response = await login(email.value, password.value);
        saveToken(response);

        console.log(response);
        // redirect to /compte page
        window.location.href = "/compte";
      } catch (error) {
        setErrorMessage(
          "Login failed. Please check your credentials and try again."
        ); // set error message on login failure
      }
    } else {
      // Handle registration
      if (policyAccepted) {
        // Validate phone number
        const { valid, errors } = isValidPassword(password.value);
        if (valid) {
          // Register new user
          try {
            const user = {
              userName: email.value,
              firstName: firstName.value,
              lastName: lastName.value,
              email: email.value,
            };
            const response = await register(user, password.value);

            setErrorMessage(
              "L'inscription est un succès. Vous allez être redirigé vers la page de connexion."
            );
            // wait 3 seconds before switching to login
            setTimeout(() => {
              setIsLogin(true);
              setErrorMessage("");
            }, 3000);
          } catch (error) {
            setErrorMessage(
              "L'inscription a échoué, veuillez vérifier vos informations et réessayer."
            ); // set error message on registration failure
          }
        } else {
          if (!isValidPhoneNumber(phone))
            setErrorMessage("Veuillez entrez un numéro de téléphone valide."); // set error message for invalid phone number
          if (!valid) setErrors(errors); // set error message for invalid password
        }
      } else {
        setErrorMessage("Please accept the privacy policy before signing up."); // set error message for unaccepted policy
      }
    }
  };
  return (
    <div class={styles.connexion}>
      <h1>modal</h1>
      <div className={styles.container}>
        <div className={styles.connexion}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="logo" />
          </div>
          <div className={styles.signInSignUp}>
            <div
              className={`${styles.toggleButton} ${
                isLogin ? styles.loginActive : styles.registerActive
              }`}
              onClick={handleToggle}
            >
              {" "}
            </div>
            <form onSubmit={handleSubmit}>
              {errorMessage && (
                <div className={styles.error}>{errorMessage}</div>
              )}{" "}
              {/* display error message when it's not empty */}
              {errors.map((error, index) => (
                <p key={index} style={{ marginBottom: "20px" }}>
                  {error}
                </p>
              ))}
              {!isLogin && (
                <>
                  <label>
                    Nom
                    <input
                      name="lastName"
                      type="text"
                      required
                      placeholder="Écrivez votre nom"
                    />
                  </label>
                </>
              )}
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Écrivez votre e-mail"
                />
              </label>
              <label>
                Mot de passe
                <input
                  name="password"
                  type="password"
                  required
                  placeholder="Écrivez votre mot de passe"
                />
              </label>
              {isLogin && (
                <a href="/forgottenpassword" className={styles.forgot}>
                  Mot de passe oubliée?
                </a>
              )}
              <button type="submit">
                {isLogin ? "Se connecter" : "S'inscire"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
