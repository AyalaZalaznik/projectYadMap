import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { links, righteData, valuee } from '../shared/itab1';

@Component({
  selector: 'app-righte-screen',
  templateUrl: './righte-screen.component.html',
  styleUrls: ['./righte-screen.component.scss']
})
export class RighteScreenComponent implements OnInit {

  constructor(private appService: AppService) { }
  RighteTab1!: righteData;
  tab1Data!:string;
  titel!:string;
  t1:boolean=true;
  t2:boolean=true;
  t3:boolean=true;


  ngOnInit(): void {
    this.appService.getRighteTab1().subscribe(y => {
      this.RighteTab1 = y;
      console.log(this.RighteTab1, "💕");

    })

  }

}



