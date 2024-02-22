import Header from "./components/Header.jsx";
import "./App.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useState } from "react";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

function App() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Data, setData] = useState([]);

  const addDt = () => {
    setData([...Data, { Name, Email }]);
    setName("");
    setEmail("");
  };

  const deleteData = (index) => {
    let arr = Data;
    arr.splice(index,1);
    setData([...arr]);
  }

  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={Name}
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            required
          />

          <TextField
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            required
          />
          <Button variant="contained" color="success" onClick={addDt}>
            <AddRoundedIcon />
          </Button>
        </Stack>
      </div>

      {/* data */}
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {Data.map((e, index) => {
          return (
            <div className="data_val" key={index}>
              <h4>{e.Name}</h4>
              <h4>{e.Email}</h4>
              <Stack>
                <Button variant="contained" color="error" onClick={()=>deleteData(index)} >
            <DeleteRoundedIcon />
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
