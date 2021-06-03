import React, { Component } from 'react'
import './App.css';
import Classes from './components/classes'
import CreateNewClass from './components/createNewClass'
import ClassesRendered from './components/classesRendered'
import SideBar from './components/SideBar';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      response: '',
      APIresponse: '',
      course: [],
      size: [],
      schedule: []

    }
    this.handleChangeNumber = this.handleChangeNumber.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.postData = this.postData.bind(this)
    this.add = this.add.bind(this)
    this.onGenerate = this.onGenerate.bind(this)

  }

  // async callAPI(){
  //   const url = "https://api.randomuser.me/"
  //   fetch(url)
  //       .then(res => res.json())
  //       .then(json => {
  //           const data = json
  //           this.setState({response : data.results[0].name.first})
  //       });

  //   const urlAPI = "http://localhost:4000/hidden"
  //      fetch(urlAPI)
  //       .then(resAPI => resAPI.json())
  //       .then(jsonAPI => {
  //           const dataAPI = jsonAPI
  //           console.log(dataAPI.name)
  //           this.setState({APIresponse : dataAPI.name.first , loading: false})
  //       })
  //       .catch(error => console.log('this is the fetch error',error))
  // }

  // componentDidMount(){
  //   this.callAPI()
  // }
  

  postData(event) {
    event.preventDefault()

    const urlAPI = "http://localhost:3000/"
    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ course: this.state.course })
    }

    console.log(this.state.name)

    fetch(urlAPI, requestOptions)
      .then(res => console.log(res))    
  }

  onGenerate(){
    const urlAPI = "http://localhost:3000/"
    fetch(urlAPI)
      .then(res => res.json())
      .then(json => {        
        this.setState({ schedule: json })
      })
  }

  handleChange(e) {
        this.setState({
          name: e.target.value,

        })
      }

  handleChangeNumber(e) {
        this.setState({
          size: e.target.value
        })
      }

  add(newCourse) {
        const { course } = this.state
    course.push(newCourse)
    this.setState({ course })

      }


  render() {
        return(
      <div className = "App" >
            <header className="App-header">
              
              <h1>Make your teacher's schedule on a few clicks</h1>
              <div>
                <CreateNewClass onSubmit={this.add} />

                <ul>
                  {
                    this.state.course.map(course => <Classes course={course} />)
                  }
                </ul>
                <form>
                  {/* <label>First name:</label><br></br> */}
                  {/* <input onChange={this.handleChange} id='name' value={this.state.name} type="text" id="fname" name="fname"></input><br></br> */}
                  <button onClick={this.postData}> Enviar </button>
                </form>
                  <button onClick={this.onGenerate}> Gerar Escala </button>
                <p >{rows}</p>
                
              </div>
            </header>


      </div>

    );
  }
}
export default App;