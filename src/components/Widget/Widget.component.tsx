// Importing functions from libraries
import { useState } from "react";

// Importing styles to the component
import "./styles/Widget.style.sass";

// Import the data from the store
import data from "../../data/airports.json";
import { Airport } from "../../typing/types/Airport.type";

// Declare the component
const Widget = () => {
  const [airport, setAirport] = useState<any>();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const foundAirport =
      data && data.find((airport: any) => airport.name === e.target.value);
    setAirport(foundAirport);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="widget">
      <h2 className="widget__header">Widget</h2>
      <div className="widget-wrapper">
        <select
          name=""
          id=""
          className="widget-select"
          placeholder="Please, select an airport"
          onChange={handleChange}
        >
          <option value="">Please, select an airport</option>
          {data &&
            data.map((airport) => (
              <option key={airport.name} value={airport.name}>
                {airport.name}
              </option>
            ))}
        </select>
      </div>
      <table className="table">
        <tbody className="table-body">
          {airport &&
            Object.keys(airport).map((property) => {
              return (
                <tr key={property}>
                  <td className="table-body__info">{toTitleCase(property)}</td>
                  <td className="table-body__info">
                    {airport[property]
                      ? linkSymbolsChecker(airport[property])
                      : "Data isn't available"}
                  </td>
                </tr>
              );
            })}
          <tr>
            {airport ? (
              <>
                <td className="table-body__info" colSpan={1}>
                  Google Maps
                </td>
                <td className="table-body__info" colSpan={3}>
                  <a
                    href={`http://maps.google.com/maps?q=loc:${
                      airport.lat + "," + airport.lon
                    }`}
                    className="table-body__map"
                    target="_blank"
                  >
                    More info
                  </a>
                </td>
              </>
            ) : (
              ""
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Widget;

function toTitleCase(str: string) {
  const cleanedStr = str.replace(/_/gm, " ");
  return (
    cleanedStr.charAt(0).toUpperCase() + cleanedStr.substr(1).toLowerCase()
  );
}

function linkSymbolsChecker(str: string) {
  const emailRegex = /[@]/gm;
  const linkRegex = /(http|https)/gm;
  if (linkRegex.test(str)) {
    return (
      <a href={str} className="table-body__link" target="_blank">
        {str}
      </a>
    );
  }
  if (emailRegex.test(str)) {
    return (
      <a href={`mailto:${str}`} className="table-body__link" target="_blank">
        {str}
      </a>
    );
  }
  return str;
}
