import "../css/main.css"
import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Welcome() {
return (
<>
<div className="maincontainer">
     <h2>Welcome</h2>
            <div className="inputcontainer">
              <input type="email" id="email" name="email" pattern=".+@name\.com" size="30" required />
              <input type="password" id="pass" name="password" minlength="8" required></input>
            </div>
</div>
</>
);
}



