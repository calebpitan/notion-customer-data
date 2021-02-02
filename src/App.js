import { useEffect, useState } from "react";
import { data } from "./services/enyetech";
import "./App.css";
import Display from "./components/Display";
import Header from "./components/Header";

function App() {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState(() => list);
  const [filterBy, setFilterBy] = useState("Gender");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    data()
      .then((items) => {
        console.log(items);
        setList(items.records.profiles);
      })
      .catch((error) => {
        document.querySelector("#error").innerHTML = error;
      }); //rewrite for better display;
  }, []);

  useEffect(() => {
    if (!searchTerm) return setFilteredList([]);
    const filtered = list.filter((item) => {
      const filterKey = filterBy.replace(/ */g, "");
      const value = item[filterKey].toLowerCase();
      const term = searchTerm.toLowerCase();
      const match = value.match(term) !== null;
      const isMatch = match && value.startsWith(term);
      return isMatch;
    });
    setFilteredList(filtered);
  }, [searchTerm, list, filterBy]);

  const filters = ["Gender", "Payment Method", "Credit Card Type"];

  if (!list) {
    return (
      <div>
        <Header />
        <div className="ui negative message">
          <div className="header">We encountered an Error</div>
          <div id="error"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header onSearch={setSearchTerm}>
        <select
          onChange={(e) => setFilterBy(e.target.value)}
          defaultValue={filterBy}
        >
          <option disabled>Filter by...</option>
          {filters.map((filter) => (
            <option key={filter}>{filter}</option>
          ))}
        </select>
      </Header>

      <div className="ui centered grid container">
        <Display list={searchTerm ? filteredList : list} />
        {searchTerm && filteredList.length === 0 && (
          <p>
            None of the persons has a <em>{filterBy.toLowerCase()}</em> that
            matches <b>{searchTerm}</b>
          </p>
        )}
      </div>
    </div>

    //  <ul>
    //     {list.map((person) => (
    //       <li key={person.CreditCardNumber}>{person.FirstName}</li>
    //     ))}
    //   </ul>
  );
}

export default App;
