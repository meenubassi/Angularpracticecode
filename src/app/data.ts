import { Steps } from "./boarding/models/Step";


export enum STEP_TYPES{
    COMPANY_TYPE='COMPANY_TYPE',
    STATE='STATE',
    BUSINESS_DETAILS='BUSINESS_DETAILS',
    BUSINESS_DETAILS_ABOUT='BUSINESS_DETAILS_ABOUT',
    BUSINESS_DETAILS_ADDITIONAL='BUSINESS_DETAILS_ADDITIONAL',
    BUSINESS_DETAILS_TEST='BUSINESS_DETAILS_TEST',
    TEAM='TEAM',
    PERSONAL='PERSONAL',
    ABOUT_TEAM='ABOUT_TEAM',
    ADDITIONAL_TEAM_DETAILS='TEAM DETAILS',



}
//STEPS DATA
export const steps: Steps={
    COMPANY_TYPE:{
        stepIndex:0,
        title: 'COMPANY TYPE',
        type: STEP_TYPES.COMPANY_TYPE,
    },
    STATE:{
        stepIndex:1,
        title: 'STATE',
        type: STEP_TYPES.STATE,
    },
    BUSINESS_DETAILS:{

    stepIndex: 2,
        title: 'BUSINESS_DETAILS',
        hasSubStep: true,
        data:{
            title:'Details',
        },
        type: STEP_TYPES.BUSINESS_DETAILS,
        subStep:[
            {
            stepIndex:3,
            title:'About',
            parentIndex:2,
            type:STEP_TYPES.BUSINESS_DETAILS_ABOUT,
        },
        {
            stepIndex:4,
            title:'Additional Details',
            parentIndex:2,
            type:STEP_TYPES.BUSINESS_DETAILS_ADDITIONAL,
        },
    ],

    },
    
    
TEAM:
{
    stepIndex:5,
        title: 'TEAM',
        type: STEP_TYPES.TEAM,
        hasSubStep: true,
        data:{
            title: 'Team-Members',
        },
        subStep:[
            {
            stepIndex:6,
            title:'About',
            parentIndex:5,
            type:STEP_TYPES.ABOUT_TEAM,
        },
        {
            stepIndex:7,
            title:'ADDITIONAL DETAILS',
            parentIndex:5,
            type:STEP_TYPES.ADDITIONAL_TEAM_DETAILS,
        },
    ],
    },
    PERSONAL:{
        stepIndex:8,
        title:'PERSONAL_DETAILS',
        type:STEP_TYPES.PERSONAL,
    },
};

