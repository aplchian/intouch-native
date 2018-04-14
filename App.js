import React, { Component } from "react"
import {
  Container,
  Header,
  Content,
  Footer,
  Icon,
  FooterTab,
  Button,
  Left,
  Segment,
  Right,
  Title,
  Text,
  Body
} from "native-base"
import moment from "moment"
import Events from "./components/Events"

console.disableYellowBox = true

export default class FooterTabsExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: "events"
    }
  }

  render() {
    const Daysheet = () => {
      return (
        <Content>
          <Text style={{ textAlign: "center", fontSize: 20, marginTop: 5 }}>
            Today is {moment().format("dddd, MMM Do")}!🤘🏻
          </Text>
        </Content>
      )
    }

    return (
      <Container>
        <Header hasTabs>
          <Left />
          <Body>
            <Title>D45</Title>
          </Body>
          <Right />
        </Header>
        {this.state.currentView === "today" && <Daysheet />}
        {this.state.currentView === "events" && <Events />}
        <Footer>
          <FooterTab>
            <Button
              active={this.state.currentView === "today"}
              onPress={() => this.setState({ currentView: "today" })}
            >
              <Text>Today</Text>
            </Button>
            <Button
              active={this.state.currentView === "events"}
              onPress={() => this.setState({ currentView: "events" })}
            >
              <Text>Events</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}
