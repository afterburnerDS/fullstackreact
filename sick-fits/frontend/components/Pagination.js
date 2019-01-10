import React from 'react';
import PaginationStyles from './styles/PaginationStyles';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';


const PAGINATION_QUERY = gql `
    query PAGINATION_QUERY {
        itemsConnection {
            aggregate {
                count
            }
        }
    }
`;



const Pagination = () => {
    return (
       <PaginationStyles>
           <Query query ={PAGINATION_QUERY}>
                {({data, loading, error}) => {
                    if(loading) return <p>Loading...</p>
                    return <p>Hi im the pagination!{data.itemsConnection.aggregate.count}</p>
                }
                    
                }
            </Query>
           
       </PaginationStyles>
    );
};

export default Pagination;