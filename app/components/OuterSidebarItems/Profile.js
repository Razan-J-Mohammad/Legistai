import styles from './OuterSideBarItems.module.css'
import InnerProfileContainer from "@/app/components/InnerProfileContainer/InnerProfileContainer";
import React from "react";

export  default function  Profile(){
    return (
        <div className={styles.items}>
            <h3>Profile</h3>
            <p>Manage your details and personal preference here</p>
            <InnerProfileContainer />
        </div>

    )
}