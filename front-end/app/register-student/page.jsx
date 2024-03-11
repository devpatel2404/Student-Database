"use client"
import Link from "next/link";
import Home from "../page";
import {useState} from "react";

const registerStudent = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [student, setStudentData] = useState({
        name: "",
        gender: "",
        address: "",
        gradeLevel: "",
        gpa: "",
        schoolId: "",
        creditsCompleted: ""
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setStudentData({...student, [name]: value});
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/api/newStudent', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(student),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {console.log('Success:', data);
                setStudentData({
                    name: "",
                    gender: "",
                    address: "",
                    gradeLevel: "",
                    gpa: "",
                    schoolId: "",
                    creditsCompleted: ""
                });

            })
            .catch(error => console.error('Error:', error));
    }

    return(
        <main>
            <h1 className={"text-center font-serif text-4xl"}>Register New Student</h1>
            <p className={"text-center font-serif text-lg m-1.5"}>Fill Out the Form below for</p>
            <form className={"m-auto border-2 border-white w-96"} method={"post"} onSubmit={handleSubmit}>
                <h1 className={"text-lg ml-2 mt-1 mb-1"}>Legal Name:</h1>
                <input name={"name"} className={"text-black ml-2 mt-0 mb-1"} placeholder={"John Doe"}  onChange={handleInputChange}></input>
                <h1 className={"text-lg ml-2 mt-1 mb-1"}>Gender</h1>
                <select name={"gender"} id={"gender-select"} className={"text-black m-1 ml-2 mt-0 text-center p-0.5"}  onChange={handleInputChange}>
                    <option value={""}>Select Option</option>
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                    <option value={"Non-Binary"}>Non-Binary</option>
                    <option value={"Other"}>Prefer not to say</option>
                </select>
                <h1 className={"m-2 mt-1 mb-1 text-lg"}>Address:</h1>
                <input name={"address"} className={"m-2 mt-0 text-black"}  onChange={handleInputChange}></input>
                <h1 className={"m-2 mt-0 mb-1 text-lg"}>Grade Level:</h1>
                <select name={"gradeLevel"} id={"gradeLevel"} className={"text-black m-2 mt-0 text-center p-0.5"} onChange={handleInputChange}>
                    <option value={""}>Select Option</option>
                    <option value={9}>Freshman</option>
                    <option value={10}>Sophomore</option>
                    <option value={11}>Junior</option>
                    <option value={12}>Senior</option>
                </select>
                <h1 className={"m-2 mt-1 mb-1 text-lg"}>GPA:</h1>
                <input name={"gpa"} type={"number"} className={"m-2 mt-0 text-black"} max={4.0} step={"0.000001"} onChange={handleInputChange}></input>
                <h1 className={"m-2 mt-1 mb-1 text-lg"}>ID:</h1>
                <input name={"schoolId"} className={"m-2 mt-0 text-black"} onChange={handleInputChange}></input>
                <h1 className={"m-2 mt-1 mb-1 text-lg"}>Credits Completed:</h1>
                <input name={"creditsCompleted"} className={"m-2 mt-0 text-black"} onChange={handleInputChange}></input>
                <div className={"flex justify-evenly mb-4 mt-4"}>
                    <button type={"submit"} className={"border-2 border-white text-lg p-1.5"} >Register Student</button>
                    <Link href={"/"}><button type={"reset"} className={"border-2 border-white text-lg p-1.5"}>Exit Registration</button></Link>
                </div>
            </form>
        </main>
    );
}

export default registerStudent;