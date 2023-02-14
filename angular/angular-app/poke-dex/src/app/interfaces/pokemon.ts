export interface Pokemon {
  img: string;
  name: string;
  types: string[];
  url: string;
  id: string;
  species: string[];
  color: string;
  stats: {
    name: string;
    base_stat: number;
  }[];
}

export interface Species {
  color: {
    name: string;
  };
  names: {
    name: string;
  }[];
}

export interface ApiResponse {
  results: Pokemon[];
}

export interface DirtyResponseApi {
  id: string;
  name: string;
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
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}
