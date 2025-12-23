import React from "react"
import FetchData from "./components/FetchData";
import Navbar from "./components/Navbar";
import ProfilePage from "./components/Profile";

export default function Home() {
  return (
   <div >
    <Navbar/>

    <ProfilePage/>
    <FetchData/>
   </div>
  );
}
