import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private db: AngularFireDatabase, private router: Router) { }

  onSubmit(form: NgForm) {
    const value = form.value;
    const name = value.name;
    const email = value.email;
    const subject = value.subject;
    const message = value.message;

    const formRequest = { name, email, subject, message};
    this.db.list('/messages').push(formRequest);
    form.resetForm();
    this.router.navigateByUrl('/about');
  }

}
