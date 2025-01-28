import { genRandomNum,sum } from "./helper.js";
import { useState } from "react";
import Ticket from "./Ticket";

export default function Lottery({n=3, winCondition}){
    let [ticket,setTicket]= useState(genRandomNum(n));
    let isWinning = winCondition(ticket);
    let buyTicket= ()=>{
        setTicket(genRandomNum(n));
    }
    return(
        <div>
            <h1>Lottery Game!</h1>
            <br />
            <p>If your ticket number's sum is 15 then you won :)</p>
            <Ticket ticket = {ticket}/>
            <button onClick = {buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulation,you won The Lottery :)"}</h3>
        </div>
    )
}
