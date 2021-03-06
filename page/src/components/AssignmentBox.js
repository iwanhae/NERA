import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {Link} from 'react-router-dom';
import { Paper } from '@material-ui/core';

const AssignmentBox = (props)=>{
  const {type, as_info} = props;
  const state = as_info[3];
  const deadline = as_info[1].getFullYear() + "-" 
                + (as_info[1].getMonth()+1 <= 9 ? "0" : "") + (as_info[1].getMonth()+1) + "-"
                + (as_info[1].getDate() <= 9 ? "0" : "") + as_info[1].getDate() + " "
                + (as_info[1].getHours() <= 9 ? "0" : "") + as_info[1].getHours() + ":"
                + (as_info[1].getMinutes() <= 9 ? "0" : "") + as_info[1].getMinutes()
                
  let color="black";
  let state_word = "error";

  if(type===0){
    switch(state){
      case 0: state_word="마감 전"; color = "rgb(56, 142, 60)"; break;
      case 1: state_word="채점 전"; color = "#f50057"; break;
      case 2: state_word="채점 완료"; color = "black"; break;
    }
  }else if(type===1){
    switch(state){
      case 0: state_word="제출 필요"; color = "#f50057"; break;
      case 1: state_word="제출 완료"; color = "rgb(56, 142, 60)"; break;
      case 2: state_word="채점 중"; color = "#3f51b5"; break;
      case 3: state_word="채점 완료"; color = "black"; break;
    }
  }

  const useStyles = makeStyles((theme) => ({
    circleSytle : {
      background: color,
      padding: '5px 10px',
      color: 'white'
    }
  }));
  
  const classes = useStyles();

  
  return(
    <Paper className="assignment_box">
      <Link to ={"/home/assignment/"+as_info[0]}>
            <div className="a_box_header">
              <div className="a_box_title">{as_info[2]}</div>
              <div className={classes.circleSytle}>{state_word}</div>
            </div>
            <div className="a_box_deadline">{deadline} 까지</div>
      </Link>
    </Paper>
  );
}

export default AssignmentBox;