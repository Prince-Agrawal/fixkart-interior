import React from "react";

const BookNow = () => {
  return (
    <>
      <div className="container">
        <div className="bookNow my-5">
          <div className="row align-items-center">
            <div className="col-md-6 ps-md-5">
              <div className="heading-main">
                <span className="badge rounded-pill text-bg-warning">
                    Book Now
                </span>
                <h2 className="mb-3">Better Consult, Better Results</h2>
                <p>Our journey at Fixkart Interio has been one of growth, creativity, and excellence. With a 30% year-on-year growth, we are redefining interior solutions in Jaipur and beyond. If you are a result-driven professional, brimming with ideas and the initiative to make them happen – drop us a message and become a part of our dynamic team!"</p>
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
