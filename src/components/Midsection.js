import "./Midsection.css";

const Midsection = () => {
  return (
    <div className="frame-set-label">
      <div className="child-frames-stack">
        <div className="reservation-input">
          <div className="parent-depth-frame">
            <div className="depth-4-frame-01">
              <div className="depth-5-frame-02">
                <div className="depth-6-frame-09">
                  <h3 className="quick-actions">Quick Actions</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="depth-5-frame-03">
            <div className="depth-6-frame-010">
              <div className="depth-7-frame-02">
                <h1 className="reservations1">Reservations</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-with-children">
          <button className="depth-5-frame-12">
            <div className="depth-6-frame-011">
              <div className="depth-7-frame-03">
                <b className="new-reservation">New Reservation</b>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="check-in-out-group">
        <div className="room-queen-frames">
          <div className="parent-frame-with-depth">
            <div className="depth-5-frame-04">
              <img
                className="depth-6-frame-012"
                loading="lazy"
                alt=""
                src="/depth-6-frame-0@2x.png"
              />
              <div className="depth-6-frame-2">
                <div className="depth-7-frame-04">
                  <div className="depth-8-frame-03">
                    <div className="check-in">Check In</div>
                  </div>
                </div>
                <div className="depth-7-frame-1">
                  <div className="depth-8-frame-04">
                    <div className="room-305-queen">Room 305, Queen</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="depth-5-frame-05">
              <img
                className="depth-6-frame-013"
                alt=""
                src="/depth-6-frame-0-1@2x.png"
              />
              <div className="depth-6-frame-21">
                <div className="depth-7-frame-05">
                  <div className="depth-8-frame-05">
                    <div className="check-out1">Check Out</div>
                  </div>
                </div>
                <div className="depth-7-frame-11">
                  <div className="depth-8-frame-06">
                    <div className="room-305-queen1">Room 305, Queen</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="depth-5-frame-06">
              <img
                className="depth-6-frame-014"
                alt=""
                src="/depth-6-frame-0-2@2x.png"
              />
              <div className="depth-6-frame-22">
                <div className="depth-7-frame-06">
                  <div className="depth-8-frame-07">
                    <div className="extend-stay">Extend Stay</div>
                  </div>
                </div>
                <div className="depth-7-frame-12">
                  <div className="depth-8-frame-08">
                    <div className="room-305-queen2">Room 305, Queen</div>
                  </div>
                </div>
              </div>
            </div>
            <button className="depth-5-frame-07">
              <div className="depth-6-frame-015">
                <div className="depth-7-frame-07">
                  <div className="depth-8-frame-09">
                    <img
                      className="parent-frame-without-depth"
                      alt=""
                      src="/vector--0-3.svg"
                    />
                    <div className="depth-9-frame-0" />
                  </div>
                </div>
              </div>
              <div className="depth-6-frame-1">
                <div className="depth-7-frame-08">
                  <div className="add-charge">Add Charge</div>
                </div>
              </div>
            </button>
            <div className="depth-5-frame-08">
              <div className="depth-6-frame-016">
                <div className="depth-7-frame-09">
                  <div className="depth-8-frame-010">
                    <img className="vector-0" alt="" src="/vector--0-4.svg" />
                    <div className="depth-9-frame-01" />
                  </div>
                </div>
              </div>
              <div className="depth-6-frame-11">
                <div className="depth-7-frame-010">
                  <div className="send-sms">Send SMS</div>
                </div>
              </div>
            </div>
            <div className="depth-5-frame-09">
              <div className="depth-6-frame-017">
                <div className="depth-7-frame-011">
                  <div className="depth-8-frame-011">
                    <img className="vector-01" alt="" src="/vector--0-5.svg" />
                    <div className="depth-9-frame-02" />
                  </div>
                </div>
              </div>
              <div className="depth-6-frame-12">
                <div className="depth-7-frame-012">
                  <div className="send-email">Send Email</div>
                </div>
              </div>
            </div>
          </div>
          <div className="send-msg-btn">
            <div className="depth-4-frame-11">
              <div className="depth-5-frame-010">
                <div className="depth-6-frame-018">
                  <div className="depth-7-frame-013">
                    <img className="vector-02" alt="" src="/vector--0-6.svg" />
                    <div className="depth-8-frame-012" />
                  </div>
                </div>
                <input
                  className="depth-6-frame-13"
                  placeholder="Search Reservations"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Midsection;
