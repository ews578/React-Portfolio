import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Project() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1',
      imageUrl: 'https://github.com/jacksonjjones/Fill_My_Belly/raw/main/FMB%20screenshot.png'
    },
    {
      title: 'Project 2',
      description: 'Description of project 2',
      imageUrl: 'https://github.com/ews578/work-day-scheduler/raw/main/assets/Screenshot%20(7).png'
    },
    {
      title: 'Project 3',
      description: 'Description of project 3',
      imageUrl: 'https://github.com/ews578/Note-Pad/raw/main/public/assets/Screenshot%20(16).png'
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
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={project.imageUrl} />
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
  );
}

export default Project;