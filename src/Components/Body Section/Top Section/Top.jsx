import React from "react";
import "./top.scss" 
import "./top.css"
import {BiSearchAlt} from "react-icons/bi"
import {TbMessageCircle} from "react-icons/tb"
import {IoMdNotificationsOutline} from "react-icons/io"
import {BsArrowRightShort} from "react-icons/bs"



import img from "../../../Assets/unnamed.jpg"
import video from "../../../Assets/skyscrapers-91744.mp4"
import img2 from "../../../Assets/laptop_PNG101764.png"
const Top = ()  =>  {
    return(
        <div className="topSection">
            <div className="headerSection flex">
                <div className="title">
                    <h1>Welcome to Tecno.</h1>
                    <p>Hello IsraTech, Welcome back!</p>
                </div>

                <div className="searchBar flex">
                    <input type="text" placeholder="Search Dashboard" className="input"/>
                    <BiSearchAlt className="icon"/>
                </div>

                <div className="adminDiv flex">
                    <TbMessageCircle className="icon"/>
                    <IoMdNotificationsOutline className="icon"/>
                    <div className="adminImage">
                        <img src={img} alt="Admin Image" />
                    </div>
                </div>
            </div>

            <div className="cardSection flex">

                <div className="rightCard flex">
                    <h1>Create and sell extraordinary products</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ex?</p>


                    <div className="buttons flex">
                        <button className="btn">Explore More</button>
                        <button className="btn transparent">Top Sellers</button>
                    </div>

                    <div className="videoDiv">
                        <video src={video} autoPlay loop muted></video>
                    </div>
                </div>

                <div className="leftCard flex">
                    <div className="main flex">
                        <div className="textDiv">
                            <h1>My Stat</h1>

                            <div className="flex">
                                <span>Today <br /> <small> 4 orders</small></span>
                                <span>This Month <br /> <small> 127 orders</small></span>
                                
                            </div>

                            <span className="flex link">
                                Go to my orders  <BsArrowRightShort className="icon"/>
                            </span>
                        
                        </div>

                        <div className="imgDiv">
                            <img src={img2} alt="Image Name" />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default Top