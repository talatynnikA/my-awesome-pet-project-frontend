import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Contacts = () => {
    const [contacts, setContacts] = useState({});

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/contacts`);
                setContacts(response.data['My contacts list']);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchContacts();
    }, []);

    return (
        <div>
            <h1>Contact List</h1>
            <ul>
                {console.log(contacts)}
                {contacts && Object.keys(contacts).map(key => (
                    <li key={key}>
                        {key}: {Array.isArray(contacts[key]) ? contacts[key].join(', ') : contacts[key]}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Contacts;
