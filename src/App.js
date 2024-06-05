import logo from "./logo.svg";
import "./App.css";
import pokeman from "./pokeman.json";
import PropTypes from "prop-types";
import { type } from "@testing-library/user-event/dist/type";

const PokemanRow = ({ pokeman }) => (
  <tr>
    <td>{pokeman.name.english}</td>
    <td>{pokeman.type.join(", ")}</td>
  </tr>
);

PokemanRow.propTypes = {
  pokeman: PropTypes.shape({
    name: PropTypes.shape({ english: PropTypes.string }),
    type: PropTypes.arrayOf(PropTypes.string),
  }),
};

function App() {
  return (
    <div style={{ margin: "auto", width: 800, paddingTop: "1rem" }}>
      <h1 className="title">Pokeman Search</h1>
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokeman.slice(0, 25).map((pokeman) => (
            <PokemanRow pokeman={pokeman} key={pokeman.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
