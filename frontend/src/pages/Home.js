import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [aboutMe, setAboutMe] = useState({});

    useEffect(() => {
        const fetchAboutMe = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/`);
                setAboutMe(response.data);
            } catch (error) {
                console.error('Error fetching about me:', error);
            }
        };

        fetchAboutMe();
    }, []);

    return (
        <div>
            <h1>About Me</h1>
            <p>{aboutMe.Hello}</p>
            <h2>Skills</h2>
            <ul>
                {console.log(aboutMe)}
                {aboutMe.Skills && Array.isArray(aboutMe.Skills) ? (
                    aboutMe.Skills.map(skill => (
                        <li key={skill}>{skill}</li>
                    ))
                ) : (
                    <li>{aboutMe.Skills}</li>
                )}
            </ul>
            <h2>Education</h2>
            <p>{aboutMe.Education}</p>
            <h2>Experience</h2>
            <ul>
                {aboutMe.Experience && Array.isArray(aboutMe.Experience) ? (
                    aboutMe.Experience.map(experience => (
                        <li key={experience}>{experience}</li>
                    ))
                ) : (
                    <li>{aboutMe.Experience}</li>
                )}
            </ul>
            <h2>About Me</h2>
            <ul>
                {aboutMe['About me'] && Array.isArray(aboutMe['About me']) ? (
                    aboutMe['About me'].map(info => (
                        <li key={info}>{info}</li>
                    ))
                ) : (
                    <li>{aboutMe['About me']}</li>
                )}
            </ul>
        </div>
    );
};

export default Home;
