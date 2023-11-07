import React from "react";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdIcons.MdSpaceDashboard />,
    cName: "nav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <BsIcons.BsPieChartFill />,
    cName: "nav-text",
  },
  {
    title: "Simulation",
    path: "/simulation",
    icon: <BsIcons.BsTools />,
    cName: "nav-text",
  },
];
