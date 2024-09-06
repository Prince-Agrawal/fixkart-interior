import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ end, startCounting }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return; // Do not start the counter if not visible

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
  }, [end, startCounting]);

  return <h2>{count}+</h2>;
};

const CompanyNumbers = () => {
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.unobserve(sectionRef.current); // Stop observing after it's visible
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className='companyNumbers' ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Counter end={1128} startCounting={startCounting} />
            <h4>Successful Work</h4>
          </div>
          <div className="col-md-3">
            <Counter end={908} startCounting={startCounting} />
            <h4>Team member</h4>
          </div>
          <div className="col-md-3">
            <Counter end={258} startCounting={startCounting} />
            <h4>Happy Customers</h4>
          </div>
          <div className="col-md-3">
            <Counter end={564} startCounting={startCounting} />
            <h4>Creative Idea</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyNumbers;
