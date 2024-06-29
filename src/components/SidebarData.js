import React from "react";
import * as Fa6Icons from "react-icons/fa6";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Document",
    path: "/documents",
    icon: <AiIcons.AiFillProject />,
    cName: "nav-text",
  },
  {
    title: "People",
    path: "/people",
    icon: <BsIcons.BsFillPeopleFill />,
    cName: "nav-text",
  }
];