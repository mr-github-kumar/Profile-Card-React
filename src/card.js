import React from 'react';
import './card.css';

export default function card() {
    return (
        <div className="profile">
            <div className="profile-head"></div>
            <div className="profile-body">
                <div className="body-pic">
                    <div></div>
                </div>
                <div className="body-head">
                    <div className="head-title">
                        <span className="title-name">Popeye The Sailor</span>
                        <span className="title-age">88</span>
                    </div>
                    <div className="head-location">
                        Disney
                    </div>
                </div>
                <div className="body-bottom">
                    <div className="bottom-stats">
                        <span className="numbers">80K</span>
                        <span className="sub-titles">Followers</span>
                    </div>
                    <div className="bottom-stats">
                        <span className="numbers">803K</span>
                        <span className="sub-titles">Likes</span>
                    </div>
                    <div className="bottom-stats">
                        <span className="numbers">8.0K</span>
                        <span className="sub-titles">Photos</span>
                    </div>
                </div>
            </div>            
        </div>
    )
}
