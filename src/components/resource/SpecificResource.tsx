import axios from "../../utils/axiosConfig";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  FilmProp,
  PeopleProp,
  PlanetProp,
  SpeciesProp,
  StarshipProp,
  VehicleProp,
} from "../../utils/Interfaces";
import VehicleCard from "../shared/vehicles/VehicleCard";
import FilmCard from "../shared/films/FilmCard";
import PersonCard from "../shared/people/PersonCard";
import PlanetCard from "../shared/planets/PlanetCard";
import SpecieCard from "../shared/species/SpecieCard";
import StarshipCard from "../shared/starships/StarshipCard";
import { CircularProgress } from "@mui/material";

const SpecificResource = () => {
  const { key, id } = useParams<string>();
  const location = useLocation();
  const [resource, setResource] = useState<
    | PeopleProp
    | FilmProp
    | PlanetProp
    | SpeciesProp
    | StarshipProp
    | VehicleProp
    | null
  >();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchFromAPI = async () => {
    try {
      const res = await axios.get(`https://swapi.dev/api/${key}/${id}`);
      let data = res.data;
      setResource(data);
    } catch (e) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (
      (location.state == null && resource == null) ||
      (resource != null && !resource.url.includes(key!))
    ) {
      fetchFromAPI();
    }
  }, [key, id]);

  const renderCard = (value: unknown) => {
    if (key == "people") {
      return <PersonCard data={value as PeopleProp} />;
    } else if (key == "films") {
      return <FilmCard data={value as FilmProp} />;
    } else if (key == "planets") {
      return <PlanetCard data={value as PlanetProp} />;
    } else if (key == "species") {
      return <SpecieCard data={value as SpeciesProp} />;
    } else if (key == "starships") {
      return <StarshipCard data={value as StarshipProp} />;
    } else {
      return <VehicleCard data={value as VehicleProp} />;
    }
  };

  if (resource != null) {
    return <div>{renderCard(resource)}</div>;
  }

  if (location.state != null) {
    return <div>{renderCard(location.state)}</div>;
  }
  return isLoading ? (
    <CircularProgress />
  ) : (
    <h1>This resource doesn't exist</h1>
  );
};

export default SpecificResource;
