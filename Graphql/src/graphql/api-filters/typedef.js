import { gql } from "apollo-server";

export const apiFiltersTypedef = gql`
  input ApiFiltersInput {
    _sort: ApiFilterSort
    _order: ApiFilterOrder
    _start: Int
    _limit: Int
  }

  enum ApiFilterOrder {
    ASC
    DESC
  }
  enum ApiFilterSort {
    indexRef
  }
`;
