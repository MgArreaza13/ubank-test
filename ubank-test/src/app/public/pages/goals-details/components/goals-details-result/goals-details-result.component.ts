import { TeamsService } from './../../../../../core/services/teams.service';
import { Ruler } from 'src/app/shared/models/ruler';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goals-details-result',
  templateUrl: './goals-details-result.component.html',
  styleUrls: ['./goals-details-result.component.scss'],
})
export class GoalsDetailsResultComponent implements OnInit {

  results;
  @Input() data: Ruler;

  // to pla7
  // win 
  // for each gol

  constructor(
    private teamService: TeamsService 
  ) { }

  ngOnInit() {
    this.getDataFromTeam(this.data.team);
  }


  getDataFromTeam(id){
    this.teamService.getScheduledTeam(id).subscribe(
      (data:any) => {
        console.log(data)
        this.results = data.matches;
      }, error => {
        console.log(error);
      }
    )
  }

  getIfIsWinner(id, match){
    if (match.homeTeam.id === id){
      return 'HOME_TEAM'
    } else {
      return 'AWAY_TEAM'
    }
  }

}
