import * as React from "react";
import "./newtask.css";

import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { styled, Box } from "@mui/system";
import Modal from "@mui/base/Modal";
// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

// date
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

//date
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

//add button
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { Margin } from "@mui/icons-material";

// component

export default function ModalDemo() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  //date
  let today = new Date();
  let todayDate = today.getDate();
  let todayMonth = today.getMonth() + 1;
  let todayYear = today.getFullYear();
  todayDate = todayDate < 10 ? "0" + todayDate : todayDate;
  todayMonth = todayMonth < 10 ? "0" + todayMonth : todayMonth;
  today = `${todayYear}-${todayMonth}-${todayDate}`;

  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);

  const style1 = {
    borderRadius: "3px 0 3px 3px",
  };
  const style2 = {
    boxShadow: "1px 0px 4px 0px #383838",
  };
  console.log(title, description, startDate, endDate);

  const handleDateChange = (date, name) => {
    let getdate = date.$D < 10 ? "0" + date.$D : date.$D;
    let getmonth = date.$M + 1 < 10 ? "0" + (date.$M + 1) : date.$M + 1;
    let getyear = date.$y;
    console.log(`${getyear}-${getmonth}-${getdate}`);
    
    if (name == "startDate") setStartDate(`${getyear}-${getmonth}-${getdate}`);
    if (name == "endDate") setEndDate(`${getyear}-${getmonth}-${getdate}`);
  };

  const addNewTask = () => {
    if (title.trim() === "" || description.trim() === "") {
      return;
    }
    console.log(startDate,endDate)
    const data = {
      title: title.trim(),
      description: description.trim(),
      start_date: startDate,
      end_date: endDate,
      status: "in progress",
    };
    console.log(data);
    axios
      .post("http://89.116.30.81:8000/daily_task/insert/", data)
      .then((response) => {
        //  setComment(response.data);
        console.log(response);
      })
      .catch((err) => console.log("er", err));

    setTitle("");
    setDescription("");
  };

  return (
    <div id="newTask">
      <div className="align">
        <TriggerButton type="button" onClick={handleOpen}>
          Add Task
        </TriggerButton>
        <StyledModal
          aria-labelledby="unstyled-modal-title"
          aria-describedby="unstyled-modal-description"
          open={open}
          onClose={handleClose}
          slots={{ backdrop: StyledBackdrop }}
          style={style1}
          id="addtaskpopup"
        >
          <Box sx={style} style={style2}>
            <h6 className="text-center">NEW TASK</h6>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1 },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Title"
                variant="standard"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{ marginTop: 1 }}
              />
              <TextField
                id="standard-basic"
                label="Description"
                variant="standard"
                value={description}
                fullWidth
                multiline
                onChange={(e) => setDescription(e.target.value)}
                sx={{ marginTop: 1 }}
                 maxRows={8}
              />
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateRangePicker"]}>
                <DemoItem
                  // label=""
                  component="DateRangePicker"
                >
                  <DateRangePicker
                    defaultValue={[dayjs(startDate), dayjs(endDate)]}
                    // value={ste}
                    onChange={(e) => getDate(e)}
                    // className = "datePicker"
                    sx={{marginTop:1}}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider> */}

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  id="datepicker"
                  className="datePicker"
                  onChange={(date) => handleDateChange(date, "startDate")}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  id="datepicker"
                  className="datePicker"
                  onChange={(date) => handleDateChange(date, "endDate")}
                />
              </LocalizationProvider>
            </Box>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={addNewTask}
                sx={{ marginTop: 1, fontSize: "14px", padding: 0 }}
              >
                Add
              </Button>
            </Stack>
          </Box>
        </StyledModal>
      </div>
    </div>
  );
}

const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "MuiBackdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const blue = {
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme) => ({
  width: 400,
  borderRadius: "12px",
  padding: "16px 32px 24px 32px",
  backgroundColor: theme.palette.mode === "dark" ? "#0A1929" : "white",
  boxShadow: `0px 2px 24px ${
    theme.palette.mode === "dark" ? "#000" : "#383838"
  }`,
});

const TriggerButton = styled("button")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  border-radius: 12px;
  padding: 6px 12px;
  line-height: 1.5;
  background: transparent;
  border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[100] : grey[900]};

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &:focus-visible {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
  }
  `
);
