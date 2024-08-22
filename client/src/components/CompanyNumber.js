import React, { useState, useEffect } from 'react';

const Counter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 3000; // Duration of the animation in milliseconds
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return <h2>{count}+</h2>;
};

const CompanyNumbers = () => {
  return (
    <section className='companyNumbers'>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Counter end={1128} />
            <h4>Successful Work</h4>
          </div>
          <div className="col-md-3">
            <Counter end={908} />
            <h4>Team member</h4>
          </div>
          <div className="col-md-3">
            <Counter end={258} />
            <h4>Happy Customers</h4>
          </div>
          <div className="col-md-3">
            <Counter end={564} />
            <h4>Creative Idea</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyNumbers;
