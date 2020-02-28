import { map } from 'rxjs/operators';
import { TeamsService } from './../../../core/services/teams.service';
import { RulesService } from './../../../core/services/rules.service';
import { Router } from '@angular/router';
import { LoadingService } from './../../../core/services/loader.service';
import { UtilService } from './../../../core/services/util.service';
import { GoalsService } from './../../../core/services/goals.service';
import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/shared/models/goal';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastService } from 'src/app/core/services/toast.service';
import { Ruler } from 'src/app/shared/models/ruler';
@Component({
  selector: 'app-ruler-create',
  templateUrl: './ruler-create.page.html',
  styleUrls: ['./ruler-create.page.scss'],
})
export class RulerCreatePage implements OnInit {
  teams: Array<any>;
  goals: Array<Goal> = [];
  newRuler: Ruler = {};
  rulerForm: FormGroup;
  public submitted = false;

  constructor(
    private rulesService: RulesService,
    private goalsService: GoalsService,
    private formBuilder: FormBuilder,
    private utilService: UtilService,
    private loadingService:  LoadingService,
    private toastService: ToastService,
    private router: Router,
    private teamService: TeamsService
  ) {
    this.rulerForm = this.formBuilder.group({
      goal: ['', [
        Validators.required,

      ]],
      team: ['', [
        Validators.required,

      ]],
      event: ['', [
        Validators.required,
        Validators.maxLength(10),
      ]],
      saving: ['', [
        Validators.required,
      ]],
    });
   }

  ngOnInit() {
    this.getTeams();
    this.goals = this.goalsService.getGoals();    
  }


  get f() { return this.rulerForm.controls; }


  /**
   * submit to form
   */
  async onSubmit() {
    await this.loadingService.present();
    this.submitted = true;
    if (this.rulerForm.invalid) {
      await this.loadingService.dismiss();
      return;
    }
    // Set object
    this.newRuler.goal = this.rulerForm.get('goal').value;
    this.newRuler.team = this.rulerForm.get('team').value;
    this.newRuler.event = this.rulerForm.get('event').value;
    this.newRuler.saving = this.rulerForm.get('saving').value;
    this.newRuler.goalName = this.getGoalName(this.rulerForm.get('goal').value);
    this.newRuler.teamName = this.getNameTeam(this.rulerForm.get('team').value);

    // Send request
    // await this.loadingService.present();
    this.rulesService.addRuler(this.newRuler)
    .then(async (message: string) => {
      this.router.navigate(['/rules-list']);
      await this.loadingService.dismiss();
      this.toastService.showToast(message);
    })
    .catch(async error => {console.log(error); this.toastService.showToastError(error); await this.loadingService.dismiss();})
    
  }



  getTeams(){
    this.teamService.getTeams().subscribe(
      (data: any) => {
        this.teams = data.teams;
      },
      error => {
        console.log(error);
      }
    )
  }

  goToListRules(){
    this.router.navigate(['/rules-list']);
  }


  getGoalName(id){
    let goalName; 
    this.goals.map(
      (goal: Goal)=>{
        if(id === goal.id){
          goalName = goal.type;
        }
      }
    )
    return goalName;
  }


  getNameTeam(id) {
    let nameTeam;
    this.teams.map(
      (team:any)=> {
        if(id === team.id){
          nameTeam = team.name;
        }
      }
    )
    return nameTeam;
  }
}
