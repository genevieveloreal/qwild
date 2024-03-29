import React from "react";
import {Component} from 'react';
import mapboxgl from "mapbox-gl";
import Data from "../../data/City_of_Gold_Coast__Fauna.geojson";
import KoalaData from "../../data/koalas_2018.geojson";
import Icon from "../../data/icon.png";
import KoalaIcon from "../../data/koala-icon-40px.png";
import LoadingGif from "../../data/Double Ring-0.9s-45px.gif";
import MapSearch from "../MapSearch";

class Map extends Component {

  componentDidMount() {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_TOKEN;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [153.4000, -28.0167],
      zoom: 8
    });

    window.GLOBALMAP = this.map;

    this.drawData();
    this.drawKoalas();
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

  drawKoalas() {
    let hoverStateId = null;
    this.map.on('load', function(){
      let _map = this;
      let url = KoalaData;
      this.addSource('koalas', {type: 'geojson', data: url})
      this.loadImage(KoalaIcon, function(error, image) {
        _map.addImage('koala-ico', image)
      });

      this.addLayer({
        "id":"koalas",
        "type":"symbol",
        "source":"koalas",
        "layout": {
          "icon-image":"koala-ico"
        }
      });

      let kpopup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
      });

      this.on("mouseenter", "koalas", function (e) {
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
        kpopup.setLngLat(coordinates)
          .setHTML("Koala Sighted at <br/>"+ e.features[0].properties.LocalityDetails)
          .addTo(this);


      });

      this.on('mouseleave', 'koalas', function() {
        _map.getCanvas().style.cursor = '';
        kpopup.remove();
      });
    })
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

  searchWildNetLocations(e) {
    if (e.target.dataset.taxonid === "") {
      return;
    }
    let taxonid = e.target.dataset.taxonid;
    let event = e;
    e.target.classList.add('show-loading');
    let name = e.target.innerHTML;
    let _map = window.GLOBALMAP;
    let _this = this;
    let searchresults;
    console.log(this);
    let url =`https://cors-anywhere.herokuapp.com/https://apps.des.qld.gov.au/species/?op=getsurveysbyspecies&min=2017-01-01&taxonid=${taxonid}`;

    let spopup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false
    });

    fetch(url, {headers: {'origin': 'http://localhost'}, mode:'cors'})
      .then(res => res.json())
      .then((result) => {
        document.getElementsByClassName('show-loading')[0].classList.remove('show-loading');
        console.log(result);
        if ( result.features && result.features.length > 0) {
          console.log(result);
          if (typeof _map.getSource('searchresults') === "undefined") {
            _map.removeLayer('animals');
            _map.removeLayer('koalas');
            _map.removeSource('source_id');
            _map.removeSource('koalas');
            _map.addSource('searchresults', {type: 'geojson', data: result});
          }
          else {
            _map.getSource('searchresults').setData(result);
          }

          if (typeof _map.getLayer('searchresults') === "undefined") {
            //_map.removeLayer('searchresults');
           searchresults = _map.addLayer({
              "id":"searchresults",
              "type":"symbol",
              "source":"searchresults",
              "layout": {
                "icon-image":"marker-ico"
              }
            });
          }

          _map.on("mouseenter", "searchresults", function (e) {
            // Change the cursor style as a UI indicator.
            this.getCanvas().style.cursor = 'pointer';
            let coordinates = e.features[0].geometry.coordinates.slice();
            let taxonid = e.features[0].properties.TaxonID;

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            // Populate the popup and set its coordinates
            // based on the feature found.
            spopup.setLngLat(coordinates)
              .setHTML(`<span class="icon-name">${name}</span>`)
              .addTo(_map);


          });

          _map.on('mouseleave', 'searchresults', function() {
            _map.getCanvas().style.cursor = '';
            spopup.remove();
          });

        }
        else {

        }
      })
  }

  resetMap(){
    console.log('reset');
    this.drawData();
    this.drawKoalas()
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
      <>
        <div style={style} id="map"></div>
        <MapSearch searchfunc={this.searchWildNetLocations}/>
        <button onClick={this.resetMap.bind(this)} className={"reset-button"}>Reset Map</button>
      </>

    );
  }
}

export default Map;