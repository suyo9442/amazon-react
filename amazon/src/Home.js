import React from "react";
import './Home.css';
import Product from './Product';

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
            
            <div className="prod_area">
                <div className="prod_row">
                    <Product 
                    title="CRUNCHY CORN : BLUE"
                    price={5000}
                    image="./pd01.png"
                    rating={4}
                    />
                </div>
                <div className="prod_row">
                    <Product 
                    title="CRUNCHY CORN : PURPLE"
                    price={5000}
                    image="./pd02.png"
                    rating={3}
                    />
                </div>
                <div className="prod_row">
                    <Product 
                    title="CRUNCHY CORN : PINK"
                    price={5000}
                    image="./pd03.png"
                    rating={4}
                    />
                </div>
                <div className="prod_row">
                <Product 
                    title="EDAMAME : SEA SALT"
                    price={8000}
                    image="./pd04.png"
                    rating={2}
                    />
                </div>
                <div className="prod_row">
                <Product 
                    title="MIGHTY LIL' LENTILS"
                    price={7000}
                    image="./pd05.png"
                    rating={3}
                    />
                </div>
                <div className="prod_row">
                    <Product 
                    title="CRUNCHY CORN : BLUE"
                    price={5000}
                    image="./pd01.png"
                    rating={4}
                    />
                </div>
                <div className="prod_row">
                    <Product 
                    title="CRUNCHY CORN : PURPLE"
                    price={5000}
                    image="./pd02.png"
                    rating={3}
                    />
                </div>
                <div className="prod_row">
                    <Product 
                    title="CRUNCHY CORN : PINK"
                    price={5000}
                    image="./pd03.png"
                    rating={4}
                    />
                </div>
                <div className="prod_row">
                <Product 
                    title="EDAMAME : SEA SALT"
                    price={8000}
                    image="./pd04.png"
                    rating={2}
                    />
                </div>
                <div className="prod_row">
                <Product 
                    title="MIGHTY LIL' LENTILS"
                    price={7000}
                    image="./pd05.png"
                    rating={3}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;