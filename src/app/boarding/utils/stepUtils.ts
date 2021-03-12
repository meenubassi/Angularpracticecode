import { utils } from "protractor";
import { Status, Step, Steps, Substep } from "../models/Step";

export class Utils{
    /**
     * 
     * @param selected  selected step to modify/update
     * @param ind index for finding and updating step
     */

    public static update(selected: Step,ind: number){
        const inProgress=!selected.ready && Status.IN_PROGRESS;
        const selectedStep={
            ...selected,
            status:inProgress,
            data:selected.data?{
                ...selected.data,
                status:inProgress
            }:null
        };
        const subStepExists=Utils.subStepExists(selectedStep.subStep,ind);
        const newSubStep= subStepExists && {
            ...Utils.findSubStep(selectedStep.subStep,ind),
            status: Status.IN_PROGRESS
        };
        const  subStepArr= subStepExists &&[...selectedStep.subStep];
        const  index = subStepExists && subStepArr.findIndex((p)=> p.stepIndex === ind);
        const  prevSubStepInd= subStepExists && subStepArr.findIndex((p)=>p.status === Status.IN_PROGRESS);


        if(subStepArr[prevSubStepInd] ) subStepArr[prevSubStepInd]={...subStepArr[prevSubStepInd], status: Status.FINISHED};


        if(subStepExists) subStepArr[index]={...newSubStep};
        //final update object
        const updated=subStepExists
        ?{...selectedStep,data: selectedStep.data?{...selectedStep.data, status: Status.FINISHED}:null, subStep:[...subStepArr]}
        : {...selectedStep, collapsed: selectedStep.hasSubStep? true: false}
        return{
            updatedStep: updated as Step,
            updatedSubStep: newSubStep as Substep

        }

    }
    public static prev(selected: Step, ind: number, availableSteps: Steps) {
        let updatedStep = {} as Step;
        let updatedSubStep = {} as Step;
    
        const isSubStep = Utils.subStepExists(selected.subStep, ind);
        const parentIndex = (Utils.findAt(availableSteps, ind) as Substep).parentIndex; // get parent index from previous subStep
    
        if (!isSubStep && !!parentIndex) { // CASE 1 - go to previous parent steps child subStep
          const { updatedParent, subStep } = this.findAndUpdatePreviousParent(availableSteps, ind);
          updatedSubStep = subStep;
          updatedStep = updatedParent;
        } else if (isSubStep) { // CASE 2 - go to previous subStep
          const { updated, newSubStep } = this.findAndUpdatePreviousSubStep(selected, ind);
          updatedStep = updated;
          updatedSubStep = newSubStep;
        } else { // CASE 3 - standard step (without subStep)
          updatedStep = {
            ...selected,
            status: Status.IN_PROGRESS,
            ready: false,
            data: {...selected.data, status: Status.IN_PROGRESS}
          };
          updatedSubStep = null;
        }
    
        return {
          updatedStep,
          updatedSubStep
        }
      }
    
      private static findAndUpdatePreviousSubStep(step: Step, ind: number) {
        let updated = {...step};
        const newSubStep = {...Utils.findSubStep(updated.subStep, ind), status: Status.IN_PROGRESS};
        let updatedSubStepArr = [...updated.subStep];
        const index = updatedSubStepArr.findIndex(s => s.stepIndex === ind);
        updatedSubStepArr[index] = newSubStep;
        updated = {...updated, subStep: [...updatedSubStepArr]};
        return {
          updated,
          newSubStep
        }
      }
      private static findAndUpdatePreviousParent(steps: Steps, ind: number) {
        let updatedSubStep = {
          ...Utils.findAt(steps, ind) as Substep,
          status: Status.IN_PROGRESS
        };
        const parent = {...Utils.findStep(steps, updatedSubStep.parentIndex)} // find parent step
        const updatedSubStepArr = [...parent.subStep];
        const index = updatedSubStepArr.findIndex(s => s.stepIndex === updatedSubStep.stepIndex);
        updatedSubStepArr[index] = updatedSubStep;
    
        return {
          updatedParent: {
            ...parent,
            collapsed: true,
            data: {
              ...parent.data,
              status: Status.INACTIVE
            },
            subStep: [...updatedSubStepArr],
            status: Status.IN_PROGRESS,
            ready: false
          },
          subStep: updatedSubStep
        }
      }
    public static calculateLength(steps: Steps): number{
        const stepsIterable= Object.values(steps);
        let length = stepsIterable.length;

        for(let i=0; i < stepsIterable.length; i++)
        {
            const step = stepsIterable[i];
        
        if(step.subStep &&  step.subStep.length > 0)
        {
                const subStep= stepsIterable[i].subStep;
                const len= subStep.length;
                length += len;
        }
    }
    
    return length;
    }
    /**
     * finds and return step
     * 
     * @param steps -available step object
     * @param ind -index of the step to find
     * @param currentStep -intial value will be returned if no match will occurs
     */

    public static findStep(steps:Steps, ind: number, currentStep?: any){

        return Object.values(steps).reduce(
            (curr, step)=>{
                if(step.stepIndex===ind){
                    curr={...step};
                }
                return curr;
            },
            {...currentStep})

    }
    public static findAt(steps: Steps,ind: number){
        return Object.values(steps).reduce(
            (curr,step)=>{
                if(step.stepIndex=== ind){
                    curr={...step};
                }
                if(step.stepIndex!== ind && Utils.subStepExists(step.subStep,ind)
                ){
                    curr={...Utils.findSubStep(step.subStep,ind)};
                }
                return curr;
            },
            {}
        )
    }
    /** validates if Object contains a step at specified index */
    public static hasAvailableStep(steps: Steps, ind: number):boolean{
        return Object.values(steps).some((step)=>{
            if(step.stepIndex===ind){
                return true;
            }
            if(step.stepIndex !== ind &&  Utils.subStepExists(step.subStep,ind)){
                return true;
            }
            return false;
        })
    }
    public static subStepExists(subStep: Substep[], ind:number): boolean{
        return Array.isArray(subStep) && subStep.some((op)=> op.stepIndex===ind);

    }
    public static findSubStep(subStep: Substep[], ind:number): Substep{
        return subStep.filter((op)=> op.stepIndex===ind)[0];

    }
}