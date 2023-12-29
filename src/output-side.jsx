/* eslint-disable react/prop-types */
import {dummyPerson,dummyWorks,profile,dummyEducations} from "./person";
import "./output-side.css";

function OutputSide({personData, workData, educationData}) {
    const person = personData;
    workData = (workData.length < 1) ? dummyWorks : workData;
    educationData = (educationData.length < 1) ? dummyEducations : educationData;
    return (
    <div className="output-side">
        <div className="a4-sheet grid-container">
                <section className="top-side"><TopSide personFirstName={person.firstName} personLastName={person.lastName} designation={person.designation} /></section>        
                <section className="left-side"><LeftSide email={person.email} phone={person.phone} location={person.location} citizenship={ person.citizenship} linkedin={person.linkedin   } /></section>
                <section className="right-side"><RightSide works={workData} educations={educationData} profileData={person.profile} interests={person.interests}/></section>
        </div>
    </div>); 
}

function TopSide({ personFirstName = "Muhammed Jasim", personLastName = "Quraish", designation = "Senior Software Architect"}) {
    return (
        <>
            <h2 className="person-name">{personFirstName + " " + personLastName}</h2>
            <h3 className="person-designation">{designation}</h3>
        </>
    );
}

function LeftSide({ email = "muhammedjasim@example.com", phone = "97151234569", location = "West Bank, Palestine", citizenship = "Palestine", linkedin = "ismailiyakub@linkedin.com" }) {
    return (
        <>
            <h3>Personal Info</h3>
            <h4>Email</h4>
            <div className="details">{ email}</div>
            <h4>Phone</h4>
            <div className="details">{ phone}</div>
            <h4>Location</h4>
            <div className="details">{ location}</div>
            <h4>Citizenship</h4>
            <div className="details">{citizenship}</div>
            <h4>Linkedin</h4>
            <div className="details">{ linkedin}</div>
        </>
    );
}

function RightSide({ works, educations, profileData = profile, interests = "Gaming, Football, Chess" }) {
    return (
        <>
            <section className="profile">{profileData}</section>
            <section className="work-experience">
                {(works.length > 0) && <h3>Work Experience</h3>}
                {works.map((work) => {
                    return (
                        <section className="work sub-section" key={work.id}>
                            <div className="left-sub">
                                <div className="start-date date">{work.startDate}</div>
                                <div className="end-date date">- {work.endDate}</div>
                            </div>
                            <div className="right-sub">
                                <h4 className="sub-header">{work.designation}</h4>
                                <div className="institution-name">{work.company}</div>
                                <PrintUl list={work.responsibilities} header = "Key Responsibilities" />
                                <PrintUl list={work.achievements} header="Achievements"/>
                            </div>
                        </section>
                    );
                })}
            </section>
            <section className="education">
                {(educations.length > 0) && <h3>Education</h3>}
                {educations.map((education) => {
                    return (
                        <section className="education sub-section" key={education.id}>
                            <div className="left-sub">
                                <div className="start-date date">{education.fromDate}</div>
                                <div className="end-date date">- {education.endDate}</div>
                            </div>
                            <div className="right-sub">
                                <h4 className="sub-header">{education.degree + " in " + education.subject}</h4>
                                <div className="institution-name">{education.university}</div>
                                <h5 className="sub-sub-header">CGPA{": " + education.cgpa + "   (of 10)" }</h5>
                            </div>
                        </section>
                    );
                })}
            </section>
            <section className="interests">
                <h3>Interests</h3>
                <div className="interest-items">{ interests}</div>
            </section>
            
            
        </>    
    );
}

function PrintUl({ list , header }) {
    if(list.length>0)
        return (
            <>
                <h5 className="sub-sub-header">{header}</h5>
                <div className="bullet-points">
                    <ul>
                        {
                            list.map((item) => {
                                return (<li key={item.id}>{item.text}</li>);
                        })}
                    </ul>
                </div>
            </>
        );
}

export default OutputSide;