export interface Pokemon {
  img: string;
  name: string;
  types: string[];
  url: string;
}

export interface ApiResponse {
  results: Pokemon[];
}

export interface DirtyResponseApi {
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
}
