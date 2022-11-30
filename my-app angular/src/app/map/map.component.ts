import { Component, OnInit } from '@angular/core';
declare const govmap: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    setTimeout(() => {
      govmap.createMap('map',
      {

        token: '5a4b8472-b95b-4687-8179-0ccb621c7990',
                      layers: ["GASSTATIONS","PARCEL_HOKS", "KSHTANN_ASSETS", "bus_stops", "PARCEL_ALL"],
                      showXY: true,
                      identifyOnClick: true,
                      isEmbeddedToggle: false,
                      background: "1",
                      layersMode: 1,
                      zoomButtons:false
      });
    }, 0);


  }


}
