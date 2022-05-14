import React from 'react';
import { motion } from 'framer-motion';

function StudentEmailForm({handleUserEmailFormSubmit,setUserEmail}) {
    return (
        <motion.form
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateX: -1000 }}
            className="student-email-form" 
            onChange={(e)=>{ setUserEmail(e.target.value) }}
            onSubmit={handleUserEmailFormSubmit}
        >
            <input 
                className="student-email-input"
                type="email"
                placeholder="Type in your email."
                required
            />
            <button
                onClick={()=>{}}
                className="student-form-submit-button"
                type="submit"
            >Check my progress</button>
        </motion.form>
    );
}

export default StudentEmailForm;