import './App.css';
import Papa from 'papaparse'
import { useEffect, useState } from 'react';

import Loading from './components/common/Loading'
import Header from './components/common/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Footer from './components/common/Footer'

function App() {
  let [isLoading,setIsLoading] = useState(true)
  let [studentsData,setStudentsData] = useState([])
  let [showLeaderboard,setShowLeaderboard] = useState(false)
  useEffect(()=>{
    setIsLoading(true)
    Papa.parse("/studentData/data.csv", {
      download: true,
      header: true,
      complete: function(results) {
        //Sorting based on the number of quest badges + skill badges  
        results.data.sort((student1,student2)=>{
          return (parseInt(student2["# of Quests Completed"]+student2["# of Skill Badges Completed"]))-parseInt((student1["# of Quests Completed"]+student1["# of Skill Badges Completed"]))
        })
        setStudentsData(results)
        setIsLoading(false)
      }
    });
  },[])
  return (
    <div className="page">
      { isLoading && <Loading />}
      <Header 
        showLeaderboard={showLeaderboard}
        setShowLeaderboard={setShowLeaderboard}
      />
      <Dashboard 
        showLeaderboard={showLeaderboard}
        studentsData={studentsData}
        setIsLoading={setIsLoading}
      />
      <Footer />
    </div>
  );
}

export default App;
