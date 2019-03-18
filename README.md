# Angular + Amplify sample app

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4 and 
[Amplify CLI](https://github.com/aws-amplify/amplify-cli) version 1.1.7.

# Project

Demo url: https://master.d3a0xjcwoktzxr.amplifyapp.com/

# POST example (JavaScript)

    var data = JSON.stringify({
      "client_id": "1",
      "event": "share",
      "timestamp": "2016-03-18T12:00:31.2311892-04:00"
    });
    
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });
    
    xhr.open("POST", "https://93dc3nqpkg.execute-api.eu-west-1.amazonaws.com/devkeyne/events");
    xhr.setRequestHeader("content-type", "application/json");
    
    xhr.send(data);

## Development server

Before start run `npm i` and `amplify init` and chose the already created environment

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.