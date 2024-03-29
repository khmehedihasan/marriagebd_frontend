import React from "react";
import { Routes, Route } from "react-router-dom";
import firstLoad from "./hooks/firstLoad";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Search from "./pages/Search";

import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Step2 from "./pages/signup/Step2";
import Step3 from "./pages/signup/Step3";
import Step4 from "./pages/signup/Step4";
import Step5 from "./pages/signup/Step5";
import Step6 from "./pages/signup/Step6";
import Step7 from "./pages/signup/Step7";
import Verify from "./pages/signup/Verify";
import Forgot from "./pages/login/Forgot";
import Verify2 from "./pages/login/Verify";

import NewPassword from "./pages/login/NewPassword";
import IsLogIn from "./pages/login/IsLogIn";
import IsLogOut from "./pages/login/IsLogOut";
import Profile from "./pages/Profile";
import LiveChat from "./pages/LiveChat";
import LiveChatD from "./pages/LiveChatD";
import Settings from "./pages/Settings";
import ChangePic from "./pages/ChangePic";
import VewProfile from "./pages/VewProfile";
import Package from "./pages/Package";
import Order from "./pages/Order";
import PaymentDetails from "./pages/PaymentDetails";
import IsPackage from "./pages/login/IsPackage";

import CStep2 from "./pages/change info/Step2";
import CStep3 from "./pages/change info/Step3";
import CStep4 from "./pages/change info/Step4";
import CStep5 from "./pages/change info/Step5";
import CStep6 from "./pages/change info/Step6";
import CStep7 from "./pages/change info/Step7";

function App() {
  firstLoad();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/search" element={<Search />} />

      <Route path="/login/forgotPassword" element={<Forgot />} />
      <Route path="/login/code/:id" element={<Verify2 />} />
      <Route path="/login/newPassword/:token/:id" element={<NewPassword />} />
      <Route path="/package" element={<Package />} />

      <Route path="/" element={<IsLogOut />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/step_2" element={<Step2 />} />
        <Route path="/signup/step_3" element={<Step3 />} />
        <Route path="/signup/step_4" element={<Step4 />} />
        <Route path="/signup/step_5" element={<Step5 />} />
        <Route path="/signup/step_6" element={<Step6 />} />
        <Route path="/signup/step_7" element={<Step7 />} />
        <Route path="/signup/verify/:id" element={<Verify />} />
      </Route>

      <Route path="/" element={<IsLogIn />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/order/:packag" element={<Order />} />
        <Route path="/" element={<IsPackage />}>
          <Route path="/liveChat" element={<LiveChatD />} />
          <Route path="/liveChat/:id" element={<LiveChat />} />
        </Route>
        <Route path="/settings" element={<Settings />} />

        <Route path="/info/step_2" element={<CStep2 />} />
        <Route path="/info/step_3" element={<CStep3 />} />
        <Route path="/info/step_4" element={<CStep4 />} />
        <Route path="/info/step_5" element={<CStep5 />} />
        <Route path="/info/step_6" element={<CStep6 />} />
        <Route path="/info/step_7" element={<CStep7 />} />

        <Route path="/changeProfilePicture" element={<ChangePic />} />
        <Route path="/paymentDetails" element={<PaymentDetails />} />
        <Route path="/vewProfile/:id" element={<VewProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
