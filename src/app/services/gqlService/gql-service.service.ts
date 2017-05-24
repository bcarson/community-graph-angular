import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

/*
*   Define GraphQL query here.
*   This is a simple app, if you need to define multiple
*   queries for the same app, you might want to refactor
*   to pass this in as a parameter when the service is called.
*   If you're wondering where these property names come from,
*   so was I!! These are defined in the 'schema' (i.e., key)
*   by whoever created the endpoint you're pulling from.
*   This one is provided by @NEO4J for community use and 
*   I've copied their schema file here so you can see all
*   the other fields available in this endpoint:
*   src/app/shared/community-graph.schema
*/
const RepositoryQuery = gql`
  {
    Repository(orderBy: [updated_desc], first: 200) {
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
  constructor(private apollo: Apollo) { }

  getQuery(){
    /*
    *   This function uses apollo.watchQuery 
    *   (be sure to import Apollo above and 
    *   also inject it into your constructor)
    *   and calls the query we've defined above.
    *
    *   The 'watchQuery' method returns an Observable (yay RxJS!),
    *   however Apollo also provides a method (query) to return
    *   a promise if you prefer. Learn more about all
    *   methods available here (be sure to check out mutations!):
    *   http://dev.apollodata.com/core/apollo-client-api.html
    *   
    *   By the way, if you're new to RxJS Observables, you 
    *   may be looking for 'subscribe' here. Yes you can
    *   subscribe to this Observable (and you should!), 
    *   however you'll want to subscribe in the component,
    *   not the service. Don't blame me, Ben Lesh said so. :)
    *   (because you can subscribe more than once per observable)
    */
    return this.apollo.watchQuery({
      query: RepositoryQuery
    })
  }
}
