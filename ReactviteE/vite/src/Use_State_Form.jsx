import React from "react";
import { useState } from "react";

const Use_State_Form =()=>{

    /*page sign in and signout usestate */

    const [signin , setSignIn] =useState(false)

    return(
        <div>
            <h1 className='bg-purple-500 text-center text-4xl font-bold text-white p-4'>React useState Form</h1>
            {
                signin ? (
                    <div>

                    </div>
                ):
                (
                    <div>

                    </div>
                )
            }
        </div>
    )
}

export default  Use_State_Form