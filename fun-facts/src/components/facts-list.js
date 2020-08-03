import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Fact = (props) => (
  <tr>
    <td>{props.fact.factText}</td>
    <td>{props.fact.factSource}</td>
    {/* <td>
        <Link to={"/edit/"+props.fact._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
      </td> */}
  </tr>
);

export default class FactsList extends Component {
  constructor(props) {
    super(props);

    //this.deleteExercise = this.deleteExercise.bind(this);

    this.state = { facts: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/facts/")
      .then((response) => {
        this.setState({ facts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  factList() {
    return this.state.facts.map((currentfact) => {
      return (
        <Fact
          fact={currentfact}
          key={currentfact._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Logged Facts</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Fact Text</th>
              <th>Fact Source</th>
            </tr>
          </thead>
          <tbody>{this.factList()}</tbody>
        </table>
      </div>
    );
  }
}
