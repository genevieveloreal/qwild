import React from "react";
import {Component} from 'react';
import {debounce} from 'lodash';
import mapboxgl from "mapbox-gl";
import Data from "../../data/City_of_Gold_Coast__Fauna.geojson";
import Icon from "../../data/icon.png";
import LoadingGif from "../../data/Spinner-1s-23px.gif";
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

  fetchWildNetDataByID(id,name, popup) {
    let url =`https://cors-anywhere.herokuapp.com/https://apps.des.qld.gov.au/species/?op=getspeciesbyid&taxonid=${id}`;
    // Fetch speciessearch via name.
    fetch(url, {headers: {'origin': 'http://localhost'}, mode:'cors'})
      .then(res => res.json())
      .then((result) => {
        if (result.Species.length > 0) {
          fetch('https://cors-anywhere.herokuapp.com/'+ result.Species[0].SpeciesProfileUrl, {headers:{'origin':'http://localhost'}})
            .then(res => res.json())
            .then((species) => {
              console.log(species);

              popup.setHTML(this.renderToolTip(id.Species))
            })
        }
        else {
          popup.setHTML(this.renderToolTipNoData(name))
        }
      })
    // Fetch individual taxon

    // return html data
  }


  render() {
    const results = this.state.species || null;
    const searchResults = results.map((result, index) =>
      <div key={index} data-taxonid={result.TaxonID} className={"search-result-item"} onClick={this.props.searchfunc.bind(this)}><img src={LoadingGif} className={`item-loading`} />{result.AcceptedCommonName}</div>
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