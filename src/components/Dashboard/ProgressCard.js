import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import Milestone from './Milestone';
import StudentInfo from './StudentInfo';

function ProgressCard({ userStudentDetails }) {
    let completedQuestBadges = parseInt(userStudentDetails["# of Quests Completed"])
    let completedSkillBadges = parseInt(userStudentDetails["# of Skill Badges Completed"])
    let clamp = (val, min, max) => {
        return val > max ? max : val < min ? min : val;
    }
    let milestones = [
        {
            milestoneTitle: "Milestone #1 - Complete any 10 quests & 5 skill badges in the program",
            milestoneCompletedQuestBadges: completedQuestBadges < 10 ? completedQuestBadges : 10,
            milestoneCompletedSkillBadges: completedSkillBadges < 5 ? completedSkillBadges : 5,
            hasMilestoneUnlocked: completedQuestBadges >= 10 && completedSkillBadges >= 5 ? true : false,
            milestoneProgressPercentage: clamp(((completedQuestBadges / 10) + (completedSkillBadges / 5)) * 50, 0, 100).toFixed(2),
            maxQuestBadges: 10,
            maxSkillBadges: 5,
            milestoneColor: "#4285F4",
            completedText: "WOHOOO! WAY TO GO BUDDY! 🎉"
        },
        {
            milestoneTitle: "Milestone #2 - Complete any 20 quests & 10 skill badges in the program",
            milestoneCompletedQuestBadges: completedQuestBadges < 20 ? completedQuestBadges : 20,
            milestoneCompletedSkillBadges: completedSkillBadges < 10 ? completedSkillBadges : 10,
            hasMilestoneUnlocked: completedQuestBadges >= 20 && completedSkillBadges >= 10 ? true : false,
            milestoneProgressPercentage: clamp(((completedQuestBadges / 20) + (completedSkillBadges / 10)) * 50, 0, 100).toFixed(2),
            maxQuestBadges: 20,
            maxSkillBadges: 10,
            milestoneColor: "#FBBC05",
            completedText: "Keep up the good work! 🔥"
        },
        {
            milestoneTitle: "Milestone #3 - Complete any 30 quests & 15 skill badges in the program",
            milestoneCompletedQuestBadges: completedQuestBadges < 30 ? completedQuestBadges : 30,
            milestoneCompletedSkillBadges: completedSkillBadges < 15 ? completedSkillBadges : 15,
            hasMilestoneUnlocked: completedQuestBadges >= 30 && completedSkillBadges >= 15 ? true : false,
            milestoneProgressPercentage: clamp(((completedQuestBadges / 30) + (completedSkillBadges / 15)) * 50, 0, 100).toFixed(2),
            maxQuestBadges: 30,
            maxSkillBadges: 15,
            milestoneColor: "#34A853",
            completedText: "You are awesome! 🤩🔥"

        },
        {
            milestoneTitle: "Ultimate Milestone: Complete 40 Quests & all 20 Skill Badges",
            milestoneCompletedQuestBadges: completedQuestBadges < 40 ? completedQuestBadges : 40,
            milestoneCompletedSkillBadges: completedSkillBadges < 20 ? completedSkillBadges : 20,
            hasMilestoneUnlocked: completedQuestBadges >= 40 && completedSkillBadges >= 20 ? true : false,
            milestoneProgressPercentage: clamp(((completedQuestBadges / 40) + (completedSkillBadges / 20)) * 50, 0, 100).toFixed(2),
            maxQuestBadges: 40,
            maxSkillBadges: 20,
            milestoneColor: "#EA4335",
            completedText: "Congrats! You totally rock! 💯"

        }
    ]
    return (
        <StyledProgressCard
            initial={{ opacity: 0, translateX: 2000 }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: -2000 }}
            transition={{ delay: 0.5 }}
        >
            <h1 className="greet-student">Welcome!! {userStudentDetails['Google Cloud Skills Boost Profile URL']} !</h1>
            <div className="progress-bars-container">
                {
                    milestones.map((milestone, id) => {
                        return <Milestone
                            key={id}
                            milestoneData={milestone}
                        />
                    })
                }
            </div>
            <StudentInfo studentData={userStudentDetails} />
            <p className="quest-message">Quest badges and Skill badges completed since your enrollment date will only be counted for progress. </p>
        </StyledProgressCard>
    );
}

export default ProgressCard;

let StyledProgressCard = styled(motion.div)`
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    border: 2px solid black;
    box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.29);
    border-radius: 10px;
    padding: 10px;
    .progress-bars-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .greet-student{
        font-size: 25px;
        text-align: center;
        margin: 0;
        padding: 0;
        margin-top: 10px;
        font-weight: 400;
        text-transform: capitalize;
    }
    .progress-item{
        display: flex;
        flex-direction: column;
        width: 280px;
        margin: 10px;
        .progress-title{
            font-style: normal;
            font-weight: bold;
            font-size: 10px;
            line-height: 15px;
            text-transform: uppercase;
            color: #000000;
        }
        .progress-bar{
            position: relative;
            /* box-shadow: 0px 0px 0px 20px #4285F4 inset; */
            border-radius: 40px;
            overflow: hidden;
            display: flex;
            align-items: center;
            padding: 5px 10px;
            height: 30px;
            box-sizing: border-box;
            p{
                z-index: 1;
                font-weight: 500;
                font-size: 12px;
                line-height: 18px;
                text-transform: uppercase;
                color: #FFFFFF;
                text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
                margin: 0;
                padding: 0;
            }
            .progress-width{
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
            }
        }
        .progress-info-container{
            margin-top: 5px;
            display: flex;
            justify-content: space-between;
            p{
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 18px;
                text-transform: uppercase;
                color: #000000;
                margin: 0;
                padding: 0;
            }
            .progress-info{
                display: flex;
            }
        }
    }
    .quest-message{
        font-size: 10px;
        text-align: center;
    }
    @media only screen and (max-width: 450px) {
        .progress-item{
            width: 90%;
        }
    }
`
