/* eslint-disable react/prop-types */
import "./input-side.css";
import { Work,Education } from "./person";
function InputSide({ personData, handlePersonChange, workData, handleWorkChange, educationData, handleEducationChange, activeTab, handleTabChange }) {
    return (<div className="input-side">
        <div className="main-container">
            <div className={`person-button button ${(activeTab==="person")?"selected-button":""}`} onClick={()=>handleTabChange("person")}>Personal Details</div>
            <div className={`work-button button ${(activeTab==="work")?"selected-button":""}`} onClick={()=>handleTabChange("work")}>Work History</div>
            <div className={`education-button button ${(activeTab==="education")?"selected-button":""}`} onClick={()=>handleTabChange("education")}>Education History</div>
            <div className={`display-area ${(activeTab === "person") ? "person-color" : (activeTab === "work") ? "work-color" : (activeTab === "education") ? "education-color" : ""}`} >
                <DisplayInputs personData={personData} handlePersonChange={handlePersonChange} workData={workData} handleWorkChange={handleWorkChange} educationData={educationData} handleEducationChange={handleEducationChange} activeTab={ activeTab} />
            </div>
        </div>
    </div>);
}

function DisplayInputs({ personData, handlePersonChange, workData, handleWorkChange, educationData, handleEducationChange,activeTab }) {
    if (activeTab === "person") {
        return <PersonalInputs personData={personData} handlePersonChange={handlePersonChange} />
    }
    else if (activeTab === "work") {
        return <WorkInputs workData={workData} handleWorkChange={handleWorkChange} />
    }
    else if (activeTab === "education") {
        return <EducationInputs educationData={educationData} handleEducationChange={handleEducationChange} />
    }
}

function PersonalInputs({ personData, handlePersonChange }) {
    const questionaire = [
        { id: "firstName", placeHolder: "Enter first name", type: "text", value: personData.firstName },
        { id: "lastName", placeHolder: "Enter last name", type: "text", value: personData.lastName},
        { id: "designation", placeHolder: "Enter designation", type: "text", value: personData.designation },
        { id: "email", placeHolder: "Enter email id", type: "email", value: personData.email },
        { id: "phone", placeHolder: "Enter phone number", type: "tel", value: personData.phone },
        { id: "location", placeHolder: "Enter your current city and country", type: "text", value: personData.location },
        { id: "citizenship", placeHolder: "Enter country of your citizenship", type: "text", value: personData.citizenship },
        { id: "linkedin", placeHolder: "Enter linkedin id", type: "text", value: personData.linkedin },
        { id: "interests", placeHolder: "Enter your interests", type: "text", value: personData.interests }
    ]
    return (
        <>
            {questionaire.map((question) => {
                return <div key={question.id} className="input-container"><input type={question.type} id={question.id} placeholder={question.placeHolder} value={question.value} onChange={(e)=> handlePersonChange(changedObject(personData,question.id,e.target.value))}/></div>
            })}
            <div className="input-container"><textarea id="profile   " cols="30" rows="10" placeholder="Enter a profile description" onChange={(e)=> handlePersonChange(changedObject(personData,"profile",e.target.value))} value={personData.profile}></textarea></div>
        </> 
    );
}
function WorkInputs({ workData, handleWorkChange }) {
    return (
        <> 
            <div className="display-container">
                {(workData.length > 0) &&
                    <div className="sub-section">
                        {workData.map((work,index) => {
                            return (<WorkDetailsInput key={work.id} work={work} workArray={ workData} handleWorkChange={handleWorkChange} index={index} />);
                        })}
                    </div>}
                <div className="add-button" onClick={()=>addNewWork(workData,handleWorkChange)}>+</div>
            </div>
        </>
    );
}

