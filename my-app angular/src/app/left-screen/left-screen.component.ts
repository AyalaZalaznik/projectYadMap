import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { LeftData } from '../shared/ileft';

@Component({
  selector: 'app-left-screen',
  templateUrl: './left-screen.component.html',
  styleUrls: ['./left-screen.component.scss']
})
export class LeftScreenComponent implements OnInit {

  constructor(private appService:AppService) { }
allDataLeft!:LeftData;
p!:string;
  ngOnInit(): void {
    this.appService.getLeftData().subscribe(x => {
      this.allDataLeft = x;
    console.log(this.allDataLeft);
    this.p=this.allDataLeft?.mainImage[0].url;
    
    })
  }

}
