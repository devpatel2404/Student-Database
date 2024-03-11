"use client"

import Link from "next/link";
import Home from "../page";
import {useState} from "react";

const FindStudent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleInputChange = (e) => {
        const { value } = e.target;
        setSearchQuery(value);
    }

    const handleSearch = () => {
        fetch(`http://localhost:8080/api/searchStudent?query=${searchQuery}`)
            .then(response => response.json())
            .then(data => setSearchResults(data))
            .catch(error => console.log('Error: ', error))
    }

    return (
        <main>
            <h1 className={"text-center font-bold text-4xl"}>Find A Student</h1>
            <div className={"flex justify-center"}>
                <input className={"m-2 text-black"}
                       type="text"
                       value={searchQuery}
                       onChange={handleInputChange}
                />
                <button onClick={handleSearch}>Search</button>

                {searchResults.length > 0 && (
                    <div>
                        <h2>Search Results</h2>
                        <ul>
                            {searchResults.map((student) => (
                                <li key={student.id}>
                                    {student.name} - {student.grade}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className={"flex justify-center"}>
                <Link href={"/"} className={"text-2xl border-2 border-white p-1 pl-2 pr-2"}>
                    <button>Exit</button>
                </Link>
            </div>
        </main>
    );
}

export default FindStudent;