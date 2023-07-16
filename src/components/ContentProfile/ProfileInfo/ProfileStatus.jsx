import { useState, useEffect } from "react";
import s from "./ProfileInfo.module.css";
// import Preloader from "../../common/Preloader/Preloader";

const ProfileStatus = (props) => {
  const [changeStatus, setChangeStatus] = useState(false);
  const [title, setTitle] = useState(props.status);

  const onChangeStatus = () => {
    setChangeStatus(true);
  };

  const offChangeStatus = () => {
    props.updateStatus(props.status);
    setChangeStatus(false);
  };

  useEffect(() => {
    setTitle(props.status);
  }, [props.status]);

  const onChangeSetTitle = (event) => setTitle(event.currentTarget.value);

  return changeStatus ? (
    <div>
      <input
        onBlur={offChangeStatus}
        autoFocus={true}
        value={title}
        onChange={onChangeSetTitle}
      />
    </div>
  ) : (
    <div>
      <span onDoubleClick={onChangeStatus}>{title || "no status"}</span>
    </div>
  );
};

export default ProfileStatus;
