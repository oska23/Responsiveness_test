import "./Depth 2, Frame 0.css";

const Navbar = ({
  overview,
  reservations,
  groups,
  walkIns,
  checkOut,
  housekeeping,
}) => {
  return (
    <header className="depth-2-frame-0">
      <div className="depth-6-frame-0-wrapper">
        <div className="depth-6-frame-0">
          <img className="groups-icon" alt="" />
          <img className="vector-frame-icon" loading="lazy" alt="" />
          <div className="depth-8-frame-0" />
        </div>
      </div>
      <div className="frame-label">
        <b className="staygreen">StayGreen</b>
      </div>
      <div className="depth-3-frame-1">
        <nav className="depth-4-frame-0">
          <div className="depth-5-frame-0">
            <div className="depth-6-frame-01">
              <div className="overview">{overview}</div>
            </div>
          </div>
          <div className="depth-5-frame-1">
            <div className="depth-6-frame-02">
              <div className="reservations">{reservations}</div>
            </div>
          </div>
          <div className="depth-5-frame-2">
            <div className="depth-6-frame-03">
              <div className="groups">{groups}</div>
            </div>
          </div>
          <div className="depth-5-frame-3">
            <div className="depth-6-frame-04">
              <div className="walk-ins">{walkIns}</div>
            </div>
          </div>
          <div className="depth-5-frame-4">
            <div className="depth-6-frame-05">
              <div className="check-out">{checkOut}</div>
            </div>
          </div>
          <div className="depth-5-frame-5">
            <div className="depth-6-frame-06">
              <div className="housekeeping">{housekeeping}</div>
            </div>
          </div>
        </nav>
        <div className="depth-4-frame-1">
          <div className="depth-5-frame-01">
            <div className="depth-6-frame-07">
              <div className="depth-7-frame-0">
                <img
                  className="lorem-ipsum-dolo"
                  alt=""
                  src="/vector--0-1.svg"
                />
                <div className="depth-8-frame-01" />
              </div>
            </div>
          </div>
          <div className="depth-5-frame-11">
            <div className="depth-6-frame-08">
              <div className="depth-7-frame-01">
                <img className="image-icon" alt="" src="/vector--0-2.svg" />
                <div className="depth-8-frame-02" />
              </div>
            </div>
          </div>
        </div>
        <img
          className="depth-4-frame-21"
          loading="lazy"
          alt=""
          src="/depth-4-frame-2@2x.png"
        />
      </div>
    </header>
  );
};

export default Navbar;
