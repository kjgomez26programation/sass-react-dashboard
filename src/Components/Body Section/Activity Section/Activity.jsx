import React from "react";
import "./activity.css" 
import "./activity.scss"
import img from "../../../Assets/c6e780205bc1ef67533e1727443c37c8.jpg"
import {BsArrowRightShort} from "react-icons/bs"

const Activity = ()  =>  {
    return(
        <div className="activitySection">
            <div className="heading flex">
                <h1>Reset Activity</h1>
                <button className="btn flex">Lorem,
                        <BsArrowRightShort className="icon" />
                </button>
            </div>

            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={img} alt="Custom Img" />
                    <div className="customerDetails">
                        <span className="name">Lorem, ipsum.</span>
                        <small>Lorem ipsum dolor sit.</small>
                    </div>

                    
                    <div className="duration">
                        Lorem, ipsum dolor.
                    </div>

                </div>
                <div className="singleCustomer flex">
                    <img src={img} alt="Custom Img" />
                    <div className="customerDetails">
                        <span className="name">Lorem, ipsum.</span>
                        <small>Lorem ipsum dolor sit.</small>
                    </div>

                    
                    <div className="duration">
                        Lorem, ipsum dolor.
                    </div>

                </div>
                <div className="singleCustomer flex">
                    <img src={img} alt="Custom Img" />
                    <div className="customerDetails">
                        <span className="name">Lorem, ipsum.</span>
                        <small>Lorem ipsum dolor sit.</small>
                    </div>

                    
                    <div className="duration">
                        Lorem, ipsum dolor.
                    </div>

                </div>
                <div className="singleCustomer flex">
                    <img src={img} alt="Custom Img" />
                    <div className="customerDetails">
                        <span className="name">Lorem, ipsum.</span>
                        <small>Lorem ipsum dolor sit.</small>
                    </div>

                    
                    <div className="duration">
                        Lorem, ipsum dolor.
                    </div>

                </div>
                <div className="singleCustomer flex">
                    <img src={img} alt="Custom Img" />
                    <div className="customerDetails">
                        <span className="name">Lorem, ipsum.</span>
                        <small>Lorem ipsum dolor sit.</small>
                    </div>

                    
                    <div className="duration">
                        Lorem, ipsum dolor.
                    </div>

                </div>
                 
                
                
            </div>
        </div>
    )
}
export default Activity
