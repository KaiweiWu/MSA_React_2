import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Background from 'D:/MSA_React_2/my-app/src/clouds.png';
import * as React from 'react';
import './App.css';

interface IState {
  results: any,
}

const sectionStyle = {
  backgroundImage: `url(${Background})`,
  height: "800px",
  width: "100%",
}

const styles = ({
  button: {
    margin: 200,
  },
  input: {
    display: 'none',
  },
  textField: {
    width: 200,
  },
});

class App extends React.Component<{}, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      results: "",
    };
    this.onClickAction = this.onClickAction.bind(this);
  }

  public onClickAction() {
      const inputValue = (document.getElementById("helperText") as HTMLInputElement).value;
      const url = "http://api.openweathermap.org/data/2.5/weather?q=" + inputValue + "&appid=f5f6506f9423a23fe54359e30b41b253";

      fetch(url, {
        headers: {
            "Content-Type": "text/plain",
          },
        method: "GET",
      })
    .then(response => {
      if (response.ok) {
        response.json().then((data:any) => this.setState({results: "Current weather: " + data.weather[0].description}))
      } else {
        this.setState({results: response.statusText})
      }
    })
  }

  public render() {
    return (
      <section style={ sectionStyle }>
      <div className="container-fluid">
      <div className="centreText">
        <h1>
        <TextField
          id="helperText"
          label="Enter in a location"
          defaultValue="London"
          className={"textField"}
          helperText="Must be spelled correctly"
          margin="normal"
        />
        </h1>
        <Button variant="contained" className={"button"} onClick={this.onClickAction}>
          Find
        </Button>
        <div className="weatherInfo">
          <p>{this.state.results}</p>
        </div>
      </div>
    </div>
    </section>
    );
  }
}




export default withStyles(styles)(App);