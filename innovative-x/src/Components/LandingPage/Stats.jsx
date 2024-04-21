import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Stats(props) {
  console.log(props.data);
  props = props.data
  return (
   
    <div style={{padding:'5px'}}>
    <div style={{display:'flex',flexDirection:'row' ,gap:'5px', justifyContent:'space-around', margin:'50px'}}>   
    <Card style={{ width: '18rem'}}>
      <Card.Body>
        <Card.Title>{props[0]['title']}</Card.Title>
        <Card.Text style={{ fontSize: '2rem' }}>
          {props[0]['number']}
        </Card.Text>
        <Card.Text style={{ fontSize: '1 rem', color: '#787888', cursor: 'pointer'}}>
          View reports
        </Card.Text>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props[1].title}</Card.Title>
        <Card.Text style={{ fontSize: '2rem' }}>
        {props[1].number}
        </Card.Text>
        <Card.Text style={{ fontSize: '1 rem', color: '#787888', cursor: 'pointer'}}>
          View reports
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props[2].title}</Card.Title>
        <Card.Text style={{ fontSize: '2rem' }}>
          {props[2].number}
        </Card.Text>
        <Card.Text style={{ fontSize: '1 rem', color: '#787888', cursor: 'pointer'}}>
          View reports
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props[3].title}</Card.Title>
        <Card.Text style={{ fontSize: '2rem' }}>
        {props[3].number}
        </Card.Text>
        <Card.Text style={{ fontSize: '1 rem', color: '#787888', cursor: 'pointer'}}>
          View reports
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
  );
}

export default Stats