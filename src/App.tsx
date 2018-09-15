import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Background from 'D:/MSA_React_2/my-app/src/clouds.png';
import * as React from 'react';
import './App.css';

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

class App extends React.Component<{}> {

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
        <Button variant="contained" className={"button"} onClick={onClickAction()}>
          Find
        </Button>
        <p id = "demo">A function is triggered when the button is clicked. The function outputs some text in a p element with id="demo".</p>
      </div>
    </div>
    </section>
    );
  }
}

function onClickAction(x, y) {
    return x + y;
}


export default withStyles(styles)(App);