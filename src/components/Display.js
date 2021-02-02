import React from "react";
const Display = (props) => {
  return props.list.map((person, i) => {
    return (
      <div className=" ui cards" key={i}>
        <div className="card">
          <div className="ui">
            <div className="header">
              {person.FirstName + " " + person.LastName}
            </div>
            <div className="header">{person.Email}</div>
            <div className="header">{person.PhoneNumber}</div>
            <div className="meta">{person.Gender}</div>
            <div className="meta">{person.URL}</div>
            <div className="meta">
              {person.Longitude + "," + person.Latitude}
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Display;
//  <ul>
//     {list.map((person) => (
//       <li key={person.CreditCardNumber}>{person.FirstName}</li>
//     ))}
//   </ul>
