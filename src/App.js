import logo from './logo.svg';
import './App.css';
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <section className="container w-100 d-flex flex-column align-items-center justify-content-center d-md-flex flex-md-row  bg-dark p-5">
        <Card className="m-2 w-50" style={{ borderRadius:'10px'}}>
      <Card.Body style={{backgroundColor:'aqua', display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center', borderRadius:'10px'}} >
        <Card.Title style={{fontSize:'32px'}}><Name name={'red polo'}/></Card.Title>
        <Card.Subtitle className="m-2 text-white"><Price price={'$40'}/></Card.Subtitle>
        <Card.Text>
        <Description/>
        </Card.Text>
        <Card.Link href="#">Image Link</Card.Link>
      </Card.Body>
    </Card>
        <Card className="m-2 w-50" style={{ borderRadius:'10px'}}>
      <Card.Body style={{backgroundColor:'aqua', display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center', borderRadius:'10px'}} >
        <Card.Title className="text-center" style={{fontSize:'32px'}}><Name name={'Nike Air Force1'}/></Card.Title>
        <Card.Subtitle className="m-2 text-white"><Price price={'$75'}/></Card.Subtitle>
        <Card.Text>
        <Description/>
        </Card.Text>
        <Card.Link href="#">Image Link</Card.Link>
      </Card.Body>
    </Card>
        <Card className="m-2 w-50" style={{ borderRadius:'10px'}}>
      <Card.Body style={{backgroundColor:'aqua', display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center', borderRadius:'10px'}} >
        <Card.Title style={{fontSize:'32px'}}><Name name={'Gucci Belt'}/></Card.Title>
        <Card.Subtitle className="m-2 text-white"><Price price={'$30'}/></Card.Subtitle>
        <Card.Text>
        <Description/>
        </Card.Text>
        <Card.Link href="#">Image Link</Card.Link>
      </Card.Body>
    </Card>
        </section>
    </div>
  );
}

export default App;
