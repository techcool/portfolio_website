import React from "react";

export default function PerksBenefit({benefits}) {
  return (
    <>
      <ul>
        {
            benefits.map((data,indx)=> <li key={indx}>{data.list}</li>)
        }
        
      </ul>
    </>
  );
}
