import { Grid } from "@mui/material";
import axios from "../../utils/axiosConfig";
import { useCallback, useEffect, useState } from "react";
import {
  BaseProp,
  FilmProp,
  PeopleProp,
  PlanetProp,
  SpeciesProp,
  StarshipProp,
  VehicleProp,
} from "../../utils/Interfaces";
import FilmCardShort from "../shared/films/FilmCardShort";
import PersonCardShort from "../shared/people/PersonCardShort";
import PlanetCardShort from "../shared/planets/PlanetCardShort";
import SpecieCardShort from "../shared/species/SpecieCardShort";
import StarshipCardShort from "../shared/starships/StarshipCardShort";
import VehicleCardShort from "../shared/vehicles/VehicleCardShort";

const HomePage = () => {
  const [allResources, setAllResources] = useState<BaseProp[]>([]);

  const fetchResources = async (key: string) => {
    const res = await axios.get(`/${key}`);
    let data: BaseProp = res.data;
    return data;
  };

  const fetchFirstPageOfResources = useCallback(async () => {
    const people = await fetchResources("people");
    const films = await fetchResources("films");
    const planets = await fetchResources("planets");
    const species = await fetchResources("species");
    const starships = await fetchResources("starships");
    const vehicles = await fetchResources("vehicles");
    const allArrays = [people, films, planets, species, starships, vehicles];

    setAllResources(allArrays);
  }, []);

  useEffect(() => {
    fetchFirstPageOfResources();
  }, [fetchFirstPageOfResources]);

  const renderCard = (
    value:
      | PeopleProp
      | FilmProp
      | PlanetProp
      | SpeciesProp
      | StarshipProp
      | VehicleProp
  ) => {
    if (value.url.includes("people")) {
      return <PersonCardShort data={value as PeopleProp} />;
    } else if (value.url.includes("films")) {
      return <FilmCardShort data={value as FilmProp} />;
    } else if (value.url.includes("planets")) {
      return <PlanetCardShort data={value as PlanetProp} />;
    } else if (value.url.includes("species")) {
      return <SpecieCardShort data={value as SpeciesProp} />;
    } else if (value.url.includes("starships")) {
      return <StarshipCardShort data={value as StarshipProp} />;
    } else {
      return <VehicleCardShort data={value as VehicleProp} />;
    }
  };

  return allResources.length !== 0 ? (
    <div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {allResources.map((value, index) => {
          return value.results.map((value, indexResults) => {
            return (
              <Grid item xs={4} sm={8} md={4} key={value.url}>
                {renderCard(value)}
              </Grid>
            );
          });
        })}
      </Grid>
    </div>
  ) : (
    <div>No Resources</div>
  );
};

export default HomePage;
