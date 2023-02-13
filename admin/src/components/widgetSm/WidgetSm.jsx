import "./widgetSm.css";
import React, {useState, useEffect} from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from "axios"
export default function WidgetSm() {

  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDAzNDFmYmQ4MmNmODg0NDI2MjVmOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NjI3OTgzMSwiZXhwIjoxNjc2Nzk4MjMxfQ.BOudCKuwb3-HjDDKUYPlfR58o_FAExkrdLOsfpv0OTo",
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);
	console.log(newUsers);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Members</span>
      <ul className="widgetSmList">
      {newUsers.map((user) => (
        <li className="widgetSmListItem">
          <img
            src={
              user.profilePic ||
              "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
            }
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}