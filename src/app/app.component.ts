import { Component, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
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
  feed: any;
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
              movie {
                name
                year
              }
              species {
                name
                gender
              }
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        console.log(result);
        this.getCharacter = result.data.getCharacter.slice(0, 6);
        this.loading = result.loading;
        this.error = result.error;
      });
  }
}
