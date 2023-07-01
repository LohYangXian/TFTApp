import React from "react";
import RankStatsTable from "./RankStatsTable";
import '../../styles/components/profile/ProfileBody.css';

function ProfileBody() {

    return (
        <div className="profileBody">
            <div className="profileDetails">
                <RankStatsTable></RankStatsTable>
            </div>
            <div className="vertical-line"></div>
            <div className="frame1">
                {/* Team Comp Table */}
                {/* For Loop create Components */}
                {/* ChampionsWinrate Component */}
                {/* TraitsWinrate Component */}
                {/* ItemsWinrate Component */}
                {/* Match History Table */}
                {/* Match Component */}
                <div className="frame1-text">
                    PlaceHolder 2
                </div>
            </div>
            
        </div>
    )
}

export default ProfileBody;