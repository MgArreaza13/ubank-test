import { Router } from '@angular/router';
import { LoadingService } from './../../../core/services/loader.service';
import { UtilService } from './../../../core/services/util.service';
import { GoalsService } from './../../../core/services/goals.service';
import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/shared/models/goal';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastService } from 'src/app/core/services/toast.service';
@Component({
  selector: 'app-goal-create',
  templateUrl: './goal-create.page.html',
  styleUrls: ['./goal-create.page.scss'],
})
export class GoalCreatePage implements OnInit {

  newGoal: Goal = {};
  goalForm: FormGroup;
  public submitted = false;

  constructor(
    private goalsService: GoalsService,
    private formBuilder: FormBuilder,
    private utilService: UtilService,
    private loadingService:  LoadingService,
    private toastService: ToastService,
    private router: Router
  ) {
    this.goalForm = this.formBuilder.group({
      type: ['', [
        Validators.required,

      ]],
      date: ['', [
        Validators.required,

      ]],
      mount: ['', [
        Validators.required,
        Validators.maxLength(10),
      ]],
    });
   }

  ngOnInit() {
    console.log(this.goalsService.getGoals());    
  }


  get f() { return this.goalForm.controls; }

  addGoal(){
    const goal: Goal = {
      id: 'string',
      type: 'string',
      date: 'string',
      mount: '2000'
    }
    this.goalsService.addGoals(goal);
    console.log(this.goalsService.getGoals());
  }





  /**
   * submit to form
   */
  async onSubmit() {
    await this.loadingService.present();
    this.submitted = true;
    if (this.goalForm.invalid) {
      await this.loadingService.dismiss();
      return;
    }
    // Set object
    this.newGoal.id = this.utilService.generateCode(16,'aA#')
    this.newGoal.type = this.goalForm.get('type').value;
    this.newGoal.date = this.goalForm.get('date').value;
    this.newGoal.mount = this.goalForm.get('mount').value;

    // Send request
    // await this.loadingService.present();
    this.goalsService.addGoals(this.newGoal)
    .then(async (message: string) => {
      this.router.navigate(['/goals-list']);
      await this.loadingService.dismiss();
      this.toastService.showToast(message);
    })
    .catch(async error => {console.log(error); this.toastService.showToastError('error try again'); await this.loadingService.dismiss();})
    
  }
}
