import { Component, Input, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-app-edit-dep',
  templateUrl: './app-edit-dep.component.html',
  styleUrls: ['./app-edit-dep.component.css']
})
export class AppEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }


@Input()dep:any;
DepartmentId!:string;
DepartmentName!:string;

  ngOnInit(): void {

    this.DepartmentId=this.dep.DepartmentId;
    this.DepartmentName=this.dep.DeparmentName;
  }
  addDepartment(){
    var val ={DepartmentId:this.DepartmentId,
    DepartmentName:this.DepartmentName};
    this.service.appDepartment(val).subscribe(res=>{
      alert(res.toString())
    });
  }
  updateDepartment(){
    var val ={DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName};
      this.service.updateDepartment(val).subscribe(res=>{
        alert(res.toString())
      });
  }
}
