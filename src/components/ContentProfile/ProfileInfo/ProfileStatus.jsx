import { useState, useEffect, useLayoutEffect } from "react";
import s from "./ProfileInfo.module.css";
// import Preloader from "../../common/Preloader/Preloader";

const ProfileStatus = (props) => {
  //! props -> status, updateStatus
  const [changeStatus, setChangeStatus] = useState(false);
  const [title, setTitle] = useState(props.status);

  const onChangeStatus = () => {
    setChangeStatus(true);
  };

  const offChangeStatus = () => {
    props.updateStatus(title);
    setChangeStatus(false);
  };

  useEffect(() => {
    setTitle(props.status);
  }, [props.status]);

  // useLayoutEffect(() => {});

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

class One {
  constructor() {}

}

const Two = new One();
One.prototype.name = "Hello"
console.log(Two);
console.log(Two.__proto__ === One.prototype);

