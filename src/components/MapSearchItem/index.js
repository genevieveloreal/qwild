import React from "react";
import {Component} from 'react';
import {debounce} from 'lodash';
import mapboxgl from "mapbox-gl";
import Data from "../../data/City_of_Gold_Coast__Fauna.geojson";
import Icon from "../../data/icon.png";
import LoadingGif from "../../data/Double Ring-0.9s-45px.gif";

class MapSearchItem extends Component {

  constructor() {
    super()
  }

  render(){
    return(
      <li>Chicken Mitten</li>
    )

  }


}

export default MapSearchItem;