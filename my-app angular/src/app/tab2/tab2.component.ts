import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppService } from '../app.service';
import { elementss, tab2 } from '../shared/itab2';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.scss']
})
export class Tab2Component implements OnInit {
  @Output ()displayTab=new EventEmitter()

  constructor(private appService:AppService) { }
  tab2Data!:tab2;
  data!:elementss[];
  ngOnInit(): void {
    this.appService.getRighteTab2().subscribe(x => {   
      
      if(!x)
      this.displayTab.emit();

      this.tab2Data = x;
    console.log(this.tab2Data,"✔");
    for (let index = 0; index < this.tab2Data.elementss.length; index++) {
      this.data = this.tab2Data.elementss;
      console.log(this.data,"🙌");
      
    }
    })
  }

}
