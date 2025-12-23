import React from "react";

async function FetchData() {

    // SSR – Server Side Rendering
//     Har request par server se fresh data
// Page har baar re-render hota hai

//   const res = await fetch("http://localhost:3000/api/user", {
//     cache: "no-store",
//   });
//   const data = await res.json();
//   console.log(data);

// SSG – Static Site Generation
// Build time pe ek hi baar fetch
// HTML file generate ho jaati hai
// Sab users ko same data

// const res = await fetch("http://localhost:3000/api/user", {
    // cache: "force-cache",
//   });
//   const data = await res.json();
//   console.log(data);


// ISR – Incremental Static Regeneration
// Static page jaisa fast
// Background me auto update
// Rebuild without full deploy

// const res = await fetch("http://localhost:3000/api/user", {
//    next:{revalidate:5}
//   });
//   const data = await res.json();
//   console.log(data);

  return <div>
  </div>
}

export default FetchData;
