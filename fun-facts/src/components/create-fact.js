import React, { Component } from "react";
import axios from 'axios';

export default class CreateFact extends Component {
  constructor(props) {
    super(props);

    this.onChangeFactText = this.onChangeFactText.bind(this);
    this.onChangeFactSource = this.onChangeFactSource.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      factText: "",
      factSource: ""
    };
  }

  onChangeFactText(e) {
    this.setState({
      factText: e.target.value,
    });
  }

  onChangeFactSource(e) {
    this.setState({
      factSource: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newFact = {
      factText: this.state.factText,
      factSource: this.state.factSource
    };

    axios.post('http://localhost:5000/facts/add', newFact).then(res => console.log(res.data));

    this.setState({
        factText: "",
        factSource: ""
    });
  }

  render() {
    return (
        <div>
        <h3>Create New Fact</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Fact Text: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.factText}
              onChange={this.onChangeFactText}
            />
          </div>
          <div className="form-group">
            <label>Fact Source: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.factSource}
              onChange={this.onChangeFactSource}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
