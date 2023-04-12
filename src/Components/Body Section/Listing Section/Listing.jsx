import React from "react";
import "./listing.css" 
import "./listing.scss"
import {BsArrowRightShort} from "react-icons/bs"
import {AiFillHeart} from "react-icons/ai"


import img from "../../../Assets/laptop_PNG101764.png"
import img2 from "../../../Assets/c6e780205bc1ef67533e1727443c37c8.jpg"


const Listing = ()  =>  {
    return(
        <div className="listingSection">
            <div className="heading flex">
                <h1>My Listings</h1>
                <button className="btn flex">
                    Sell All <BsArrowRightShort className="icon"/>
                </button>
            </div>

            <div className="secContainer flex">
                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={img} alt="Image Name" />
                    <h3>Lorem, ipsum.</h3>
                </div>
                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={img} alt="Image Name" />
                    <h3>Lorem, ipsum.</h3>
                </div>
                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={img} alt="Image Name" />
                    <h3>Lorem, ipsum.</h3>
                </div>
                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={img} alt="Image Name" />
                    <h3>Lorem, ipsum.</h3>
                </div>
            </div>
            
            <div className="sellers fllex">
                <div className="topSellers">
                    <div className="heading flex">
                        <h3>Lorem, ipsum.</h3>
                        <button className="btn flex">
                             Sell All <BsArrowRightShort className="icon"/>
                       </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={img2} alt="User Image" />
                            <img src={img2} alt="User Image" />
                            <img src={img2} alt="User Image" />
                            <img src={img2} alt="User Image" />
                        </div>
                        <div className="cardText">
                            <span>
                                18.585 Lorem, ipsum. <br />
                                <small>
                                    21 lorem <span className="date">7 Days</span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>    
                
            </div>
        </div>
    )
}
export default Listing
