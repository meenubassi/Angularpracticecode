export enum Status
{
    FINISHED='finished',
    IN_PROGRESS='progress',
    INACTIVE='inactive'
}
export interface Steps{
    [key:string]: Step;

}
export interface Step{
    type: string;
    stepIndex:number;
    ready?: boolean;
    title: string;
    collapsed?: boolean;
    hasSubStep?: boolean;
    data?:{
        title?: string;
        status?: string;

    }
    status? : string;
    subStep?: Substep[];
}
 export interface Substep{
     stepIndex:number;
     parentIndex?:number;
     status?:string;
     title: string;
     ready?:boolean;
     type: string;
 }
 export interface boardingState{
    

     stepIndex:number;
     availableSteps: Steps;
     selectedStep: Step;
     selectedSubStep: Substep;
     stepsLength: number;
 }