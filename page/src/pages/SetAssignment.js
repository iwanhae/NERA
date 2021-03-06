import React from 'react';
import { Grid, Paper, TextField, Typography } from '@material-ui/core';
import {PageInfo, TimePicker, SimpleModal} from '../components';
import SettingsIcon from '@material-ui/icons/Settings';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Modal from '@material-ui/core/Modal';

function SetAssignment(props){
    const {as_info} = props;

        // data 정리

    let lecture_name = "";
    let title="";
    let start_date = Date.now();
    let end_date = Date.now();
    let score = "";
    let info = "";

    if(as_info!=undefined){
        let tmp = as_info.assignment_title.split('[');
        tmp = tmp[1].split(']');
        lecture_name = tmp[0];
        title=tmp[1];
        start_date = Date.now();
        end_date = as_info.deadline;
        score = as_info.score;
        info = as_info.assignment_info;
    }

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    let questions = [];

    if(as_info!=undefined){
        questions = as_info.question;
    }

    function printQuestion(){
        return(
            questions.map((q)=>
                <Grid>
                    <Paper>
                        <Grid><Typography variant="h6">{q.question_title}</Typography></Grid>
                        <Grid>{q.question_info}</Grid>
                    </Paper>
                </Grid>
            )
        );
    }

    function AddQuestion(){

    }

    function PrintModal(){
        return(
            <Paper>
                <form>
                    <TextField label="문제 제목" required rows={1} rowsMax={10000}></TextField>
                    <TextField label="문제 내용" required multiline rows={1} rowsMax={10000}></TextField>
                    <TextField label="문제 설명" required multiline rows={1} rowsMax={10000}></TextField>
                    <TextField label="배점" required rows={1} rowsMax={10000}></TextField>
                    <button onclick={AddQuestion}>저장</button>
                </form>
            </Paper>
        );
    }

    return(
        <Grid container direction="column">
            <PageInfo className="assignment_info"
                icon={SettingsIcon}
                mainTitle="과제별 설정"
                subTitle="" />
            <form className="setting_as_form">
                <Grid direction="column" className="setting_as_con">
                    <Grid container direction="row">
                        <Grid xs={6}><TextField label="강의명" required rows={1} rowsMax={10000} defaultValue={lecture_name}></TextField></Grid>
                        <Grid xs={6}><TextField label="과제명" required rows={1} rowsMax={10000} defaultValue={title}></TextField></Grid>
                    </Grid>
                    <TimePicker
                        start_date = {start_date}
                        end_date = {end_date}
                    />
                    <Grid container direction="row">
                        <Grid xs={6}><TextField label="배점" required rows={1} rowsMax={10000} defaultValue={score}></TextField></Grid>
                        <Grid xs={6}><TextField label="과제설명" required multiline rows={1} rowsMax={10000} defaultValue={info}></TextField></Grid>
                    </Grid>
                    
                    <Grid container direction="column">
                        {
                            printQuestion()
                        }
                        <Grid>
                            <AddCircleIcon fontSize="large" onClick={handleOpen}/>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                            >
                            {PrintModal()}
                            </Modal>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    );
}

export default SetAssignment;