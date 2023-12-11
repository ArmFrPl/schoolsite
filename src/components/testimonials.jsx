import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</h2>
        </div>
        <div className="row">
        <p>{props.data ? props.data.paragraph : "loading"}</p>
        <a
          href="https://google.com"
          target="_blank"
          className="btn btn-custom btn-lg"
        >
          ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
        </a>
        </div>

      </div>
    </div>
  );
};
