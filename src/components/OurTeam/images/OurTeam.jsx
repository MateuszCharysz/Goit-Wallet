import teammates from "./data";
import s from "./OurTeam.module.css";

const OurTeam = ({ toggle }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.close} onClick={toggle}></div>

        {teammates.map((teammate, idx) => (
          <figure key={idx} className={s.member}>
            <img
              src={teammate.photo}
              alt={teammate.fullName}
              className={s.profile}
            />
            <figcaption>
              <h3>
                {teammate.fullName}
                <span>{teammate.position}</span>
              </h3>
              <div className={s.icons}>
                <a href={teammate.linkedIn}>
                  <i className="ion-social-linkedin-outline"></i>
                </a>
                <a href={teammate.gitHub}>
                  <i className="ion-social-github-outline"></i>
                </a>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
