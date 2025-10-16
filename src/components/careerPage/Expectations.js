import React from "react";

export default function Expectations({expectations}) {
  return (
    <>
      <ul>
        {
            expectations.map((data,indx)=><React.Fragment key={indx}><li key={indx}>{data.item}</li></React.Fragment>)
        }
       
      </ul>
    </>
  );
}
