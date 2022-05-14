import React from 'react';
import styled from 'styled-components';

function StudentInfo({studentData}) {
    return (
        <StyledStudentInfo>
            <div
                className="student-info-card"
                style={{ backgroundColor: studentData['Enrolment Status'] === "All Good" ? "#34a853" : '#EA4335'  }}
            >
                <p className="student-info-card-title">Enrolment Status</p>
                <p className="student-info-card-status">{studentData['Enrolment Status']}</p>
            </div>
            <div className="student-info-card">
                <p className="student-info-card-title"># of Quests Completed</p>
                <p className="student-info-card-number-value">{studentData['# of Quests Completed']}</p>
            </div>
            <div className="student-info-card">
                <p className="student-info-card-title"># of Skill Badges Completed</p>
                <p className="student-info-card-number-value">{studentData['# of Skill Badges Completed']}</p>
            </div>
            <div className="student-info-card">
                <p className="student-info-card-title">Enrolment Date & Time</p>
                <p className="student-info-card-value">{new Date(studentData['Enrolment Date & Time']).toLocaleString("en-US")}</p>
            </div>
            <div className="student-info-card">
                <p className="student-info-card-title">YOUR INSTITUTION</p>
                <p className="student-info-card-value">{studentData['Institution']}</p>
            </div>
        </StyledStudentInfo>
    );
}

export default StudentInfo;

let StyledStudentInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 95%;
    margin: 10px auto;
    .student-info-card{
        background-color: #4285F4;
        padding: 5px;
        border-radius: 10px;
        padding: 10px;
        margin: 10px;
        max-width: 200px;
        .student-info-card-title{
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 18px;
            text-transform: uppercase;
            color: #FFFFFF;
            margin: 0;
            padding: 0;
        }
        .student-info-card-value{
            font-style: normal;
            font-weight: 600;
            font-size: 13px;
            text-transform: capitalize;
            color: #FFFFFF;
            margin: 0;
            padding: 0;
            margin-top: 10px;
        }
        .student-info-card-status{
            font-style: normal;
            font-weight: 600;
            font-size: 15px;
            text-transform: capitalize;
            color: #FFFFFF;
            margin: 0;
            padding: 0;
            margin-top: 10px;
        }
        .student-info-card-number-value{
            font-style: normal;
            font-weight: 800;
            line-height: 13px;
            text-transform: capitalize;
            color: #FFFFFF;
            font-size: 30px;
            margin: 20px 0 10px 0;
            padding: 0;
        }
    }
    
`