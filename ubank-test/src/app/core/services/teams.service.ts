import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class TeamsService {
  constructor(private http: HttpClient) {}



  /** get all scores finished from a team 
   * @param id id team
   */
  getScheduledTeam(id?){
    return this.http.get(`https://api.football-data.org/v2/teams/86/matches?season=2019/matches?status=FINISHED`);
  }


  getTeams(){
    return this.http.get('https://api.football-data.org/v2/competitions/CL/teams');
  }
}