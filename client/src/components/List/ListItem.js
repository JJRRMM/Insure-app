import React from "react";

export const ListItem = props => {
  //alert(props.children)
  return(
     <li className="list-group-item">
    {props.children}
  </li>
  )
 
};
