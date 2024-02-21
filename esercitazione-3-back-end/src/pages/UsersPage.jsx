import React from "react";
import MyUsers from "../components/MyUsers";
import MyNavbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";

export default function UsersPage() {

    return (
        <>
            <MyNavbar />
            <MyUsers />
            <MyFooter />
        </>
    )
}