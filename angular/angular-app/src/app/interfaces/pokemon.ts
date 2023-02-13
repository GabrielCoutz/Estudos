export interface Pokemon {
  img: string;
  name: string;
  types: string[];
  url: string;
  id: string;
}

export interface ApiResponse {
  results: Pokemon[];
}

export interface DirtyResponseApi {
  id: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
}
