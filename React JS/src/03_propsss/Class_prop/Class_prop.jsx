import React, { Component } from 'react';

export class Class_prop extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="col-md-3 mx-3">
        <h2>Class</h2>
        <div className="card" style={{ width: 400 }}>
          <img className="card-img-top" src={this.props.img} alt="Card image" style={{ width: '100%' }} />
          <div className="card-body">
            <h4 className="card-title">{this.props.title}</h4>
            <p className="card-text">{this.props.disc}</p>
            <a href="#" className="btn btn-primary stretched-link">See Profile</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Class_prop;