import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "../components/Card";

import devgrub from "../assets/images/devgrub.png";
import youtube from "../assets/images/youtube.png";
import evverest from "../assets/images/evverest.png";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Travis Scott",
          subTitle: "King of Rage",
          imgSrc: devgrub,
          link: "http://travisscott.com",
          selected: false
        },
        {
          id: 1,
          title: "Asap Rocky",
          subTitle: "King of Fashion",
          imgSrc: youtube,
          link: "https://www.awge.com",
          selected: false
        },
        {
          id: 2,
          title: "Ian Connor",
          subTitle: "King of Youth",
          imgSrc: evverest,
          link: "https://bornfrompain.jp",
          selected: false
        }
      ]
    };
  }

  handleCardClick = (id, card) => {
    console.log(id);
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items
    });
  };

  makeItems = items => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={e => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
