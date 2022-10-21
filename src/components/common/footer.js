import React from "react";
import {BackTop} from "antd";

function AppFooter(){
    return(
        <div className="container-fluid">
            <div className="footer">
                <div className="logo">
                    <i className="fas fa-bolt"></i>
                    <a href="#">Tech</a>
                </div>
                <ul className="socials">
                    <li>
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    </li>
                    <li>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    </li>
                    <li>
                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                    </li>
                    <li>
                    <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
                    </li>
                    <li>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    </li>
                </ul>
                <div className="copyright">Copyright &copy; 2020 Tech</div>
                <BackTop>
                    <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
                </BackTop>
            </div>
        </div>
    )
}

export default AppFooter;