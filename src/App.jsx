import { useState } from 'react'
import { nullEducations,nullPerson,nullWorks } from "./person";
import InputSide from './input-side';
import OutputSide from './output-side';
import "./App.css"

function App() {
  const [personData, setPersonData] = useState(nullPerson);
  const [workData, setWorkData] = useState(nullWorks);
  const [educationData, setEducationData] = useState(nullEducations);
  const [activeTab, setActiveTab] = useState("person");
  
  function handlePersonChange(person){
    setPersonData(person);
  }
  function handleWorkChange(work) {
    const newWork = work.slice();
    setWorkData(newWork);
  }
  function handleEducationChange(education) {
    const newEducation = education.slice();
    setEducationData(newEducation);
  }
  function handleTabChange(tab) {
    setActiveTab(tab);
  }
  return (
    <>
      <InputSide
        personData={personData} handlePersonChange={handlePersonChange}
        workData={workData} handleWorkChange={handleWorkChange}
        educationData={educationData} handleEducationChange={handleEducationChange}
        activeTab={activeTab} handleTabChange={handleTabChange}
      />
    <OutputSide personData={ personData} workData = {workData} educationData = {educationData} />
  </>);
}

export default App;
