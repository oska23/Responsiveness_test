import Navbar from "../components/Navbar";
import CustomFrame from "../components/CustomFrame";
import "./GalileoDesign.css";

const GalileoDesign = () => {
  return (
    <div className="galileo-design">
      <main className="depth-0-frame-0">
        <Navbar
          overview="Overview"
          reservations="Reservations"
          groups="Groups"
          walkIns="Walk-ins"
          checkOut="Check-out"
          housekeeping="Housekeeping"
        />
        <CustomFrame />
        <div className="depth-4-frame-2" />
      </main>
    </div>
  );
};

export default GalileoDesign;
