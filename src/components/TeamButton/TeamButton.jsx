import styles from "../TeamButton/TeamButton.module.css";
import { useState } from "react";
import OurTeam from "../OurTeam/images/OurTeam";

const TeamButton = () => {
  const [modal, setModal] = useState();
  const toggleModal = () => setModal(!modal);
  return (
    <>
      <div className={styles.wrapperTeamButton} onClick={toggleModal}></div>
      {modal && <OurTeam toggle={toggleModal} />}
    </>
  );
};

export default TeamButton;
