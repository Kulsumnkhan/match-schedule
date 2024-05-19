import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()

export class HttpHandlerService{
    apiUrlInPlay = "https://ag.bet36.live/api-V2/getInPlayGames";
    apiUrlToday = 'https://ag.bet36.live/api-V2/getInPlayGames';
    apiUrlTomorrow = 'https://ag.bet36.live/api-V2/getInPlayGames';

    constructor(private http : HttpClient){}

    postInPlayData( inPlay : any ){
        return this.http.post(this.apiUrlInPlay, inPlay)
    }

    postTodayData( today : any ){
        return this.http.post(this.apiUrlToday, today)
    }

    postTomorrowData( tomorrow : any ){
        return this.http.post(this.apiUrlTomorrow, tomorrow)
    }
}