import {
  TextField,
  Paper,
  Stack,
  Button,
  Container,
  Typography
} from "@mui/material";
import { useContext, useState } from "react";
import { playerContext } from "../contexts/PlayerDataProvider";
import short from "short-uuid";

export default function Dashboard() {
  const [initialValues, setInitialValues] = useState({
    name: "",
    teamName: "",
    score: ""
  });

  const { addPlayer } = useContext(playerContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(initialValues);
    // setInitialValues({});
    addPlayer({ id: short.generate(), ...initialValues });
  };

  const handleChange = (e) => {
    setInitialValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <>
      <Container maxWidth="xs" sx={{ mt: "30px" }}>
        <Paper elevation={12} sx={{ p: "50px", borderRadius: "10px" }}>
          <Stack spacing={3}>
            <Typography variant="h6" color="primary">
              PLAYER DATA
            </Typography>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              name="name"
              value={initialValues.name}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="TeamName"
              variant="outlined"
              name="teamName"
              value={initialValues.teamName}
              onChange={handleChange}
            />
            <TextField
              type="number"
              id="outlined-basic"
              label="Score"
              variant="outlined"
              name="score"
              value={initialValues.score}
              onChange={handleChange}
            />
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </Paper>
      </Container>
    </>
  );
}
