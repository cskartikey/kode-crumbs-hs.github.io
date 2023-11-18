import React from "react";
import { Icon } from "@iconify/react"

interface Props {
    children : React.ReactNode,
    open : boolean,
    onClose? : Function, // set the isOpen variable to false in this function
}

function Dialog({ children, open , onClose = () => {} } : Props) {

    return (
        <div className={`fixed w-full h-screen z-50  ${open ? "initial" : "hidden"} top-0 left-0 flex justify-center items-center overflow-hidden`}>
            <div className="w-full mx-4 h-[500px] max-w-[560px]  bg-kode-crumbs-black dark:bg-kode-crumbs-orange flex flex-col rounded-sm dark:text-kode-crumbs-black text-kode-crumbs-orange px-2">
                <div>
                    <button className="float-right py-2 text-kode-crumbs-orange dark:text-kode-crumbs-black" onClick={() => { onClose() }}>
                        <Icon icon={`ic:close`} fontSize={"28px"} />
                    </button>
                </div>
                {children}
            </div>
             {/* Overlay */}
            <div
            className={"opacity-25 fixed left-0 w-full h-screen bg-kode-crumbs-black dark:bg-kode-crumbs-orange -z-50 transition-all duration-300"}
            ></div>
        </div>
    )
}

export default Dialog;