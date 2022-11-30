import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppService } from '../app.service';
import { elementsss, tab3 } from '../shared/itab3';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.scss']
})
export class Tab3Component implements OnInit {

  constructor(private appService: AppService) { }
  tab3Data!: tab3;
  data!:elementsss[];
  titel!:string;
  Data3!:string;
   m: string[] = [];
   @Output ()displayTab=new EventEmitter()

  ngOnInit(): void {
    this.appService.getRighteTab3().subscribe(x => {
      if(!x)
      this.displayTab.emit();
      this.tab3Data = x;
      console.log(this.tab3Data, "🎈");
      // for (let index = 0; index < this.tab3Data.elementsss.length; index++) {
      //   this.data = this.tab3Data.elementsss;
      //   console.log(this.data,"🎎");
        
      // }
      for (let index = 0; index < this.tab3Data.elementsss.length; index++) {
        for (let i = 0; i < this.tab3Data.elementsss[index].imagess.length; i++) {
          this.titel = this.tab3Data.elementsss[index].imagess[i].title;
          this.Data3 = this.tab3Data.elementsss[index].imagess[i].url;
          console.log(this.titel, this.Data3, "🎐");
          this.m.push(" שם תמונה וניתוב",this.titel, this.Data3)
        }
      }
    })
    

  }
}
