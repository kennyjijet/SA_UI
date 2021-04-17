import React from "react";

export default function LOPA(props: any) {
    const { component } = props;
    return (
        <div style={{width: "100%"}}>
            <div style={{overflow: "hidden", margin: "0px auto", width: "600px", height:"100vh", background: "red"}}>
                <div style={{height: "20%", background: "gray"}}></div>
                <div style={{overflowX: "hidden", overflowY: "scroll", height: "70%", background: "green"}}>
                    <div style={{height: "1000px", background: "cyan"}}></div>
                </div>
                <div style={{height: "10%", background: "blue"}}></div>
            </div>
        </div>
    );
}
