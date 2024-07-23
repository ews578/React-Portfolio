import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Project() {
  const projects = [
    {
      title: 'Fill My Belly',
      description: 'A third party API designed to be a recipe generator. Search for recipes based with the food you have in your pantry.',
      imageUrl: 'https://github.com/jacksonjjones/Fill_My_Belly/raw/main/FMB%20screenshot.png',
      link: 'https://jacksonjjones.github.io/Fill_My_Belly/'
    },
    {
      title: 'Work Day Scheduler',
      description: 'A functioning work day scheduler that allows the user to save events for each hour of a typical working day. It features dynamically updated HTML and CSS powered by JavaScript and jQuery, and Dayjs library.',
      imageUrl: 'https://github.com/ews578/work-day-scheduler/raw/main/assets/Screenshot%20(7).png',
      link: 'https://ews578.github.io/work-day-scheduler/'
    },
    // Update the image URLs for the following projects
    {
      title: 'Note Taker',
      description: 'This app uses an Express.js back end and will save and retrieve note data from a JSON file. Using this will allow you to create and delete notes at your own discretion.',
      imageUrl: 'https://github.com/ews578/Note-Pad/raw/main/public/assets/Screenshot%20(16).png',
      link: 'https://radiant-fjord-57625-2832fa424737.herokuapp.com/'
    },
    {
      title: 'Weather App',
      description: 'This application will be used as a way for the user to input a specific location and receive a 5-day forecast for the given area.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWly6KIph33IQ0qzwzEmqgY-Fu4wNBKJ7jw&s',
      link: 'https://ews578.github.io/weather-dashboard/'
    },
    // Update the image URLs for the following projects
    {
      title: 'J.A.T.E',
      description: 'Just Another Text Editor. This application takes an existing text editor app and adds functionality for it to work as a PWA and function offline. This application is deployed through Heroku.',
      imageUrl: './assets/JATE.png',
      link: 'https://enigmatic-forest-36433-7572537927de.herokuapp.com/'
    },
    {
      title: 'E-Commerce',
      description: 'A back end application that allows store managers to create, update and delete categories, products, and tags for their inventory while using Insomnia.',
      imageUrl: './assets/ecommerce.png',
      link: 'https://drive.google.com/file/d/1sb0X2bEQox-W6dwLFFIYFDwKCSafm80J/view'
    },
    {
      title: 'Tech Blog',
      description: 'A Tech-Blog where users can sign up to create blog posts. The user can sign in and delete existing blog posts or comment on current blogs.',
      imageUrl: './assets/techblog.png',
      link: 'https://desolate-lowlands-29937-fc34c8976432.herokuapp.com/'
    },
    {
      title: 'Social Network API',
      description: 'An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.',
      imageUrl: 'https://github.com/ews578/Social-Network-API/raw/main/assets/Screenshot%20(26).png',
      link: 'https://drive.google.com/file/d/15PjriAbTIcQQFNsNT6ts9ySs3kmq8qau/view'
    }
  ];

  return (
    <div className="project-container" style={{ marginTop: '20px', paddingBottom: '20px', height: '500px', overflowY: 'scroll' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px', color: '#244c5e' }}>My Projects</h1>
      <p style={{ textAlign: 'center', color: '#244c5e', fontFamily: 'Arial, sans-serif', fontSize: '20px', marginBottom: '20px' }}>
        Here are a few examples of the projects I completed with my time in the program. Use the contact form to let me know any feedback you may have.
      </p>
      <Row xs={1} md={2} className="g-4">
        {projects.map((project, idx) => (
          <Col md={3} key={idx} style={{ height: '400px' }}>
            <Card className="custom-card" style={{ height: '100%' }}>
              <a target="_blank" href={project.link}>
                <Card.Img variant="top" src={project.imageUrl} />
              </a>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                  {project.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Project;