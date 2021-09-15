import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from './Models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }
  user = new User('', '', 0, { city: '', suite: '', street: '' });
  users: Array<any> = [];
  getUsers() {
    this.userService.getAll().subscribe((data: any) => {
      this.users = data;

      console.log(data);
    });
  }
  userForm = new FormGroup({
    Name: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Phone: new FormControl('', Validators.required),
    Address: new FormGroup({
      City: new FormControl('', Validators.required),
      Suite: new FormControl('', Validators.required),
      Street: new FormControl('', Validators.required),
    }),
  });
  get name() {
    return this.userForm.get('Name');
  }
  get email() {
    return this.userForm.get('Email');
  }
  get phone() {
    return this.userForm.get('Phone');
  }
  get city() {
    return this.userForm.get('Address.City');
  }
  get street() {
    return this.userForm.get('Address.Street');
  }
  get suite() {
    return this.userForm.get('Address.Suite');
  }
  submit() {
    this.user.name = this.name?.value;
    this.user.email = this.email?.value;
    this.user.phone = this.phone?.value;
    this.user.address.city = this.city?.value;
    this.user.address.street = this.street?.value;
    this.user.address.suite = this.suite?.value;
    this.users.push(this.user);
    this.userService.postUser(this.user).subscribe((a) => console.log(a));
    console.log(this.user);
  }
  showUser(id: number) {
    this.router.navigateByUrl('user/' + id);
  }
}
