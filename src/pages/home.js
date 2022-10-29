import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import DrawerAppBar from '../component/navbar';

import Button from "@mui/material/Button";
import {
  loadBillData,
  deleteBillData,
  loadBillDataByCategory,
} from "../redux/actions";

import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, hexToRgb } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: hexToRgb("#BFDFFF"),
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Home = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { bills } = useSelector((state) => state.data);
  let totalAmount = 0;


  bills.map((bill) => {
    totalAmount += parseInt(bill.amount);
  });
  useEffect(() => {
    dispatch(loadBillData());
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    if (window.confirm("Are you sure you want to delete this bill?")) {
      setCategory("All Categories");
      dispatch(deleteBillData(id));
    }
  };
  const [category, setCategory] = React.useState("All Categories");
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    if (event.target.value === "All Categories") {
      dispatch(loadBillData());
    } else {
      dispatch(loadBillDataByCategory(event.target.value));
    }
  };
  return (
    <div>
      <DrawerAppBar/>
     <Box  component="main" sx={{ p: 10 }}>
      <TableContainer sx={{ maxHeight: 460 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell align="center">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="category"
                    onChange={handleCategoryChange}
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
              </StyledTableCell>
              <StyledTableCell align="center">Amount</StyledTableCell>
              <StyledTableCell align="center">Date</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {bills.map((bill) => (
              <StyledTableRow
                key={bill.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell>{bill.description}</StyledTableCell>
                <StyledTableCell align="center">
                  {bill.category}
                </StyledTableCell>
                <StyledTableCell align="center">{bill.amount}</StyledTableCell>
                <StyledTableCell align="center">{bill.date}</StyledTableCell>
                <StyledTableCell align="center">
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    <Button  onClick={() => navigate("/updatebill/" + bill.id)}>
                      Edit</Button>
                    <Button
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDelete(bill.id)}
                    >
                      Delete
                    </Button>
                  </ButtonGroup>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <h2>Total Amount: {totalAmount}</h2>
        </Grid>
        <Grid item xs={6}>
          <div>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={() => navigate("/addBill")}
            >
              Add Bill
            </Button>
          </div>
        </Grid>
      </Grid>
     
    </div>
  );
};

export default Home;
