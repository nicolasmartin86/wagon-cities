import React, { Component } from 'react';
import City from './city';

import { connect } from 'react-redux'; 


class CityList extends Component {

  constructor(props) {
    super(props);
  }

  renderList = () => {
    return this.props.cities.map((city) => {
      return <City key={city.name} city={city}/>;
    });
  }
  
  render() {
    return(
      <div className="list-group cities">
        {this.renderList()}
      </div>
    );
  }

  
}

function mapStateToProps(state) { return {
  cities: state.cities
  };
}
export default connect(mapStateToProps)(CityList);