import React from "react";
import TopBar from "../components/shared/Topbar";
import LeftSidebar from "../components/shared/LeftSidebar";
import { Outlet } from "react-router-dom";
import Bottombar from "../components/shared/Bottombar";

function RootLayout() {
    return(
        <div className="w-full md:flex">
            <TopBar />
            <LeftSidebar />
            <section className="flex flex-1 h-full">
                <Outlet />
            </section>
            <Bottombar />
        </div>
    );
}

export default RootLayout;