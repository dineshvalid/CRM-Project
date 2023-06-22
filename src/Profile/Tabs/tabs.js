
import React, { useEffect } from "react";
import "./tabs.css";
import Todo from "./Todo/todo";
import Skills from "./Skills/skills";
import RatingValue from "../Rating/rating";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import DescriptionIcon from "@mui/icons-material/Description";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Textarea from '@mui/joy/Textarea';
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Select, { selectClasses } from "@mui/joy/Select";

// import Box from '@mui/material/Box';--
import TextField from '@mui/material/TextField';
import StarIcon from '@mui/icons-material/Star';

/*  Basic Information------*/
import InfoIcon from "@mui/icons-material/Info";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import CheckIcon from '@mui/icons-material/Check';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import axios from "axios";

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

import { List, ListItem, ListItemText } from '@mui/material';

import { TextareaAutosize } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';


import MenuItem from '@mui/material/MenuItem';

import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

import DateRangePicker from '@wojtekmaj/react-daterange-picker';



// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import Stack from '@mui/material/Stack';
// import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker';
// import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker';

// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// import DatePicker from 'react-datepicker';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'react-datepicker/dist/react-datepicker.css';

import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';

import SendIcon from '@mui/icons-material/Send';





const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}



/* component starts--------*/

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [task, setTask] = React.useState('')
  const [date, setDate] = React.useState('');
  const [commandGet, setcommandGet] = React.useState([]);

  const [taskReset, settaskRest] = React.useState('');
  const [timeReset, settimeReset] = React.useState(null);

  const [startDate, setStartDate] = React.useState(null);
  const [empty, setEmpty] = React.useState('');

  const [dateTernry , setDateTernry] = React.useState(false);
  const [getDateval,setGetDateVal] = React.useState([]);


  // const handleStartDateChange = (date) => {
  //   setStartDate(date);
  // };

  // const handleEndDateChange = (date) => {
  //   setEndDate(date);
  // };

  const [value1, setValue1] = React.useState(
    [
      {
        id: '1',
        Input: 'This is the Workspace',
        Time: '12:50 AM'
      },
      {
        id: '2',
        Input: 'This is the Workspace',
        Time: '12:50 AM'
      }

    ]
  )

  const [activeIndex, setActiveIndex] = React.useState(null); // // Edit mode flag
  const [daterange, setDaterange] =  React.useState([new Date(), new Date()]);
  const [deleteCheck,setDeleteCheck] = React.useState('');

  const textareaStyle = {
    '&:focus': {
      backgroundColor: 'yellow',
    },
  };

  const textFieldStyle = {
    fontSize: '13px', // Adjust the font size as per your requirement
    padding: '-11px -11px', 
  };

  const textareaStyle1 = {
    border: 'none',
    resize: 'none',
    outline: 'none',
     width: '150px'
    // Add any additional styling you need
  };

  const dateRangePickerStyle = {
    padding: '16px', // Adjust the padding value according to your preference
    border: 'none',
  };




  const handleEdit = (index) => {
    setActiveIndex(index); // Enable edit mode
  };

  const data = [
    { id: 1, name: 'Object 1', value: 10 },
    { id: 2, name: 'Object 2', value: 20 }
  ];

  const resetVal = (id) => {

    const foundObject = commandGet.find(obj => obj.id === id);
    console.log('foundObject:', foundObject);
    console.log('foundObject.time:', foundObject.time);
    console.log('timeReset:', typeof timeReset);
    let time = ''

    if (foundObject.time == timeReset || timeReset == null) {
      time = foundObject.time;
      console.log('Time:', time);
    } else {
      time = timeReset
      console.log('Object not found with the specified ID');
    }



    setActiveIndex(null)
    console.log('ID===>>>>', id)
    // console.log('commandGet===>>>', commandGet)
    const data = {
      task: taskReset,
      time: time
    }


    console.log('data===>>>', data)
    axios.put(`http://89.116.30.81:8000/comment/update/${id}/`, data).then((RES1) => {
      console.log('RES1', RES1)
    }).catch(err => console.log('ERR_++>>', err))
  }

  const handleInputChange = (index, e) => {
    e.preventDefault();
    const updatedValue1 = [...commandGet];
    updatedValue1[index].task = e.target.value;
    setcommandGet(updatedValue1);
    settaskRest(e.target.value)
  };

  const handleTimeChange = (index, e) => {
    e.preventDefault();
    const updatedValue1 = [...commandGet];
    updatedValue1[index].time = e.target.value;
    setcommandGet(updatedValue1);
    settimeReset(e.target.value);
    console.log('e.target.value===>>>', e.target.value)
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const onSubmitForm = (e) => {

    e.preventDefault();
    // window.location.reload();

    console.log('task===>>>>', task)
    console.log('date======>>>>>>', date)


    const getDate = date;
    const hours = getDate.$H
    const minutes = getDate.$m
    const ChooseDate = getDate.$d

    // const setDate = new Date(ChooseDate);
    // const extractedDate = setDate.toUTCString().slice(0, -4);
  // const formattedDate = extractedDate.toLocaleDateString('en-GB');
  const dateString = ChooseDate.toString();
  // const extractedDate =dateString.substring(0, dateString.lastIndexOf(')') + 1);

  const extractedDate = dateString.replace(' (India Standard Time)', '');

  console.log('extractedDate======>>>>>>', extractedDate)

//     const convertDate = ChooseDate.map(date => date.toDateString());

//     const dateConvert = new Date(convertDate);
// const perfectDate = dateConvert.toLocaleDateString('en-GB');

    let period;
    if (hours < 12) {
      period = "AM";
    } else {
      period = "PM";
    }


  

    const data = {
      task: task,
      hours: hours,
      minutes: minutes,
      period: period,
      findDate: extractedDate,

    }

    axios.post('http://89.116.30.81:8000/comment/insert/', data)
      .then((response) => {
        console.log('resss', response);
      })
      .catch(err => console.log('err===>>>>>', err))

    console.log('data===>>>>', data)
    // console.log('year===>>>>',year)
    setTask('')
    setDate('');
    setEmpty(data)

  }


  useEffect(() => {
    axios.get('http://89.116.30.81:8000/comment/list/').then((RES) => {
      console.log('RESPONSE', RES);
      setcommandGet(RES.data)
      console.log('RES.data===>>>', RES.data)
      console.log('3333', commandGet)
    }).catch(err => console.log('ERROR222', err))
  }, [empty,deleteCheck]);

  const commetDelete = (id) => {
    console.log('DELETE ID', id);
    axios.delete(`http://89.116.30.81:8000/comment/delete/${id}/`).then((val) => {

      console.log('VAL', val)
      setDeleteCheck(val)
    }).catch(err => console.log('err==>>', err))
  }

  const filterDate = () =>{
    console.log('Date===>>>',daterange)
    const [startDateString, endDateString] = daterange.map(date => date.toDateString());
    console.log('startDateString===..>>>',startDateString); // Output: "Thu Jun 01 2023"
console.log('endDateString===>>>',endDateString); 

const startDate_check = new Date(startDateString);
const endDate_check = new Date(endDateString);
const startDate = startDate_check.toLocaleDateString('en-GB');
const endDate = endDate_check.toLocaleDateString('en-GB');
// console.log('formattedDate===..>>>',formattedDate); 
console.log('startDate===..>>>',startDate); 
console.log('endDate===..>>>',endDate); 
const date = {
  startDate : startDate,
  endDate : endDate
} 
// console.log('date===>>>',date); 
axios.get(`http://89.116.30.81:8000/comment/list/filter/?startDate=${startDate}&endDate=${endDate}`).then((res)=>{
  console.log('res===>>>',res.data);
  setGetDateVal(res.data);
  setDateTernry(true);
}).catch(err=>console.log('err===>>',err))

setDaterange('')

  }
 


  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="  icon position tabs example scrollable auto"
        >
          <Tab
            icon={<DescriptionIcon />}
            iconPosition="start"
            label="Basic Information"
            {...a11yProps(0)}
          />
          <Tab
            icon={<KeyboardDoubleArrowUpIcon />}
            iconPosition="start"
            label="Skills"
            {...a11yProps(1)}
          />
          <Tab
            icon={<PersonPinIcon />}
            iconPosition="start"
            label="Employment History"
            {...a11yProps(2)}
          />
          <Tab
            icon={<PersonPinIcon />}
            iconPosition="start"
            label="Portfolio"
            {...a11yProps(3)}
          />
          <Tab
            icon={<PersonPinIcon />}
            iconPosition="start"
            label="Education"
            {...a11yProps(4)}
          />
          <Tab
            icon={<QueryBuilderIcon />}
            iconPosition="start"
            label="Work History"
            {...a11yProps(5)}
          />
          <Tab
            icon={<ListAltIcon />}
            iconPosition="start"
            label="Todo List"
            {...a11yProps(6)}
          />
        </Tabs>
      </Box>
      <Box sx={{ marginLeft: '30px' }}>
        <TabPanel sx={{ fontSize: "30px" }} value={value} index={0}>
          <section className="basic-information-section">
            <div className="overview-section">
              <div className="d-flex heading justify-content-between">
                <div className="">
                  <b>Additional overview</b>
                </div>
                <div>
                  <a href="#">
                    info <InfoIcon />
                  </a>
                </div>
              </div>
              <div className="overview-content content">
                <div className="row">
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-6">Team members</div>
                      <div className="col-md-6">{""}</div>
                      <div className="col-md-6">Background</div>
                      <div className="col-md-6">{"Not "}</div>
                      <div className="col-md-6">Demand Salary</div>
                      <div className="col-md-6">{"$3000-$4000"}</div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6 link-color">Links</div>
                      <div className="col-md-6"></div>
                      <div className="col-md-6">On-Required</div>
                      <div className="col-md-6">{"On site required"}</div>
                      <div className="col-md-6">Remote Frienfdly</div>
                      <div className="col-md-6">{"Available"}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-interview-section">
              <div className="d-flex heading justify-content-between">
                <div className="">
                  <b>Post Interview skill Assessment</b>
                </div>
                <div>
                  <a href="#">View Full Feedback</a>
                </div>
              </div>
              <div className="post-interview-content content">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-4">Responsive web Design</div>
                      <div className="col-md-8 d-flex">
                        <RatingValue rating={5} />({5} out of 5)
                      </div>
                      <div className="col-md-4">Corporate Brand Identity</div>
                      <div className="col-md-8 d-flex">
                        <RatingValue rating={2.5} />({2.5} out of 5)
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-5">User Interface Design</div>
                      <div className="col-md-7 d-flex">
                        <RatingValue rating={3} />({3} out of 5)
                      </div>
                      <div className="col-md-5">Label and Package Design</div>
                      <div className="col-md-7 d-flex">
                        <RatingValue rating={4.5} />({4.5} out of 5)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="attachments-documents-section">
              <div className="d-flex heading justify-content-between">
                <div className="">
                  <b>Attachments Documents</b>({3} in total)
                </div>
                <div>
                  <a href="#">View All</a>
                </div>
              </div>
              <div className="attachments-documents-content content">
                <div className="row">
                  <div className="col-md-6">
                    <a href="#">
                      <PictureAsPdfIcon />
                      {"kjkfj"}
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="#">
                      <PictureAsPdfIcon />
                      {"vkfdjvkjdk"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </TabPanel>
      </Box>
      <TabPanel value={value} index={1}>
        <Skills />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Employment History
      </TabPanel>
      <TabPanel value={value} index={3}>
        Portfolio
      </TabPanel>
      <TabPanel value={value} index={4}>
        Education
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Box
          component="form"
          sx={{
            // '& .MuiTextField-root': { m: 1, width: '25ch' },
            // backgroundColor: '#6ab4f64a',
            backgroundImage: "linear-gradient(to right, #3399ff, #ff0000)",
            // height: '100vh',
            paddingBottom:'30px'
          }}
          noValidate
          autoComplete="off"
        >
          {/* <div>
        
       
        <TextField
          id="outlined-multiline-static"
          // label="Multiline"
          placeholder="welcome"
          multiline
          rows={4}
          // defaultValue="Default Value"
        />
      </div> */}

          <Box sx={{ padding: '2%' }}>

          

            <Box sx={{ marginTop: '2%',  }}>

              {/* <FormControl sx={{ width:'80%',
                borderRadius: '10px', border: '1px solid black', backgroundColor: 'white', "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    border: "none"
                  }
                },
              }}  >
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  sx={{}}
                  startAdornment={<TextareaAutosize onChange={e => setTask(e.target.value)}
                  style={textareaStyle1}
                    value={task}
                    label="outlined"
                    placeholder='Design Team Meeting '
                   
                    InputProps={{
                      classes: {
                        input: 'no-border',
                      },
                    }}
                    id="outlined-adornment-password"
                    type='text'
                    disableUnderline={true}
                    sx={{
                      border: '0px solid white',  backgroundColor: 'white', padding: '15px', "& .MuiOutlinedInput-root": {
                        "& > fieldset": {
                          border: "none"
                        }
                      }
                    }} size="md" name="Size" position="start" />}
                  endAdornment={
                    <InputAdornment sx={{ backgroundColor: 'white' }} position="end">


                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateTimePicker']}>
                          <DateTimePicker value={date} label=" " onChange={e => setDate(e)} />
                        </DemoContainer>
                      </LocalizationProvider>

                    




                      <SendIcon sx={{ cursor: 'pointer', marginLeft: '10px', marginTop: '5px' }} onClick={onSubmitForm}  />

                    </InputAdornment>
                  }
             
                />

              </FormControl> */}
            </Box>

           

            <Box sx={{display:'flex',justifyContent:'space-between', width:'100%'}}>
             
            <Box sx={{borderRadius:'10px',padding:'-20px', width:'55%', display:'flex',alignItems:'center',backgroundColor:'white', "& .MuiOutlinedInput-root": {
                        "& > fieldset": {
                          border: "none"
                        }
                      }}}>
              <TextareaAutosize   value={task} placeholder="TASK" onChange={e => setTask(e.target.value)}  style={textareaStyle1} sx={{ "& .MuiOutlinedInput-root": {
                        "& > fieldset": {
                          border: "none"
                        }
                      }}}/>
              <LocalizationProvider  dateAdapter={AdapterDayjs}>
                        <DemoContainer sx={{width:'65%',}} components={['DateTimePicker']}>
                          <DateTimePicker  value={date} label=" " onChange={e => setDate(e)} />
                        </DemoContainer>
                      </LocalizationProvider>
                      <SendIcon sx={{ cursor: 'pointer', marginLeft: '10px', marginTop: '5px',marginRight:'5px' }} onClick={onSubmitForm}  />
                      </Box>
                      <Box sx={{width: '368px', backgroundColor:'white',borderRadius:'10px', border:'1px solid black',marginLeft:'20px',display:'flex',alignItems:'center' }}>
            <DateRangePicker sx={{width:'10px'}} onChange={setDaterange} value={daterange} localeText={{ start: 'Check-in', end: 'Check-out' }} />
            <CheckIcon onClick={filterDate}/>
            </Box>



           
            
           

            </Box>

            

           

             <Box sx={{ marginTop: '45px'}}>
              {dateTernry ? <Box sx={{  flexGrow: 1, width: '103%',marginLeft:'-5px' ,height:'290px',overflowY:'scroll' }}>
              <Grid container spacing={1} columns={27}>
                {getDateval.map((object, index) => (
                  <Grid  sx={{ marginBottom: '45px', marginTop:'7px' }} item xs={6.7} key={object.id}>
                    <Grid className="zoom-effect" sx={{ backgroundColor: 'white', border: '1px solid black', width: '98%', height: '150%', borderRadius: '10px' }} container >
                      <Grid disabled={activeIndex !== index} >
                        <Box  sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                          <Box  >
                            <TextField
                              InputProps={{
                                style: textFieldStyle,
                              }}
                              size="small"
                              disabled={activeIndex !== index} // Disable TextField if not active
                              value={object.time}
                              sx={{  marginLeft:'5px', "& label": { color: "black" }, "& fieldset": { border: 'none' }, "&.MuiOutlinedInput-notchedOutline": { border: "none" }, width: '75%', backgroundColor: "#6ab4f64a", borderRadius: '10px' }}
                              onChange={(e) => handleInputChange(index, e)}
                            />
                          </Box>
                          <Box>

                            <Box sx={{ display: 'flex', padding: '5px', width: '100%' }}>
                              <Box sx={{ width: '50%' }}>
                                {activeIndex === index ? (
                                  // <CheckIcon onClick={() => setActiveIndex(null)}/>
                                  <CheckIcon sx={{ cursor: 'pointer', padding: '5px' }} onClick={() => resetVal(object.id)} />

                                ) : (
                                  <ModeEditOutlineIcon sx={{ cursor: 'pointer', padding: '5px' }} onClick={() => handleEdit(index, object.id)} />

                                )}
                              </Box >
                              <Box sx={{ width: '50%' }}>

                                <DeleteForeverIcon onClick={() => commetDelete(object.id)} sx={{ marginLeft: '3px', paddingRight: '5px', cursor: 'pointer' }} />
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid disabled={activeIndex !== index} item xs={12}>
                        <Textarea
                          className="disabledTextarea"
                          disabled={activeIndex !== index} // Disable TextField if not active
                          value={object.task}
                          sx={{
                            marginLeft:'8px',
                            "& label": { color: "black" }, "& fieldset": { border: 'none' }, "& .MuiOutlinedInput-root": {
                              "& > fieldset": {
                                border: "none"
                              }
                            }, "& label": { color: "black" }, "& fieldset": { border: 'none' }, "&.MuiOutlinedInput-notchedOutline": { border: "none" }, width: '90%'
                          }}
                          onChange={(e) => handleInputChange(index, e)}
                        />
                      </Grid>

                    </Grid>

                  </Grid>
                ))}
              </Grid>
            </Box> 
            :
            
            <Box sx={{ flexGrow: 1, width: '103%',marginLeft:'-5px' ,height:'290px',overflowY:'scroll',}}>
            <Grid container spacing={2} columns={27}>
              { commandGet.map((object, index) => (
                <Grid sx={{ marginBottom: '45px', marginTop:'7px' }} item xs={6.7} key={object.id}>
                  <Grid className="zoom-effect" sx={{ backgroundColor: 'white', border: '1px solid black',width: '100%',  height: '150%', borderRadius: '10px' }} container >
                    <Grid disabled={activeIndex !== index} >
                      <Box  sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                        <Box  >
                          <TextField
                            InputProps={{
                              style: textFieldStyle,
                            }}
                            size="small"
                            disabled={activeIndex !== index} // Disable TextField if not active
                            value={object.time}
                            sx={{  marginLeft:'5px', "& label": { color: "black" }, "& fieldset": { border: 'none' }, "&.MuiOutlinedInput-notchedOutline": { border: "none" }, width: '75%', backgroundColor: "#6ab4f64a", borderRadius: '10px' }}
                            onChange={(e) => handleInputChange(index, e)}
                          />
                        </Box>
                        <Box>

                          <Box sx={{ display: 'flex', padding: '5px', width: '100%' }}>
                            <Box sx={{ width: '50%' }}>
                              {activeIndex === index ? (
                                // <CheckIcon onClick={() => setActiveIndex(null)}/>
                                <CheckIcon sx={{ cursor: 'pointer', padding: '5px' }} onClick={() => resetVal(object.id)} />

                              ) : (
                                <ModeEditOutlineIcon sx={{ cursor: 'pointer', padding: '5px' }} onClick={() => handleEdit(index, object.id)} />

                              )}
                            </Box >
                            <Box sx={{ width: '50%' }}>

                              <DeleteForeverIcon onClick={() => commetDelete(object.id)} sx={{ marginLeft: '3px', paddingRight: '5px', cursor: 'pointer' }} />
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid disabled={activeIndex !== index} item xs={12}>
                      <Textarea
                        className="disabledTextarea"
                        disabled={activeIndex !== index} // Disable TextField if not active
                        value={object.task}
                        sx={{
                          marginLeft:'8px',
                          "& label": { color: "black" }, "& fieldset": { border: 'none' }, "& .MuiOutlinedInput-root": {
                            "& > fieldset": {
                              border: "none"
                            }
                          }, "& label": { color: "black" }, "& fieldset": { border: 'none' }, "&.MuiOutlinedInput-notchedOutline": { border: "none" }, width: '90%'
                        }}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </Grid>

                  </Grid>

                </Grid>
              ))}
            </Grid>
          </Box>
            
            }
             </Box>

           

          </Box>

        </Box>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Todo />
      </TabPanel>
    </Box>
  );
}