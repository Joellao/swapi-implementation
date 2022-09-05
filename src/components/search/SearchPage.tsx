import { Grid, Button } from "@mui/material";
import axios from "../../utils/axiosConfig";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

export interface State {
  key: string;
  data: BaseProp;
}

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [resources, setResources] = useState<BaseProp>();
  const [key, setKey] = useState<string>();
  const renderCard = (
    value:
      | PeopleProp
      | FilmProp
      | PlanetProp
      | SpeciesProp
      | StarshipProp
      | VehicleProp
  ) => {
    if (key === "people") {
      return <PersonCardShort data={value as PeopleProp} />;
    } else if (key === "films") {
      return <FilmCardShort data={value as FilmProp} />;
    } else if (key === "planets") {
      return <PlanetCardShort data={value as PlanetProp} />;
    } else if (key === "species") {
      return <SpecieCardShort data={value as SpeciesProp} />;
    } else if (key === "starships") {
      return <StarshipCardShort data={value as StarshipProp} />;
    } else {
      return <VehicleCardShort data={value as VehicleProp} />;
    }
  };

  const handleNavigate = useCallback(() => {
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    if (location.state == null) {
      handleNavigate();
    }
    const state = location.state as State;
    setKey(state.key);
    setResources(state.data);
  }, [handleNavigate, location.state]);

  const handlePrevious = async () => {
    const res = await axios.get(
      resources?.previous != null ? resources?.previous : ""
    );
    let data: BaseProp = res.data;
    setResources(data);
  };
  const handleNext = async () => {
    const res = await axios.get(resources?.next != null ? resources?.next : "");
    let data: BaseProp = res.data;
    setResources(data);
  };

  return resources != null ? (
    <div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {resources.results?.map((value, index) => {
          return (
            <Grid item xs={4} sm={8} md={4} key={index}>
              {renderCard(value)}
            </Grid>
          );
        })}
      </Grid>
      <br />
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        {resources.previous ? (
          <Button onClick={handlePrevious} variant="outlined">
            Prev
          </Button>
        ) : null}
        {resources.next ? (
          <Button onClick={handleNext} variant="outlined">
            Next
          </Button>
        ) : null}
      </div>
    </div>
  ) : (
    <h1>No resources</h1>
  );
};

export default SearchPage;
