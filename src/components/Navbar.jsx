import { Stack, Divider } from "@mui/material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { playerContext } from "../contexts/PlayerDataProvider";

export default function Navbar() {
  const { players } = useContext(playerContext);
  return (
    <>
      <Stack
        sx={{
          padding: "30px"
          // alignContent: "flex-end",
          // justifyItems: "space-around"
        }}
        className="nav"
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        alignItems="center"
        justifyContent="space-around"
        flexWrap="wrap"
      >
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/scorepage">
          ScorePage {players.length > 0 && <p>({players.length})</p>}
        </NavLink>
        <NavLink to="/popularplayer">PopularPlayer</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
      </Stack>
    </>
  );
}
