import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data: any;
  getCharacter: any;
  loading = true;
  error: any;
  constructor(private apollo: Apollo) {}
  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          {
            getCharacter {
              id
              name
              description
              image
              movie{
                name
              }
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.getCharacter = result.data.getCharacter;
        this.loading = result.loading;
        this.error = result.error;
      });
  }
}
