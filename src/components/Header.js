import React from "react";
const Header = ({toggleMode}) => {
    return(
        <div className="header">
            <h1>Notes</h1>
            <button onClick={()=>toggleMode((previousDarkMode)=> !previousDarkMode)} className="save">Toggle theme</button>
        </div>
    )
}
export default Header