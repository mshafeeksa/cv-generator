class Person{
    constructor() {
        this.firstName;
        this.lastName;
        this.designation;
        this.profile;
        this.phoneNumber;
        this.location;
        this.citizenship;
        this.email;
        this.interests;
        this.linkedin;
    }
}

class Work {
    constructor(id = null) {
        this.id = id;
        this.company;
        this.startDate;
        this.endDate;
        this.designation;
        this.responsibilities;
        this.achievements;
    }
}

class Education{
    constructor(id = null) {
        this.id = id;
        this.university;
        this.fromDate;
        this.toDate;
        this.degree;
        this.subject;
        this.cgpa;
    }
}


//-----------------for test purposes--------------------//
const dummyPerson = new Person();
dummyPerson.firstName = "Mohammed";
dummyPerson.lastName = "Shafeek";
dummyPerson.designation = "Senior Software Engineer";
dummyPerson.profile = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eos rerum quaerat consectetur voluptatum quam voluptates veritatis officia maiores ullam, cupiditate deleniti error sint quo, autem a in eligendi dolor unde reiciendis natus. Facilis aperiam adipisci veritatis libero eius dolorum animi, corrupti quas voluptate nisi saepe culpa, dolorem non ipsa!";
dummyPerson.phoneNumber = "+971550543210";
dummyPerson.location = "Dubai, United Arab Emirates";
dummyPerson.email = "mshafeek@example.com";
dummyPerson.citizenship = "Indian";
dummyPerson.linkedin = "shafeeksa@linkedin.com"
const work = new Work(1);
work.company = "KPIT Technologies Ltd";
work.startDate = "Aug 2020";
work.endDate = "Aug 2022";
work.responsibilities = [{ id: 1, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, accusantium obcaecati quibusdam voluptates non velit eum id repellat natus quia." }, { id: 2, text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, accusantium obcaecati quibusdam voluptates non velit eum id repellat natus quia." }];
work.achievements = [{ id: 1, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, accusantium obcaecati quibusdam voluptates non velit eum id repellat natus quia." }, { id: 2, text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, accusantium obcaecati quibusdam voluptates non velit eum id repellat natus quia." }];
const education1 = new Education(1);
education1.university = "Anna University Chennai";
education1.fromDate = "Aug 2016";
education1.endDate = "Aug 2020";
education1.degree = "Bachelor of Engineering";
education1.subject = "Electronics and Communication";
education1.cgpa = "7.6";
dummyPerson.interests = ["Football", "Videogame", "Soccer"];

//-----dummy objects for page population-----//

const dummyWorks = [];
const dummyWork1 = new Work(1);
dummyWork1.achievements = [{ id: 1, text: "Popem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, accusantium obcaecati quibusdam voluptates non velit eum id repellat natus quia." }, { id: 2, text:"Kopem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, accusantium obcaecati quibusdam voluptates non velit eum id repellat natus quia." }];
dummyWork1.company = "XYZ Company";
dummyWork1.designation = "Junior Software Engineer";
dummyWork1.endDate = "Jan 2020";
dummyWork1.responsibilities = [{ id: 1, text: "Porem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, accusantium obcaecati quibusdam voluptates non velit eum id repellat natus quia." }, { id: 2, text:"Korem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, accusantium obcaecati quibusdam voluptates non velit eum id repellat natus quia." }];
dummyWork1.startDate = "Jan 2018"; 
dummyWorks.push(dummyWork1);
const profile = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ipsum ex nobis expedita cum temporibus voluptate, corrupti nemo. Esse tenetur voluptas deleniti voluptatem asperiores dignissimos nihil dolore necessitatibus impedit sed labore, fuga quis odio delectus adipisci ut amet.";

const dummyEducation1 = new Education(1);
dummyEducation1.cgpa = 8;
dummyEducation1.degree = "Bachelor of Engineering";
dummyEducation1.fromDate = "Aug, 2008";
dummyEducation1.toDate = "Aug, 2012";
dummyEducation1.subject = "Electronics";
dummyEducation1.university = "Anna University, Chennai";
const dummyEducations = [];
dummyEducations.push(education1);

const nullPerson = new Person();
const nullWorks = [];
const nullWork = new Work(1);
// nullWorks.push(nullWork);
const nullEducations = [];
const nullEducation = new Education(1);
// nullEducations.push(nullEducation);

export { dummyPerson, dummyWorks, profile, dummyEducations,nullPerson,nullEducations,nullWorks,Work,Education };