function WorkDetailsInput({ work, workArray, handleWorkChange, index }) {
    return (
        <div className="work-block">
            <div className="delete-work-button" onClick={()=>{handleWorkDelete(work,workArray,handleWorkChange)}}></div>
            <h3 className="header">{`Work ${index+1}` }</h3>
            <section className="date-section">
                <div><h4 className="caption-date">Start Date</h4>
                    <div className="input-container"><input type="month" id={`start-date-${work.id}`} value={work.startDate} onChange={(e) => { handleWorkChange(changedArrayObject(workArray, changedObject(work, "startDate", e.target.value))) }} /></div></div>
                <div><h4 className="caption-date">End Date</h4>
                    <div className="input-container"><input type="month" id={`end-date-${work.id}`} value={work.endDate} onChange={(e) => handleWorkChange(changedArrayObject(workArray, changedObject(work, "endDate", e.target.value)))} /></div></div>
            </section>
            <div className="input-container"><input type="text" id={`work-designation-${index + 1}`} placeholder="Enter designation" value={work.designation} onChange={(e) => handleWorkChange(changedArrayObject(workArray, changedObject(work, "designation", e.target.value)))} /></div>
            <div className="input-container"><input type="text" id={`work-company-${index + 1}`} placeholder="Enter company name" value={work.company} onChange={(e) => handleWorkChange(changedArrayObject(workArray, changedObject(work, "company", e.target.value)))} /></div>
            <section className="responsibilities-section sub-sub-section">
                <ULInputs header="Responsibilities" inputArray={work.responsibilities} work={work} workArray={workArray} handleWorkChange={ handleWorkChange} mainIndex={index} propertyName={"responsibilities"} placeHolder={"Enter a responsibility"} />
            </section>
            <section className="achievements-section sub-sub-section">
                <ULInputs header="Achievements" inputArray={work.achievements} work={work} workArray={workArray} handleWorkChange={ handleWorkChange} mainIndex={index} propertyName={"achievements"} placeHolder={"Enter an achievement"} />
            </section>

        </div>
    );
}

function handleWorkDelete(work, workArray, handleWorkChange) {
    const newWorkArray = workArray.filter((workElement) => {
        if (workElement.id !== work.id) {
            return workElement;
        }
    });
    handleWorkChange(newWorkArray);
}

function handleEduDelete(edu, eduArray, handleEducationChange) {
    const newEduArray = eduArray.filter((eduElement) => {
        if (eduElement.id !== edu.id) {
            return eduElement;
        }
    });
    handleEducationChange(newEduArray);
}

function ULInputs({ header, inputArray, work, workArray, handleWorkChange,mainIndex, propertyName,placeHolder }) {
    return (
        <>
            <h4>{header}</h4>
            {inputArray.map((element,index) => {
                return (<div  key={element.id}  className="outer-container">
                    <div className="input-container"><input type="text" id={`work-${propertyName}-${index + 1}${mainIndex}`} placeholder={placeHolder} value={element.text} onChange={(e) => handleWorkChange(changedArrayObject(workArray, changedObject(work, propertyName, changedArrayObject(inputArray, changedObject(element, "text", (e.target.value))))))} /></div>
                    <div className="delete-line-button" onClick={()=>handleDeleteSubArray(element.id,inputArray, propertyName,work,workArray,handleWorkChange)}></div>
                </div>);
            })}
            <div className="inner-add-button add-button" onClick={()=>handleAddSubArray(inputArray,work,workArray,propertyName,handleWorkChange)}>+</div>
        </>
    );
}

function handleAddSubArray(inputArray,work,workArray, propertyName,handleWorkChange) {    
    const id = getNewId(inputArray);
    inputArray.push({ id: id, text: "" });
    const newArray = inputArray.slice();
    const newWork = changedObject(work, propertyName, newArray);
    const newWorkArray = changedArrayObject(workArray, newWork);
    handleWorkChange(newWorkArray);
}

function handleDeleteSubArray(id, inputArray, propertyName, work, workArray, handleWorkChange) {    
    const finalArray = inputArray.filter((element) => {
        if (element.id !== id)
            return element;
    });
    const newWork = changedObject(work, propertyName, finalArray);
    const newWorkArray = changedArrayObject(workArray, newWork);
    console.log(newWorkArray);
    handleWorkChange(newWorkArray);
}

