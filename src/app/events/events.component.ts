import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import awsconfig from '../../aws-exports';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private amplifyService: AmplifyService) { }

  ngOnInit() {

      const apiName = awsconfig.aws_cloud_logic_custom[0].name;
      const path = '/events';
      const myInit = { // OPTIONAL
          headers: {}, // OPTIONAL
          response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
          queryStringParameters: {  // OPTIONAL

          }
      }
      this.amplifyService.api().get(apiName, path, myInit).then(response => {
          console.log(response);
      }).catch(error => {
          console.log(error.response);
      });
  }

}
