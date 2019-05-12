import React from 'react';
import './App.css';
import ListItems from './components/ListItem';
import Input from '../src/components/Input';

const initialData = [

  {
    name: "Random Guest",
    adult: true,
    companion: false,
    location: "Krakow",
    phoneNumber: "888 222 233",
    fbPhoto: "https://cdn0.iconfinder.com/data/icons/avatar-2/500/man-2-512.png",
    fbLink: "https://www.google.com",

  },

]




class App extends React.Component {
  state = {
    items: [...initialData],

    name: ' ',
    location: ' ',
    adult: false,
    companion: false,
    phoneNumber: ' ',
    img: ' ',
    facebook: ' ',



  }


  handleChange = (e) => {

    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value

    })

  }

  handleCheck = (e) => {

    const name = e.target.name;
    const checked = e.target.checked;

    this.setState({
      [name]: checked
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newGuest = {
      name: this.state.name,
      location: this.state.location,
      adult: this.state.adult,
      companion: this.state.companion,
      phoneNumber: this.state.phoneNumber,
      img: this.state.img,
      facebook: this.state.facebook,
    };



    this.setState({
      items: [...this.state.items, newGuest]
    })

    e.target.reset();
    this.setState({
      name: ' ',
      location: ' ',
      adult: false,
      companion: false,
      phoneNumber: ' ',
      img: ' ',
      facebook: ' ',
    })
  }


  render() {
    return (
      <div className="app--div--wrapper">
        <ListItems initialData={this.state.items} />
        <Input
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleCheck={this.handleCheck}
          state={this.state}

        />
      </div>
    );
  }
}

export default App;
