import React from "react";
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="fullGap"></div>
            <div className="flexArea">
                <div className="home_desc">
                    <img className="home_desc_el" src="./flower.png" />
                    <p className="home_descTxt">
                        <span className="home_descTxt_lineOne">
                            discover <br />
                            new <br />
                            tastes <br />
                        </span>
                        <span className="home_descTxt_lineTwo">
                            Original spice blends suitable for both <br />
                            home and professional cooking
                        </span>
                    </p>
                    <button type="button" className="home_descTxt_button">shop all products</button>
                </div>
                <div className="home_main">
                    <img className="home_mainImg" src="./mainimg.jpg" />
                </div>
            </div>
        </div>
    );
}

export default Home;