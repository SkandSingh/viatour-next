function CalendarWidget() {
  return (
    <>
      <div className="container flex justify-center text-center py-40">
        <h2
          data-aos="fade-up"
          data-aos-delay=""
          className="text-30 aos-init aos-animate"
        >
          Begin Your Journey
        </h2>

        <div className="calGrid y-gap-20 pt-40 ">
          <div className="calGrid-item">
            <img src="/img/TravelCalImages/jan.jpg" />
            <p>January</p>
          </div>
          <div className="calGrid-item">
            <img src="/img/TravelCalImages/feb.jpg" />
            <p>February</p>
          </div>
          <div className="calGrid-item">
            <img src="/img/TravelCalImages/march.jpg" />
            <p>March</p>
          </div>
          <div className="calGrid-item">
            <img src="/img/TravelCalImages/april.jpg" />
            <p>April</p>
          </div>
          <div className="calGrid-item">
            <img src="/img/TravelCalImages/may.jpg" />
            <p>May</p>
          </div>
          <div className="calGrid-item">
            <img src="/img/TravelCalImages/june.jpg" />
            <p>June</p>
          </div>
          <div className="calGrid-item">
            <img src="/img/TravelCalImages/july.jpg" />
            <p>July</p>
          </div>
          <div className="calGrid-item">
            <img src="/img/TravelCalImages/aug.jpg" />
            <p>August</p>
          </div>
          <div className="calGrid-item">
            <img src="/img/TravelCalImages/sept.jpg" />
            <p>September</p>
          </div>
          <div className="calGrid-item">
            <img src="/img/TravelCalImages/oct.jpg" />
            <p>October</p>
          </div>
          <div className="calGrid-item">
            <img src="/img/TravelCalImages/nov.jpg" />
            <p>November</p>
          </div>
          <div className="calGrid-item">
            <img src="/img/TravelCalImages/dec.jpg" />
            <p>December</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CalendarWidget;
