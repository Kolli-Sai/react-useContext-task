import { useState, useContext } from "react";
import { playerContext } from "../contexts/PlayerDataProvider";
import { Box, Paper, Typography, Container, TextField } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

export default function ScorePage() {
  const { players, deletePlayer } = useContext(playerContext);
  const [searchText, setSearchText] = useState("");

  const handleDelete = (id) => {
    deletePlayer(id);
  };

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <Container maxWidth={"xs"}>
        <TextField
          label="Search Players"
          variant="outlined"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          fullWidth
          sx={{ mb: "10px" }}
        />

        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((player) => {
            return (
              <Box sx={{ mb: "10px" }} key={player.id}>
                <Paper
                  elevation={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                    borderRadius: "10px"
                  }}
                >
                  <Typography variant="h4" color="error">
                    {player.name.toUpperCase()}
                  </Typography>
                  <Typography variant="h5" color="secondary">
                    {player.teamName}
                  </Typography>
                  <Typography variant="h6" color="InfoText">
                    {player.score}
                  </Typography>

                  <Box>
                    <DeleteOutline onClick={() => handleDelete(player.id)} />
                  </Box>
                </Paper>
              </Box>
            );
          })
        ) : (
          <Typography variant="h2" color="error">
            No players available
          </Typography>
        )}
      </Container>
    </>
  );
}
