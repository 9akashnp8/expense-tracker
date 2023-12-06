import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import DatePicker from "../../core/components/DatePicker";
import { Button } from "@mui/material";

export default function CreateAccount() {
  return (
    <Paper elevation={3} sx={{ height: "83vh" }}>
      <Typography variant="h4" component="h1" sx={{ p: 5 }}>
        Create Account
      </Typography>
      <Grid container spacing={2} px={5} alignItems={"center"}>
        <Grid item xs={6}>
          <TextField
            sx={{ width: "100%" }}
            id="name"
            label="Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <Select
            fullWidth
            id="type"
            value={10}
            label="Age"
            // OnChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={6}>
          <TextField
            sx={{ width: "100%" }}
            type="number"
            id="starting_balance"
            label="Starting Balance"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            sx={{ width: "100%" }}
            type="number"
            id="latest_balance"
            label="Latest Balance"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            sx={{ width: "100%" }}
            id="default_currency"
            label="Default Currency"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <DatePicker label="Opening Date" />
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained">Submit</Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
