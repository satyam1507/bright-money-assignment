import React,{useState,useEffect} from "react";
import DrawerAppBar from "../component/navbar";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import {useDispatch,useSelector} from 'react-redux';
import {addBillData, updateBillData} from '../redux/actions';
import {useNavigate,useParams} from 'react-router-dom';
import {getSingleBill} from '../redux/actions';
// make a form to add a bill
const UpdateBill = () => {
  const [state, setState] = useState({
    description: "",
    amount: 0,
    category: "",
    date: "",
  });
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { bill } = useSelector((state) => state.data);
  let {id} = useParams();

  useEffect(()=>{
    dispatch(getSingleBill(id));
  },[])
 console.log(bill);
   let tempdate = bill.date;
    let dateArray = tempdate.split("-");
    let newDate = dateArray[2] + "-" + dateArray[0] + "-" + dateArray[1];
   bill.date = newDate;
  useEffect(()=>{
    setState(bill);
  }
    ,[bill])

  const { description, amount, category, date } = state;
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    //console.log(bill);
    e.preventDefault();
    
    if(description===""||amount===0||category===""||date===""){
      setError("Please fill all the fields");
    }
    else{
      let date =state.date;
      let dateArray = date.split("-");
      let newDate = dateArray[1] + "-" + dateArray[2] + "-" + dateArray[0];
      state.date = newDate;
      dispatch(updateBillData(id,state));
      setError("");
      navigate("/");
      
    }
  };

  return (
    <div>
      <DrawerAppBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <h2>Update Bill</h2>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
         // onSubmit={handleSubmit}
        >
          <TextField id="outlined-basic" label="Description" variant="outlined"  value={description} name="description" onChange={handleChange}/>
          <br />
          <TextField id="outlined-basic" label="Amount" variant="outlined" type="number" value={amount} name="amount" onChange={handleChange}/>
          <br />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="category"
              name="category"
              onChange={handleChange}
            >
              <MenuItem value={"All Categories"}>All Categories</MenuItem>
              <MenuItem value={"Travel"}>Travel</MenuItem>
              <MenuItem value={"shopping"}>Shopping</MenuItem>
              <MenuItem value={"Food & Dining	"}>Food & Dining</MenuItem>
              <MenuItem value={"utility"}>Utility</MenuItem>
              <MenuItem value={"education"}>Education</MenuItem>
              <MenuItem value={"Personal Care	"}>Personal Care</MenuItem>
            </Select>
          </FormControl>
          <br />
          <TextField
            id="date"
            label="Date of Bill"
            type="date"
            value={date}
            name="date"
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br />
          {error && <p style={{color:"red"}}>{error}</p>}
          <Button
                      variant="contained"
                      startIcon={<SendIcon  />}
                    onClick={handleSubmit}
                    >
                      Submit
                    </Button>
        </Box>
      </Box>
    </div>
  );
};

export default UpdateBill;
