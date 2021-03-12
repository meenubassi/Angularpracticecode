
import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { ComponentStore} from '@ngrx/component-store';
import{Observable} from 'rxjs';
import { steps} from '../data';

import { boardingState,Status,Step, Steps, Substep } from './models/Step';
import { Utils } from './utils/stepUtils';

@Injectable()
export class boardingStore extends ComponentStore<boardingState>{
    constructor(){
        super({
            availableSteps: steps,
            stepIndex: null,
            selectedStep:null,
            selectedSubStep: null,
            stepsLength:0,

    
        });
    }
    public readonly stepList$: Observable<Step[]>=this.select((state)=> Object.values(state.availableSteps));
    public readonly step$: Observable<number>=this.select((state)=> state.stepIndex);
    public readonly selectedStep$: Observable<Step>=this.select((state)=> state.selectedStep);
    public readonly selectedSubStep$: Observable<Substep>=this.select((state)=> state.selectedSubStep);

    public readonly finalizedStep$= this.select(
        this.selectedStep$,
        this.selectedSubStep$,
        (step, subStep)=>{
            if(!subStep){
                return step;
            }else
            {
                return subStep;
            }
        }

    )


    readonly setLength= this.updater((state)=>({
        ...state,
        stepsLength: Utils.calculateLength(state.availableSteps)
    }))
    readonly finishCurrentStep= this.updater((state)=>{
        let selectedStep ={...state.selectedSubStep};
        return{
            ...state,
            availableSteps:{
                ...state.availableSteps,
                [selectedStep.type]:{
                    ...selectedStep,
                    status: Status.FINISHED,
                    collapsed: false,
                    ready: true
                }
            }
        }
    });
    readonly undoCurrentStep= this.updater((state)=>{
        let selectedStep={...state.selectedStep} as Step;
        const subStepToModify=
        selectedStep.collapsed &&
        selectedStep.subStep &&
        selectedStep.subStep.length > 0 &&
        selectedStep.subStep.some((s) => s.status === Status.IN_PROGRESS);
        if(subStepToModify){
            const subStepArr = [...selectedStep.subStep];
            const ind = subStepArr.findIndex(s => s.status === Status.IN_PROGRESS);
            subStepArr[ind]= { ...subStepArr[ind], status: Status.INACTIVE};
            selectedStep={
                ...selectedStep,
                subStep:[...subStepArr]
            }
        }
        return{
            ...state,
            selectedStep: selectedStep,
        
            availableSteps:{
                ...state.availableSteps,
                [selectedStep.type]:{
                    ...selectedStep,
                    collapsed:subStepToModify ? true : false,
                    status : subStepToModify ? Status.IN_PROGRESS : Status.INACTIVE,
                    ready: false
                }
                }


        }
    })
    /**finds and updates current step and orignal object on provided step index
     * @param ind step index
     */
    readonly updateStep= this.updater((state:boardingState,{ind, undo=false}:{ind:number; undo?: boolean})=>{
       const foundStep={...Utils.findStep(state.availableSteps, ind, state.selectedStep)};
       let selectedStep={} as Step, selectedSubStep={} as Substep;
       if(!undo)
       {
           const{updatedStep, updatedSubStep}= Utils.update(foundStep,ind);
           selectedStep= updatedStep, selectedSubStep=updatedSubStep;

       }
       else{
           const{ updatedStep, updatedSubStep}= Utils.prev(foundStep, ind, state.availableSteps);
           selectedStep= updatedStep, selectedSubStep = updatedSubStep;

       }
        return{
            ...state,
            stepIndex:Utils.hasAvailableStep(state.availableSteps,ind)? ind: state.stepIndex,
            selectedStep,
            selectedSubStep,
            availableSteps:{
                ...state.availableSteps,
                [selectedStep.type]:{
                    ...selectedStep
                }
            }
        }
    })
}
    
