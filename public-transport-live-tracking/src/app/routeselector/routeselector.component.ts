import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatMenuModule, MatIconModule,MatInputModule,MatOptionModule,MatAutocompleteModule,MatFormFieldModule,MatButtonModule} from '@angular/material';
import { StopslistService } from '../stopslist.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-routeselector',
  templateUrl: './routeselector.component.html',
  styleUrls: ['./routeselector.component.css']
})
export class RouteselectorComponent implements OnInit {
  routeGroup : FormGroup;
  data : any[];
  directionsService : any;
  directionsDisplay : any;
  private showRoute : boolean = false;
  @ViewChild("deirectionsPanel",{static:true})
  directionsPanel :ElementRef;
  @ViewChild("map",{static:true})
  map :ElementRef;

  constructor(formbuilder : FormBuilder,private stoplistservice : StopslistService,private router : Router) { 
    this.routeGroup = formbuilder.group({'origin':'','destination':''});
  }

  ngOnInit() {
    this.stoplistservice.getStopsList().subscribe(res=>{this.data = res as any[];console.log(res);});
  }
  
  public displayFn(state){
    console.log(this.routeGroup);
    console.log(state);
    if(state != null){
    return state.stop_name;
    }
  }
  public getRoutes(){
    this.showRoute = true;
  }
  public reset(){
    this.routeGroup.reset();
    this.showRoute = false;

  }
 

}
