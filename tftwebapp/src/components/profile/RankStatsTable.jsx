import React from "react";
import '../../styles/components/profile/RankStatsTable.css';
import PlatinumRankIcon from '../../assets/images/ranks/TFT_Regalia_Platinum.png';

function RankStatsTable() {
    //TODO: Change to retrieve actual game data from Summoner
    const stats = [
        { label: 'Games', value: 20 },
        { label: 'Wins', value: 1, percentage: 5 },
        { label: 'Top 4', value: 8, percentage: 40 },
        { label: 'Avg. Place', value: 5.1, percentage: 35},
      ];

    return (
        <div className="rankStatsTable">
            <div className="rankAndName">
                {/* TODO: Change to use retrieved Summoner Rank */}
                <img className="rankIcon" src={PlatinumRankIcon} alt="Platinum Rank Icon"></img>
                <div className="nameAndRegion">
                    {/* TODO: Change to use retrieved Summoner Name */}
                    <span className="summonerName inter-bold-h2-white"> LAWLSOEVER </span>
                    {/* TODO: Change to use retrieved Summoner Region */}
                    <span className="region">SEA</span>
                </div>

                {/* TODO: Change to use retrieved Summoner Rank */}
                <span className="rank">Ranked: Platinum V</span>
            </div>
            <div className="profile-stats">
            <table className="profile-stats-table">
                <tbody>
                    {stats.map((stat, index) => (
                    <tr key={index} className="stat-row">
                        <th className="inter-bold-h3-white">{stat.label}</th>
                        <td>
                        {stat.percentage && (
                            <div className="progress-bar">
                            <div className="progress" style={{ width: `${stat.percentage}%` }}></div>
                            </div>
                        )}
                        </td>
                        {/* <td className="stat-value inter-bold-h3-white">{stat.value}</td> */}
                        <td>
                        {/* If theres no percentage */}
                        {!stat.percentage && (
                            <div className="stat-value inter-bold-h3-white">
                                {stat.value}
                            </div>
                        )}
                        {/* If there is a percentage */}
                        {stat.percentage && (
                            <div className="stat-percentage inter-bold-h3-white">
                            {stat.value} ({stat.percentage}%)
                            </div>
                        )}
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default RankStatsTable;