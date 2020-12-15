import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-services',
  templateUrl: './available-services.component.html',
  styleUrls: ['./available-services.component.css']
})

export class AvailableServicesComponent implements OnInit {
  private serviceNumber : string;
  private currentStop : string = "Nims";
  private youAreAt : string ="Ameerpet"
  private stages : StageModel[] = [];
  constructor() { }

  ngOnInit() {
    this.serviceNumber = "218";
    this.stages.push(new StageModel("Koti","10:20 Am"));
    this.stages.push(new StageModel("Abids","10:30 Am"));
    this.stages.push(new StageModel("Nampalli","10:40 Am"));
    this.stages.push(new StageModel("Lakdi Kapool","10:50 Am"));
    this.stages.push(new StageModel("Kairathabad","11:00 Am"));
    this.stages.push(new StageModel("Nims","11:05 Am"));
    this.stages.push(new StageModel("Panjagutta","11:10 Am"));
    this.stages.push(new StageModel("Ameerpet","11:20 Am"));
    this.stages.push(new StageModel("SR Nagar","11:30 Am"));
    this.stages.push(new StageModel("Kukatpally","11:40 Am"));
    this.stages.push(new StageModel("Lingampalli","12:00 Pm"));
  }

}
class StageModel{
  stage : string;
  arrivalTime : string;
  constructor(stage,arrivalTime){
    this.stage = stage;
    this.arrivalTime = arrivalTime;

  }
}