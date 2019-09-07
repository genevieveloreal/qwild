import React from "react";
import {Component} from 'react';
import mapboxgl from "mapbox-gl";
import Data from "../../data/City_of_Gold_Coast__Fauna.geojson";
import Icon from "../../data/icon.png";
import LoadingGif from "../../data/Double Ring-0.9s-45px.gif";

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
      zoom: 12
    });

    this.drawData();
  }

  drawData() {
    let hoveredStateId = null;
    let _this = this;
    this.map.on('load',function(){
      let _map = this;
      let url = Data;
      this.addSource('source_id', {type: 'geojson', data: url});
      this.loadImage(Icon, function(error, image){
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
        closeOnClick: true
      });

      this.on("click", "animals", function (e) {
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
          .setHTML(_this.renderLoadingTooltip(description))
          .addTo(this);

        _this.fetchWildNetData(description, popup);

      });

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

                popup.setHTML(this.renderToolTip(species.Species))
              })
          }
          else {
            popup.setHTML(this.renderToolTipNoData(species))
          }
        })
    // Fetch individual taxon

    // return html data
  }

  renderToolTip(species) {

    let endemic = species.Endemicity === "N" ? "Natural" : "Introduced";
    let imageurl;
    if (typeof species.Image !== "undefined") {
      if (species.Image.length > 1) {
        imageurl = `<img src="${species.Image[0].URL}" />`;
      }
      else {
        imageurl = `<img src="${species.Image.URL}" />`;
      }
    }
    else {
      imageurl = `<span></span>`;
    }

    return (
      `<div class="qw-tooltip">
        ${imageurl}
        <p class="qw-tooltip--title" style="text-transform:capitalize; font-weight:bold;">${species.AcceptedCommonName}</p>
        <p class="italics" style="font-style:italic">${species.ScientificName}</p>
        <p>Endemicity: ${endemic}</p>
        <p>Pest status: ${species.PestStatus} </p>
      </div>`
    )

  }

  renderLoadingTooltip(description) {
    return (
      `<div class="qw-tooltip qw-tooltip--loading">
            <p class="qw-tooltip--title">${description}</p>
            <img src="${LoadingGif}" />
            <p>Fetching additional information<br/>Powered by QLD WildNet</p>
        </div>`
    )
  }

  renderToolTipNoData(description) {
    return (
    `<div class="qw-tooltip qw-tooltip--loading">
            <p class="qw-tooltip--title">${description}</p>
            <p>No WildNet Data Found</p>
        </div>`
    )
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