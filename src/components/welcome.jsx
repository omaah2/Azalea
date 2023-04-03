import "../css/main.css"
import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Welcome() {
return (
<>
<div className="maincontainer">
     <h2>Welcome</h2>
            <div className="inputcontainer">
                <input type="email" name="email" placeholder="email" required />
                <input type="password" name="password" placeholder="password" minLength="8" required />
            </div>
</div>
</>
);
}



