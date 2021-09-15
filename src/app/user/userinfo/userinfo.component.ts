// import { Location } from '@angular/common';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';
import { User } from '../Models/user';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css'],
})
export class UserinfoComponent implements OnInit {
  constructor(
    private routeInfo: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private location: Location
  ) {}
  sub: any;
  id: number = 0;
  albums: any;
  photos: any;
  user = new User('', '', 0, { city: '', suite: '', street: '' });
  ngOnInit(): void {
    this.sub = this.routeInfo.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.userService.getUser(this.id).subscribe((data: any) => {
      this.user = data;
      console.log(this.user);
    });
    this.userService.getAlbums(this.id).subscribe((data: any) => {
      this.albums = data;
      console.log(this.albums);
    });
  }
  viewPhotos(id: number) {
    this.userService.getPhotos(id).subscribe((data: any) => {
      this.photos = data;
      console.log(this.photos);
    });

    this.location.replaceState(this.router.url + '/album/' + id);
  }
}
