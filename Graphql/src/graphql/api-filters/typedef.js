import { gql } from "apollo-server";

export const apiFiltersTypedef = gql`
  input ApiFiltersInput {
    _sort: String
    _order: String
    _start: Int
    _limit: Int
  }
`;
