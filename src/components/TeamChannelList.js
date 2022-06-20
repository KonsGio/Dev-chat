import React from "react";

import { AddChannel } from "../assets";
// first prop in every single react component is children
const TeamChannelList = ({children, error = false, loading, type}) => {
  if(error){
    return type == 'team' ? (
        <div className="team-channel-list">
            <p className="team-channel-list__message">
                Connection error please wait a moment and try again.
            </p>
        </div>
    ):null
  }
  if(loading) {
    return (
        <div className="team-channel-list">
            <p className="team-channel-list__message loading">
                {type == 'team' ? 'channels' : 'Messages'} loading...
            </p>
        </div>
    )
  }
    return (
        <div className="team-channel-list">
            <div className="team-channel-list__header">
                <p className="team-channel-list__header__tittle">
                  {type == 'team' ? 'channels' : 'Direct Messages'}
                </p>
                {/* button to add channel */}
            </div>
            {children}
        </div>
    )
}

export default TeamChannelList
