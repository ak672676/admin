import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconConatiner">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconConatiner">
            <span className="topIconBadge">2</span>
            <Language />
          </div>
          <div className="topbarIconConatiner">
            <Settings />
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnELq88FqJJ3fRj93adsIGYvhO-TiVlgimVQ&usqp=CAU" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
