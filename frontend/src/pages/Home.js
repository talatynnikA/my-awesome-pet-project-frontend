import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [aboutMe, setAboutMe] = useState({});

    useEffect(() => {
        const fetchAboutMe = async () => {
            try {
                const response = await axios.get('/');
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
                {aboutMe.Skills && aboutMe.Skills.map(skill => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
            <h2>Education</h2>
            <p>{aboutMe.Education}</p>
            <h2>Experience</h2>
            <ul>
                {aboutMe.Experience && aboutMe.Experience.map(exp => (
                    <li key={exp}>{exp}</li>
                ))}
            </ul>
            <h2>About Me</h2>
            <ul>
                {aboutMe['About me'] && aboutMe['About me'].map(info => (
                    <li key={info}>{info}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
