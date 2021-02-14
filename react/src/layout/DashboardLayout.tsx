import React from "react";
import Header from "../component/Header";
import Menu from "../component/Menu";

export default function DashboardLayout(props: any) {
    debugger;
    const { component } = props;
    return (
        <div>
            <Header />
            <Menu />
            <div className='content'>
                {component()}
            </div>
        </div>
    );
}
