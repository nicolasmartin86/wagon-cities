import React, { Component } from 'react';
import City from './city';



class CityList extends Component {

  constructor(props) {
    super(props);
    this.state = {
        activeCity: ""
      };
  }

  renderList = () => {
    return this.props.cities.map((city) => {
      return <City key={city.name} activeCity={this.state.activeCity} name={city.name} address={city.address} slug={city.slug} />;
    });
  }

  render() {
    return(
      <div className="cities">
        {this.renderList()}
      </div>
    );
  }
}

export default CityList;