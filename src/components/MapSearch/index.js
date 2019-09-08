import React from "react";
import {Component} from 'react';
import {debounce} from 'lodash';
import mapboxgl from "mapbox-gl";
import Data from "../../data/City_of_Gold_Coast__Fauna.geojson";
import Icon from "../../data/icon.png";
import LoadingGif from "../../data/Double Ring-0.9s-45px.gif";

class MapSearch extends Component {

  searchWildNetForSpecies = debounce(searchTerm => {
    if (searchTerm === "") {
      return;
    }
    let url =`https://cors-anywhere.herokuapp.com/https://apps.des.qld.gov.au/species/?f=json&op=speciessearch&kingdom=animals&species=${searchTerm}`;

    fetch(url, {headers: {'origin': 'http://localhost'}, mode:'cors'})
      .then(res => res.json())
      .then((result) => {
        if (result.Species.length > 0) {
          console.log(result);
        }
        else {

        }
      })

  }, 1000);




  render() {

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

              </div>
            </div>
        </div>
      </div>
    );
  }


}

export default MapSearch;