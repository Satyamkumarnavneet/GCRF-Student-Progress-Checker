import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion'
import MessageBox from './MessageBox';
import StudentEmailForm from './StudentEmailForm';
import ProgressCard from './ProgressCard.js'
// import Leaderboard from './Leaderboard';

function Dashboard({ studentsData, setIsLoading, showLeaderboard }) {
    let [userEmail, setUserEmail] = useState(null)
    let [showProgressCard, setShowProgressCard] = useState(false)
    let [message, setMessage] = useState(null)
    let [userStudentDetails, setUserStudentDetails] = useState(null)
    let handleUserEmailFormSubmit = (e) => {
        setMessage(false)
        e.preventDefault()
        setIsLoading(true)
        if (studentsData?.data) {
            let foundStudent = studentsData.data.find(student => {
                return student["Student Email"] === userEmail
            })
            if (foundStudent) {
                setUserStudentDetails(foundStudent)
                setIsLoading(false)
                setShowProgressCard(true)
            } else {
                setIsLoading(false)
                setMessage({
                    msg: "No Email address found. Please check your email. Use Email used in enrollment form.",
                    isError: true
                })
            }
        } else {
            setMessage({
                msg: "Some Error occured.",
                isError: true
            })
            setIsLoading(false)
        }
        // setShowProgressCard(true)
    }
    return (
        <StyledDash>
            <AnimatePresence>
                {
                    !showProgressCard && !showLeaderboard &&
                    <StudentEmailForm
                        handleUserEmailFormSubmit={handleUserEmailFormSubmit}
                        setUserEmail={setUserEmail}
                    />

                }
            </AnimatePresence>
            <AnimatePresence>
                {
                    showProgressCard && !showLeaderboard &&
                    <ProgressCard userStudentDetails={userStudentDetails} />
                }
            </AnimatePresence>
            {/* <AnimatePresence>
                {
                    showLeaderboard &&
                   // <Leaderboard studentsData={studentsData} />
}
            </AnimatePresence> */}
            <AnimatePresence>
                {
                    message && <MessageBox message={message} />
                }
            </AnimatePresence>
        </StyledDash>
    );
}

export default Dashboard;

let StyledDash = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    padding-bottom: 10px;
    /* margin-top: 20px; */
    min-width: 400px;
    max-width: 820px;
    width: 70vw;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    .student-email-form{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 0px;
    }
    .student-email-input{
        background: #FFFFFF;
        box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.29);
        border-radius: 39px;
        border: none;
        font-size: 18px;
        padding: 10px 20px;
        outline: none;
        min-width: 300px;
        width: 30vw;
        text-align: center;   
        transition: all 0.2s ease-in-out;
        :focus{
            box-shadow: 0px 4px 20px -3px rgba(255, 0, 0, 0.296);
        }  
    }
    .student-form-submit-button{
        background: #4285F4;
        box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.29);
        border-radius: 39px;
        border: none;
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 15px;
        padding: 8px 15px;
        font-weight: 500;
        color: white;
        outline: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        :hover{
            box-shadow: 0px 4px 20px -3px rgb(0, 110, 255);
            transform: scale(0.95)
        }
    }
    @media only screen and (max-width: 700px) {
        padding: 0px;
        min-width: unset;
        width: 90%;
    }
    @media only screen and (max-width: 450px) {
        padding: 0px;
        min-width: unset;
        width: 90%;
        .student-email-input{
            width: 90%;
            max-width: unset;
            min-width: unset;
        }
    }
`