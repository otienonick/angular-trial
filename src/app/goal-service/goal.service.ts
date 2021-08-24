import { Injectable } from '@angular/core';
import { Goal } from '../goal';
import { goals } from '../goalList';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals(){
    return goals
  }

  // getGoal(id: any){
  //   for (let goal of Goal){
  //     if (goal.id == id){
  //       return goal;
  //     }
  //   }
  // }

  constructor() { }
}