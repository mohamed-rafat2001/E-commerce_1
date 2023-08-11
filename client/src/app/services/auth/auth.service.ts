import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  url: string = 'http://localhost:4000/'
  // singUp
  signUp(body: any) {
    return this.http.post(this.url + 'signUp', body)
  }
  //profile
  profile() {
    return this.http.get(this.url + 'profile')
  }
  //login user
  loginUser(body: any) {
    return this.http.post(this.url + 'loginUser', body)
  }
  // update profile
  updateProfile(body: any) {
    return this.http.patch(this.url + 'profile', body)
  }
  //delete acount
  delete() {
    return this.http.delete(this.url + 'profile')
  }
  //forgotPassword
  forgotPass(body: any) {
    return this.http.post(this.url + 'forgotPassword', body)

  }
  //resetPassword
  resetPass(body: any) {
    return this.http.patch(this.url + 'resetPassword', body)

  }
  //getWishList
  getWishList() {
    return this.http.get(this.url + 'wishList')
  }
  //addWishList
  addWishList(id: any) {
    return this.http.patch(this.url + 'toWishList/' + id, "")
  }
}
