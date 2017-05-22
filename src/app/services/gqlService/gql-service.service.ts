import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const RepositoryQuery = gql`
  {
    Repository(orderBy: [updated_desc], first: 1000) {
      url
      created
      favorites
      updated
      full_name
      homepage
      language
      score
      open_issues
      owner {
        name
      }
    }
  }
`;

@Injectable()
export class GqlService {
  loading: boolean;
  repositoryList: Array<any>;

  constructor(private apollo: Apollo) { }

  getQuery(){
    return this.apollo.watchQuery({
      query: RepositoryQuery
    })
  }
}
