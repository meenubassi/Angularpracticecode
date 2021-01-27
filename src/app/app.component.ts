import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My First Angular';
  sucess_msg= true;

  days='Thursday';
  
  contacts=[
    {
    'firstname':'Siain',
    'designation': 'programmer',
    'city': 'Slough'
  },
  {
    'firstname':'Davis',
    'designation': 'Developer',
    'city': 'Reading'
  },
  {
    'firstname':'John',
    'designation': 'programmer',
    'city': 'Slough'
  },
  {
    'firstname':'Michal',
    'designation': 'Developer',
    'city': 'Reading'
  },
  {
    'firstname':'Gagan',
    'designation': 'programmer',
    'city': 'Slough'
  },
  {
    'firstname':'Shivang',
    'designation': 'Developer',
    'city': 'Reading'
  }
]

}
