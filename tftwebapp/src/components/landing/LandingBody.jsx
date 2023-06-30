import React from "react";
import '../../styles/components/landing/LandingBody.css';
import rengarImage from '../../assets/images/icons/rengar.png'
import yasuoImage from '../../assets/images/icons/yasuo.png'
import ezrealImage from '../../assets/images/icons/ezreal.png'


function LandingBody() {

    return (
        <body>
            <div className="frame1">
                <img className="rengarImage" src={rengarImage} alt="Rengar" />
                <div className="frame1-text">
                    <span className="inter-bold-h1-white">
                    </span>
                    <span className="inter-bold-h2-white">
                    </span>
                </div>
            </div>
            <div className="frame2">
                <div>
                    <span className="frame2-text inter-bold-h1-white">
                    </span>
                </div>
                <img className="yasuoImage" src={yasuoImage} alt="Yasuo" />
            </div>
            <div className="frame3">
                <img className="ezrealImage" src={ezrealImage} alt="Ezreal" />  
                <div>
                    <span className="frame3-text inter-bold-h1-white">
                    </span>
                </div>
            </div>
        </body>
    )
}

export default LandingBody;