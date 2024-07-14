import React from "react";
 
 const Card = ({title, id, column}) => {    
        return (
            <>
            <div>
                <p className="text-sm text-neutral-100">{title}</p>

            </div>
            </>
        )
    };

export default Card;