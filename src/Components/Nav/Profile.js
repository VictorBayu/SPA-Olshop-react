import React from 'react';
import { Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/Profile.css";

const Profile = () => {
    return (
        <div>
            <h3 className="judul_bio">Profile</h3>
            <div className="border">
                <Image variant="top" src="https://i.ibb.co/sF6L7zR/2.jpg" roundedCircle />
                <Card.Body>
                    <Card.Text>Victor Bayu Christian Baretha</Card.Text>
                    <Card.Text>Malang, 09 Mei 1998</Card.Text>
                    <Card.Text>D-IV Teknik Informatika</Card.Text>
                    <Card.Text>victorbayu85@gmail.com</Card.Text>
                </Card.Body>
            </div>
        </div>
    )
}
export default Profile