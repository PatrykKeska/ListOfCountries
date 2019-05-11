import React from 'react';
import './App.css';
import ListItems from './components/ListItem';
import Input from '../src/components/Input';

const initialData = [

  {
    name: "Poland",
    location: "Europe ",
    population: "38 mln",
    flag: "https://cdn.britannica.com/52/3552-004-D849A1D3.jpg",

  },
  {
    name: "Austria",
    location: "Europe ",
    population: "9 mln",
    flag: "https://www.flagstoreusa.com/Customer-Content/www/products/Photos/Full/austria_large.jpg",

  },
  {
    name: "Sweden",
    location: "Europe ",
    population: "10 mln",
    flag: "https://i0.wp.com/www.visionwear.com/wp-content/uploads/2011/09/sweden.gif?fit=550%2C345&ssl=1",

  },
  {
    name: "Usa",
    location: "North America ",
    population: "327 mln",
    flag: "https://www.united-states-flag.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/f/l/flgfhis1000024675_-00_15-star-spangled-banner-3ftx5ft-printed-polyester-flag.jpg"

  },
]




class App extends React.Component {
  state = {
    items: [...initialData],
  }

  handleInput = (e) => {
    e.preventDefault();

    const newCountry = {
      name: e.target[0].value,
      location: e.target[1].value,
      population: e.target[2].value + ' mln',
      flag: e.target[3].value,
    }

    this.setState({
      items: [...initialData, newCountry]
    })

    e.target.reset();

  }

  render() {
    return (
      <div className="app--div--wrapper">
        <ListItems initialData={this.state.items} />
        <Input handleFnc={this.handleInput} />
      </div>
    );
  }
}

export default App;
