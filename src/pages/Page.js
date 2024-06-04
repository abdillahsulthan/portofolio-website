import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Work from "../components/Work/Work";
import Project from "../components/Project/Project";

export default function Page() {
    return (
        <div>
            <Header />
            <Work />
            <Project />
            <Footer />
        </div>
    );
}  