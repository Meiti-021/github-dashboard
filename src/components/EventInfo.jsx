import React, { useEffect } from "react";
import { MdEventAvailable } from "react-icons/md";
import { BiTimeFive, BiLinkExternal } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";
import { VscRepo } from "react-icons/vsc";
import { useGlobalContext } from "../contexts/Contexts";
import moment from "moment/moment";

const EventInfo = ({ color }) => {
  const { eventIndex, event, userData } = useGlobalContext();
  useEffect(() => {
    console.log(userData);
  }, []);
  return (
    <div
      className="event-info"
      style={{ border: `1px solid ${color}`, color: color }}
    >
      <div className="event-rest-info">
        <div className="event-group">
          <p className="event-group__icon">
            <VscRepo style={{ color: color }} />
          </p>
          <p className="event-group__content">
            <a
              href={`https://github.com/${event[eventIndex].repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {event[eventIndex].repo.name.slice(
                userData.login.length + 1,
                event[eventIndex].repo.name.length
              )}
            </a>
          </p>
        </div>
        <div className="event-group">
          <p className="event-group__icon">
            <MdEventAvailable style={{ color: color }} />
          </p>
          <p className="event-group__content">{event[eventIndex].type}</p>
        </div>
        <div className="event-group">
          <p className="event-group__icon">
            <BiTimeFive style={{ color: color }} />
          </p>
          <p className="event-group__content">
            {moment(
              event[eventIndex].created_at.slice(0, 10),
              "YYYY-MM-DD"
            ).fromNow()}
          </p>
        </div>
        <div className="event-group">
          <p className="event-group__icon">
            <RiAccountCircleLine style={{ color: color }} />
          </p>
          <p className="event-group__content">
            {event[eventIndex].actor.login}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
