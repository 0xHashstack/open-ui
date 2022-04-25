import { gql } from '@apollo/client';

export const LOGIN = gql `
    mutation Login($signature: String!, $loginAddress2: String!) {
        login(signature: $signature, address: $loginAddress2) {
        accessToken
        account_id
        }
    }
`;

  