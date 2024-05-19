import { Component, OnInit } from '@angular/core';
import { HttpHandlerService } from '../shared/services/http-handler.service';

@Component({
  selector: 'app-tomorrow',
  templateUrl: './tomorrow.component.html',
  styleUrls: ['./tomorrow.component.css']
})

export class TomorrowComponent implements OnInit{
  apiData : any = {};

  constructor( private httpServe : HttpHandlerService ){}

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData(){
    this.httpServe.postTomorrowData(this.apiData).subscribe((data : any)=>{
      console.log(data);
      this.apiData = data
      // .sort((a:any, b:any)=>{
      //   const timeA = new Date(a.time).getTime();
      //   const timeB = new Date(b.time).getTime();
      //   return timeA - timeB;
      // });

      // this.apiData.forEach((item:any)=>{
      //   const date = new Date(item.time);
      //   const hour = date.getHours();
      //   const minute = date.getMinutes();
      //   item.formattedTime = `${hour}:${minute < 10 ? '0' : ''}${minute}`;
      // })
    })
  }

  getSportName( sportid : number ): string{
    switch(sportid){
      case 1: return 'Soccer';
      case 2: return 'Tennis';
      case 4: return 'Cricket';
      default: return 'Unknown';
    }
  }
}
