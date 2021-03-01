import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";

import api from "./apiService";

const FB_APP_ID = process.env.REACT_APP_FB_APP_ID;
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function App() {
  const [user, setUser] = useState({
    email: " ",
    password: " ",
  });
  const oauthLogin = async (u, authProvider) => {
    console.log("user", u);
    const access_token = u.accessToken;
    const url = `/auth/login/${authProvider}`;
    const res = await api.post(url, { access_token, u });
    const newUser = res.data.user;
    if (newUser) {
      newUser.authenticated = true;
      newUser.provider = authProvider;
      setUser(newUser);
    }
  };

  return (
    <div className="App">
      <FacebookLogin
        appId={FB_APP_ID}
        icon="fa-facebook"
        fields="name,email,picture"
        callback={(u) => oauthLogin(u, "facebook")}
        onFailure={() => console.log("Facebook Login Failure")}
      />
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={(u) => oauthLogin(u, "google")}
        onFailure={() => console.log("Google Login Failure")}
      />
    </div>
  );
}

export default App;
