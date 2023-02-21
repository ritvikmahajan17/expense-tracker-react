import React, { useState } from "react";

export const History = ({transaction}) => {

    

    return (
        <div>
            {transaction.map(item=>{
                return (
                    <p>{item.name} : {item.amount}</p>
                )
            })}
        </div>
    )
}