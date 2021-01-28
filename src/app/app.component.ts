import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My First Angular';
  imgurl='..\src\app\im.png';
  hrlink='http://www.google.com';
  altext='sorry';
  sucess_msg= false;
  IsLoggedIn= true;
userObject = {'firstname': 'ams'};//object
colortest='Pink';
  days='monday';
  setcolor= "yellow";
  styleclass='div1_class';
  
colval='blue';
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