function EducationInputs({ educationData, handleEducationChange }) {
    return (
        <> 
            <div className="display-container">
                {(educationData.length > 0) &&
                    <div className="sub-section">
                        {educationData.map((edu,index) => {
                            return (<EducationDetailsInput key={edu.id} edu={edu} eduArray={ educationData} handleEducationChange={handleEducationChange} index={index} />);
                        })}
                    </div>}
                <div className="add-button" onClick={()=>addNewEducation(educationData,handleEducationChange)}>+</div>
            </div>
        </>
    );
}

function EducationDetailsInput({edu,eduArray,handleEducationChange,index}) {
    return (
        <div className="education-block">
            <div className="delete-edu-button" onClick={()=>{handleEduDelete(edu,eduArray,handleEducationChange)}}></div>
            <h3 className="header">{`Education ${index+1}` }</h3>
            <section className="date-section">
                <div><h4 className="caption-date">Start Date</h4>
                    <div className="input-container"><input type="month" id={`from-date-${edu.id}`} value={edu.fromDate} onChange={(e) => { handleEducationChange(changedArrayObject(eduArray, changedObject(edu, "fromDate", e.target.value))) }} /></div></div>
                <div><h4 className="caption-date">End Date</h4>
                    <div className="input-container"><input type="month" id={`to-date-${edu.id}`} value={edu.toDate} onChange={(e) => handleEducationChange(changedArrayObject(eduArray, changedObject(edu, "toDate", e.target.value)))} /></div></div>
            </section>

            <div className="input-container"><input type="text" id={`edu-degree-${index + 1}`} placeholder="Enter degree" value={edu.degree} onChange={(e) => handleEducationChange(changedArrayObject(eduArray, changedObject(edu, "degree", e.target.value)))} /></div>

            <div className="input-container"><input type="text" id={`edu-subject-${index + 1}`} placeholder="Enter subject" value={edu.subject} onChange={(e) => handleEducationChange(changedArrayObject(eduArray, changedObject(edu, "subject", e.target.value)))} /></div>

            <div className="input-container"><input type="text" id={`edu-university-${index + 1}`} placeholder="Enter university name" value={edu.university} onChange={(e) => handleEducationChange(changedArrayObject(eduArray, changedObject(edu, "university", e.target.value)))} /></div>
            
            <div className="input-container"><input type="text" id={`edu-cgpa-${index + 1}`} placeholder="Enter CGPA (out of 10)" value={edu.cgpa} onChange={(e) => handleEducationChange(changedArrayObject(eduArray, changedObject(edu, "cgpa", e.target.value)))} /></div>
        </div>
    );
}

function changedObject(originalObject, changedProperty, changedValue) {
    const newObject = { ...originalObject, [changedProperty]: changedValue };
    return newObject;
}

function changedArrayObject(inputArray, inputElement) {
    const newInputArray= inputArray.map((element) => (element.id === inputElement.id) ? inputElement : element);
    return newInputArray;
}

function addNewWork(workData, handleWorkChange) {
    const id = getNewId(workData);
    const newWork = new Work(id + 1);
    newWork.responsibilities = [{id:1,text:""},{id:2,text:""}];
    newWork.achievements = [{id:1,text:""},{id:2,text:""}];
    const newWorkData = workData.slice();
    newWorkData.push(newWork);
    handleWorkChange(newWorkData);
}

function addNewEducation(educationData, handleEducationChange) {
    const id = getNewId(educationData);
    const newEducation = new Education(id);
    educationData.push(newEducation);
    handleEducationChange(educationData);
}


function getNewId(inputArray) {
    if (inputArray.length === 0)
        return 1;
    return (inputArray[(inputArray.length) - 1].id) + 1;
}

export default InputSide;