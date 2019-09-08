import React from "react";
import {Component} from 'react';
import {debounce} from 'debounce';
import mapboxgl from "mapbox-gl";
import Data from "../../data/City_of_Gold_Coast__Fauna.geojson";
import Icon from "../../data/icon.png";
import LoadingGif from "../../data/Double Ring-0.9s-45px.gif";

class MapSearch extends Component {

  constructor(){
    super();

  }

  searchWildNetForSpecies(e){

    let searchTerm = e.target.value;
    let url =`https://cors-anywhere.herokuapp.com/https://apps.des.qld.gov.au/species/?f=json&op=speciessearch&kingdom=animals&species=${searchTerm}`;

    // fetch(url, {signal, headers: {'origin': 'http://localhost'}, mode:'cors'})
    //   .then(res => res.json())
    //   .then((result) => {
    //     if (result.Species.length > 0) {
    //       console.log(result);
    //     }
    //     else {
    //
    //     }
    //   })


     debounce(function(){
       console.log('debouncing');
     }, 500);

  }






  render() {

    return (
      <div className="card map-search">
        <div className="card-content">
            <div className="field">
              <label className="label">Where can I find...</label>
              <div className={"control"}>
                <input className={"input"} type={"text"} placeholder={"Search for an animal"} onChange={this.searchWildNetForSpecies}/>
              </div>
            </div>
            <div className="field search-results">
              <div className={"control"}>
                <div>Koalas</div>
                <div>Kangaroos</div>
              </div>
            </div>
        </div>
      </div>
    );
  }


}

export default MapSearch;