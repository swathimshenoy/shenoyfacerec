import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore'

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private db: AngularFirestore) { }
  // username : string;
  // emailid: string;
  // phonenumber: string;
  // password: string;
  user: any={};
  ngOnInit() {
  }
  
  register(){
    this.db.collection("users").add(this.user)
    .then(res => {
      console.log("Success in writing data" + res);
    },
    err => {
      console.log("Error in writing data" + (err));
    })
  }
}