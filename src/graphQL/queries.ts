import { gql } from '@apollo/client';

export const GET_WHITELIST_STATUS = gql `
query GetAccountDetailsByAddress($address: String!) {
    getAccountDetailsByAddress(address: $address ) {
      id
      whitelist_status_id
      created_at
      user_role
      updated_at
      address
    }
  }
`;


export const GET_DEPOSITS_BY_ACCOUNT = gql `
query GetAllDepositByAccountId($accountId: ID!) {
    getAllDepositByAccountId(account_id: $accountId) {
      id
      account_id
      commitment
      market
      net_amount
      net_accrued_yield
      created_at
      updated_at
    }
  }
`;

export const GET_LOANS_BY_ACCOUNT = gql `
query GetAllLoanByAccountId($accountId: ID!) {
    getAllLoanByAccountId(account_id: $accountId) {
      id
      loan_market
      loan_amount
      collateral_market
      collateral_amount
      commitment
      cdr
      debt_category
      current_amount
      current_market
      is_swapped
      loan_status_id
      account_id
      created_at
      updated_at
    }
  }
`;

export const GET_PROTOCOL_DATA = gql `
query Users ($first: Int){
  users(first: $first) {
    id
    address
    loans {
      id
    } 
    deposits {
      id
    }
  }
}
`;

export const GET_DEPOSIT_DATA = gql `
query Deposits ($first: Int){
  deposits(first: $first) {
    id
    market
    commitment
    amount
    state
    user {
      id
      address
    }
    interestAccrued
  }
}
`;

export const GET_LOANS_DATA = gql `
query Loans ($first: Int){
  loans(first: $first) {
    id
    initialMarket
    initialAmount
    currentMarket
    currentAmount
    user {
      id
      address
    }
    collateral {
      id
    }
    state
    interestAccrued
    commitment
  }
}
`;

export const GET_TVL_DATA = gql `
query Reserves ($first: Int){
	reserves(first: $first) {
    id
    market
    amount
    commitment
    date
    instrumentType
  }
}
`;