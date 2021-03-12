import { AnimationBuilder } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { STEP_TYPES } from '../data';
import { boardingStore } from './boarding.store';
import { Status, Step } from './models/Step';
import { AnimationHelper } from './utils/animationHelper';

@Component({
  selector: 'app-boarding',
  templateUrl: './boarding.component.html',
  styleUrls: ['./boarding.component.scss'],
  providers: [boardingStore],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardingComponent extends AnimationHelper implements OnInit {

  public FINISHED= Status.FINISHED;
  public IN_PROGRESS=Status.IN_PROGRESS;
  public type=STEP_TYPES;

  private length: number;

  public stepList$ = this.store.stepList$;

  public currentStepIndex$= this.store.step$;


  public selectedStep$= this.store.finalizedStep$;

  

  constructor(private readonly store: boardingStore,
    protected builder: AnimationBuilder) {
      super(builder);
    
   }

  ngOnInit(): void {
    this.store.select((s)=> s.stepsLength)
    .subscribe((length)=>(this.length=length));
    
    this.init();
  }
  private init(): void
  {
    this.store.setLength();
    this.store.updateStep({ind: 0});
  }
  public trackByFn(_, item): number{

    return item.stepIndex;
  }
  /**
   * 
   * @param item step item
   * @param itemRef  html reference
   */
  public collapse(item: Step, itemRef: HTMLLIElement){

    if(item.collapsed && item.subStep && item.subStep.length>0){
      const { height }= itemRef.getBoundingClientRect();
      let len= item.subStep.length;
      if(item.data) len += 1;
      const marginTop= 15;
      const subStepTotalHeight=(25+ marginTop) * len;
      const stepItemHeight= height > 30 ? 30: height;
      
      return{
        height: `${stepItemHeight + subStepTotalHeight}px`
      }
      
    }}
 
  /** finish first step and go to next step
   * @param ind step index
   
   */
  update(ind: number, el: HTMLElement){
    this .animate(this.slideOut, el).onDone(()=>{
      if(ind < this.length -1){
        this.store.finishCurrentStep();
  
      this.store.updateStep({ind: ind + 1});
      this.animate(this.slideIn, el);
  
      }
      else{
        this.store.finishCurrentStep();
      }
      
    })
    
  }

  prev(ind:number, el:HTMLElement){
    this.animate(this.slideOut, el).onDone(()=>{
      this.store.undoCurrentStep();
    this.store.updateStep({ind: ind -1, undo:true});
    this.animate(this.slideIn, el);


    })

    
  }

}
