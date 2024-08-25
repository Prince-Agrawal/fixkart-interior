import React from "react";

const BookNow = () => {
  return (
    <>
      <div className="container">
        <div className="bookNow my-5">
          <div className="row align-items-center">
            <div className="col-md-6 ps-5">
              <div className="heading-main">
                <span className="badge rounded-pill text-bg-warning">
                    Book Now
                </span>
                <h2 className="mb-3">Better Consult, Better Results</h2>
                <p>Our software development agency has a growth up to 30% per each year. If you are result-oriented, not afraid to take initiative – drop us a note and join our team!</p>
                <button className="btn btn-primary p-2 pe-3 d-flex align-items-center mt-4"><img src="images/call.svg" alt="Call Booking" /> +91 7737966778</button>
              </div>
            </div>
            <div className="col-md-6">
                <img src="images/book-now.png" alt="Book Now" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookNow;
