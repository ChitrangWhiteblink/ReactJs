import React, {useState, useEffect} from 'react';


export default function First(props) {
   
    useEffect(() => {
       console.log("This is Use Effect Hook loads as long as component did mounts");
     }, []);

    return (
        <div>
            <h1>
            Functional Component 
          This is Prps = {props.name}
            </h1>
          <br/>
          <h2>
          children prop
          <br />
          {props.children}
          </h2>
        </div>
    )
}
