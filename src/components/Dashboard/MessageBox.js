import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function MessageBox({message}) {
    return (
        <StyledMessageDialogueBox
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 50 }}
            style={{
                backgroundColor: message.isError ? "rgb(245 179 174)" : "rgb(190 247 205)",
                border: `solid 2px ${message.isError ? "#EA4335" : "#34A853"}`
            }}
        >
            {message.msg}        
        </StyledMessageDialogueBox>
    );
}

export default MessageBox;

let StyledMessageDialogueBox = styled(motion.div)`
    width: 320px;
    margin: 20px auto;
    display: flex;
    padding: 5px 10px;
    color: black;
    border-radius: 10px;
    box-sizing: border-box;
    font-size: 15px;
    @media only screen and (max-width: 450px) {
      width: 90%;
      font-size: 13px;
    }
`