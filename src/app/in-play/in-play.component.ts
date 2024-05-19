import { Component, OnInit } from '@angular/core';
import { HttpHandlerService } from '../shared/services/http-handler.service';

@Component({
  selector: 'app-in-play',
  templateUrl: './in-play.component.html',
  styleUrls: ['./in-play.component.css']
})

export class InPlayComponent implements OnInit{
  items = ['Cricket', 'Tennis', 'Football'];
  expandedIndex = 0;
  apiData : any;
  apiList : any = {};

  constructor( private httpServe : HttpHandlerService){}

  ngOnInit(): void {
    this.httpServe.postInPlayData(this.apiData).subscribe((data : any)=>{
      console.log(data);
      this.categorizeData(data)
    })
  }

  categorizeData(data:any): void{
    this.apiList = {
      Cricket : [],
      Tennis : [],
      Football : []
    }
    data.forEach((item : any)=>{
      switch (item.sportid){
        case 4 : this.apiList.Cricket.push(item);
        break;
        case 2 : this.apiList.Tennis.push(item);
        break;
        case 1 : this.apiList.Football.push(item);
        break;
        default: 
        break;
      }
    });
    console.log(this.apiList);
  }
}
