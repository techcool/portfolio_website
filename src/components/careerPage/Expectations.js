import React from "react";

export default function Expectations({expectations}) {
  return (
    <>
      <ul>
        {
            expectations.map((data,indx)=><li key={indx}>{data.item}</li>)
        }
       
      </ul>
    </>
  );
}
