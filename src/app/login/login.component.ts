import { Component, OnInit } from '@angular/core';
declare var FB: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  loginToFacebook(){
    // FB.login();
    FB.login((response)=>
    {
      console.log('loginToFacebook',response);
      if (response.authResponse) {
        //login success
        //login success code here
        //redirect to home page
      } else {
        console.log('User login failed');
      }
    });
  }

  ngOnInit() {
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '2418989731678592',
        cookie     : true,
        xfbml      : true,
        version    : 'v4.0'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

}
