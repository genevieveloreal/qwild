import React from "react";
import {Component} from 'react';
import mapboxgl from "mapbox-gl";


class Map extends Component {

  state = {
    viewport: {
      width: "100%",
      height: 400,
      latitude: -28.0167,
      longitude: 153.4000,
      zoom: 8
    }
  };

  componentDidMount() {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_TOKEN;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [153.4000, -28.0167],
      zoom: 8
    });

    this.drawData();
  }

  drawData() {
    let hoveredStateId = null;
    let _this = this;
    this.map.on('load',function(){
      let _map = this;
      let url = './../data/City_of_Gold_Coast__fauna.geojson';
      this.addSource('source_id', {type: 'geojson', data: url});
      this.loadImage('./../data/icon.png', function(error, image){
        _map.addImage('marker-ico', image);
      });

      this.addLayer({
        "id":"animals",
        "type":"symbol",
        "source":"source_id",
        "layout": {
          "icon-image":"marker-ico",
        }
      });

      let popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
      });

      this.on("mouseenter", "animals", function (e) {
        // Change the cursor style as a UI indicator.
        this.getCanvas().style.cursor = 'pointer';

        let coordinates = e.features[0].geometry.coordinates.slice();
        let description = e.features[0].properties.COMMONNAME;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(coordinates)
          .setHTML(description)
          .addTo(this);

      });

      this.on("click", "animals", function(e){
        let description = e.features[0].properties.COMMONNAME;
        _this.fetchWildNetData(description, popup);
      });

      this.on("mouseleave", "animals", function(){
        this.getCanvas().style.cursor = '';
        popup.remove();
      })
    });
  }

  fetchWildNetData(species, popup) {
    let url =`https://cors-anywhere.herokuapp.com/https://apps.des.qld.gov.au/species/?f=json&op=speciessearch&kingdom=animals&species=${species}`;
    // Fetch speciessearch via name.
      fetch(url, {headers: {'origin': 'http://localhost'}, mode:'cors'})
        .then(res => res.json())
        .then((result) => {
          if (result.Species.length > 0) {
            fetch('https://cors-anywhere.herokuapp.com/'+ result.Species[0].SpeciesProfileUrl, {headers:{'origin':'http://localhost'}})
              .then(res => res.json())
              .then((species) => {
                console.log(species);

                popup.setHTML(species.Species.ScientificName)
              })
          }
        })
    // Fetch individual taxon

    // return html data
  }

  render() {
    const style = {
      position: 'relative',
      width: '100%',
      height: 400
    };

    return (
      <div style={style} id="map"></div>
    );
  }
}

export default Map;