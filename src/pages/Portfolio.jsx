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
      description: ' A functioning work day scheduler that allows the user to save events for each hour of a typical working day. It features dynamically updated HTML and CSS powered by JavaScript and jQuery, and Dayjs library.',
      imageUrl: 'https://github.com/ews578/work-day-scheduler/raw/main/assets/Screenshot%20(7).png',
      link: ''
    },
    {
      title: 'Note Taker',
      description: 'Description of project 3. This app uses an Express.js back end and will save and retrieve note data from a JSON file. Using this will allow you to create and delete notes at your own discretion.',
      imageUrl: 'https://github.com/ews578/Note-Pad/raw/main/public/assets/Screenshot%20(16).png',
      link: ''
    },
    {
      title: 'Project 4',
      description: 'Description of project 4',
      imageUrl: 'IMAGE_URL_FOR_PROJECT_4'
    }
  ];

  return (
    <Row xs={1} md={2} className="g-4">
      {projects.map((project, idx) => (
        <Col md={3} key={idx}>
          <Card>
            <a target="_blank" href={project.link}>
              <Card.Img variant="top" src={project.imageUrl} />
            </a>
            <Card.Body className="card-body-fixed-height"> {/* Apply the fixed height class */}
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>
                {project.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Project;