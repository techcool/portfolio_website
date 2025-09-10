import React from "react";

export default function Requirements({requirement}) {
  return (
    <>
      <ul>
        {
            requirement.map((data,indx)=> <li key={indx}>{data.item}</li>)
        }
        
      </ul>
    </>
  );
}
