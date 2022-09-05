export interface ResourceProp {
  key: string;
  uri: string;
}

export interface BaseProp {
  count: number;
  next: string | null;
  previous: string | null;
  results:
    | PeopleProp[]
    | FilmProp[]
    | PlanetProp[]
    | SpeciesProp[]
    | StarshipProp[]
    | VehicleProp[];
}

export interface TitleBased {
  title: string;
}

export interface NameBased {
  name: string;
}

export interface PeopleProp extends NameBased {
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  url: string;
  created: string;
  edited: string;
}

export interface FilmProp extends TitleBased {
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  url: string;
  created: string;
  edited: string;
}

export interface PlanetProp extends NameBased {
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  films: string[];
  residents: string[];
  url: string;
  created: string;
  edited: string;
}

export interface SpeciesProp extends NameBased {
  classification: string;
  designation: string;
  average_height: string;
  average_lifespan: string;
  hair_colors: string;
  skin_colors: string;
  eye_colors: string;
  homeworld: string;
  language: string;
  people: string[];
  films: string[];
  url: string;
  created: string;
  edited: string;
}

export interface StarshipProp extends NameBased {
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  films: string[];
  pilots: string[];
  url: string;
  created: string;
  edited: string;
}

export interface VehicleProp extends NameBased {
  name: string;
  model: string;
  vehicle_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  cargo_capacity: string;
  consumables: string;
  films: string[];
  pilots: string[];
  url: string;
  created: string;
  edited: string;
}
