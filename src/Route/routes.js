import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Views/Home/home";
import Bio from "../Views/Bio/bio";
import Chat from "../Views/Chat/chat";
import CreateAccount from "../Views/Createaccount/createaccount";
import Login from "../Views/Login/login";
import NearBy from "../Views/Nearby/nearby";
import Pricing from "../Views/Price&Plan/pricing";
import Profile from "../Views/Profile/profile";
import Terms from "../Views/Terms/terms";
import PageNotFound from "../Views/Default/default";

const Allpages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="bio" element={<Bio />} />
        <Route path="chat" element={<Chat />} />
        <Route path="account" element={<CreateAccount />} />
        <Route path="login" element={<Login />} />
        <Route path="nearby" element={<NearBy />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="profile" element={<Profile />} />
        <Route path="terms" element={<Terms />} />
        <Route element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Allpages;
