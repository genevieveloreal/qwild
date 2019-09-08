import React from "react";
import {Component} from 'react';
import {debounce} from 'lodash';
import mapboxgl from "mapbox-gl";
import Data from "../../data/City_of_Gold_Coast__Fauna.geojson";
import Icon from "../../data/icon.png";
import LoadingGif from "../../data/Double Ring-0.9s-45px.gif";
import KoalaIcon from "../../data/koala-icon-40px.png";

class MapSearch extends Component {

  constructor() {
    super();

    this.state = {
      species: [],
      loading: false
    }
  }

  searchWildNetForSpecies = debounce(searchTerm => {
    if (searchTerm === "") {
      return;
    }
    let url =`https://cors-anywhere.herokuapp.com/https://apps.des.qld.gov.au/species/?f=json&op=speciessearch&kingdom=animals&species=${searchTerm}`;

    this.setState({loading: true});

    fetch(url, {headers: {'origin': 'http://localhost'}, mode:'cors'})
      .then(res => res.json())
      .then((result) => {
        if (result.Species && result.Species.length > 0) {
          this.setState({species: result.Species, loading: false});
        }
        else {

        }
      })

  }, 1000);



  render() {
    const results = this.state.species || null;
    const searchResults = results.map((result, index) =>
      <div key={index} data-taxonid={result.TaxonID} className={"search-result-item"} onClick={this.props.searchfunc.bind(this)}>{result.AcceptedCommonName}</div>
    );

    return (
      <div className="card map-search">
        <div className="card-content">
            <div className="field">
              <label className="label">Where can I find...</label>
              <div className={"control"}>
                <input className={"input"} type={"text"} placeholder={"Search for an animal"} onChange={e => this.searchWildNetForSpecies(e.target.value)}/>
              </div>
            </div>
            <div className="field search-results">
              <div className={"control"}>
                {!this.state.loading && searchResults}
                {this.state.loading && "Searching QLD WildNet API..."}
              </div>
            </div>
        </div>
      </div>
    );
  }


}

export default MapSearch;