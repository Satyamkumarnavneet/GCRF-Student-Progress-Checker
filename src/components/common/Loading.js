import React from 'react';
import styled from 'styled-components'
import { motion, AnimatePresence} from 'framer-motion'
function Loading(props) {
    return (
        <AnimatePresence>
            <StyledLoadingContainer
                initial={{opacity: 0, translateX: "-50%"}}
                animate={{opacity: 1, translateX: "-50%"}}
                exit={{opacity: 0, translateX: "-50%"}}
            >
                <img src="loading.svg" alt=""/>
                <p>Loading....</p> 
            </StyledLoadingContainer>
        </AnimatePresence>
    );
}

export default Loading;

let StyledLoadingContainer = styled(motion.div)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,50%);
    background-color: white;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.193);
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-radius: 5px;
    img{
        width: 35px;
        margin-right: 10px;
    }
`