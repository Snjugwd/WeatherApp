import React from "react";
import {useState} from "react";

export const Text =()=>{
    const [Text,setText]=useState("")
    return (
        <div> <input onChange={(event)=>{setText(event.target.value);}}/>

        <h1> {Text}</h1>
        </div>
    )
}