import { Component, OnInit } from '@angular/core';
import { HttpHandlerService } from '../shared/services/http-handler.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})

export class TodayComponent implements OnInit{
  apiData : any[] = [];
  filteredData : any[] = [];
  selectedSport : string | null = null;

  constructor( private httpServe : HttpHandlerService ){}

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData(){
    this.httpServe.postTodayData(this.apiData).subscribe((data : any)=>{
      console.log(data);
      this.apiData = data; 
      this.filteredData = this.apiData;    
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

  // parseTime(timeString : String):string{
  //   return timeString.split(' ')[1];
  // }

  filteredBySport(sportName : string){
    // this.selectedSport = sportName;
    if(sportName === null){
      this.filteredData = this.apiData;
    }else{
      this.filteredData = this.apiData.filter( 
        item => this.getSportName(item.sportid) === sportName)
    }
  }
}