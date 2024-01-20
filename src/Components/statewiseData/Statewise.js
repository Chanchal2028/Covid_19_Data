import React, { useEffect, useState } from "react";

const Statewise = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData.statewise);
    setData(actualData.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <div className="Statewise">
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center">
            <span className="font-weight-bold">INDIA</span> COVID-19 Data
          </h1>
        </div>

        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recovered</th>  
                <th>Deaths</th>
                <th>Active</th>
                <th>Update</th>
              </tr>
            </thead>

            <tbody>
              {data.map((currElem, index) => {
                return (
                  <tr key={index}>
                    <td>{currElem.state}</td>
                    <td>{currElem.confirmed}</td>
                    <td>{currElem.recovered}</td>
                    <td>{currElem.deaths}</td>
                    <td>{currElem.active}</td>
                    <td>{currElem.lastupdatedtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Statewise;
