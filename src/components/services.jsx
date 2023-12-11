import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>ЧТО МЫ ПРЕДЛАГАЕМ</h2>
        </div>
        <div className="row">
                {/*<i className="fa-solid fa-right-long fa-beat"></i>*/}
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4 step">
                  <div>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
