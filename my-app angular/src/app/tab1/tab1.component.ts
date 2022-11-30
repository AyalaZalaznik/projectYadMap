import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppService } from '../app.service';
import { righteData } from '../shared/itab1';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss']
})
export class Tab1Component implements OnInit {
 RighteTab1!: righteData;
  p: string[] = [];
 @Output ()displayTab=new EventEmitter()
  constructor(private appService: AppService) { }
 
  ngOnInit(): void {
    this.appService.getRighteTab1().subscribe(y => {debugger
      if(!y)
      this.displayTab.emit();
      this.RighteTab1 = y;
      console.log(this.RighteTab1, "💕");
    })

  }

}
