import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  postTitle:string | undefined;
  postDetails:string | undefined;
  imageURL:string | undefined;
  postURL:string | undefined;
  AddBackground:boolean | undefined;

  objectArray:Array<any>=[
    {id:1,title:"l1" },
    {id:2,title:"l2" },
    {id:3,title:"l3" },
    {id:4,title:"l4" }
  ]
  index!: number;

  addElement(){
    this.objectArray.push({id:5,title:"l5"})
  }

  deleteElement(index: number){
    // this.index=this.objectArray.indexOf(post)
    this.objectArray.splice(index,1)
  }

 
  @Input() fromChild:string | undefined;

  postChild:string='message from child';
  childmsg:string='hello child';
  outputChild:string="mesaage from the output child"

  @Output() messageEvent=new EventEmitter<string>();
  
  constructor() { }

  Parentmsg:string= "message from parent";

  ngOnInit(): void {
  }
  sendmessage(){
    // console.log('clicked')
    this.messageEvent.emit(this.outputChild)
  }

}
