import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { allowedNodeEnvironmentFlags } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('SingUpForm') SingUpForm: NgForm;
  defaultQuestion: string = 'teacher';
  answer: string = '';
  genders: string[] = ['male', 'female'];
  defaultGender: string = 'male';
  suggestedName: string;

  user = {
    userName: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }

  formSubmitted = false;

  ngOnInit(): void {
    this.suggestUserName()
  }

  suggestUserName() {
    this.suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm): void {
  //   console.log(form);
  // }

  onSubmit(): void {
    console.log(this.SingUpForm);

    this.formSubmitted = true;

    this.user.userName = this.SingUpForm.value.userData.username;
    this.user.email = this.SingUpForm.value.userData.email;
    this.user.secretQuestion = this.SingUpForm.value.secret;
    this.user.answer = this.SingUpForm.value.questionAnswer;
    this.user.gender = this.SingUpForm.value.gender;

    this.SingUpForm.reset();
  }

}

