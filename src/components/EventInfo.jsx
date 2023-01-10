import React from "react";
import { MdEventAvailable } from "react-icons/md";
import { BiTimeFive, BiLinkExternal } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";
import { mockEvents } from "../database/mockData";
import { VscRepo } from "react-icons/vsc";

const EventInfo = ({ color }) => {
  return (
    <div className="event-info" style={{ border: `1px solid ${color}` }}>
      <div className="event-rest-info">
        <div className="event-group">
          <p className="event-group__icon">
            <VscRepo style={{ color: color }} />
          </p>
          <p className="event-group__content">repos</p>
        </div>
        <div className="event-group">
          <p className="event-group__icon">
            <MdEventAvailable style={{ color: color }} />
          </p>
          <p className="event-group__content">pushEvent</p>
        </div>
        <div className="event-group">
          <p className="event-group__icon">
            <BiTimeFive style={{ color: color }} />
          </p>
          <p className="event-group__content">6 days ago</p>
        </div>
        <div className="event-group">
          <p className="event-group__icon">
            <RiAccountCircleLine style={{ color: color }} />
          </p>
          <p className="event-group__content">meiti-021</p>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
