import React from "react";

const Header = () => {
  const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';
  
  return (
    <div className="heading">
        <img src={logo} alt="logo" style={{width: 30, marginLeft: '20px'}} />
        <p className='title-head'>Keep Notes</p>
    </div>
  )
}

export default Header;