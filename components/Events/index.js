import React, { Component } from "react"
import { Content, Text, List, ListItem, Left, Right, Body } from "native-base"
import DatePicker from "react-native-datepicker"
import { TouchableOpacity, View } from "react-native"
import DateTimePicker from "react-native-modal-datetime-picker"
import moment from "moment"

class Events extends Component {
  constructor(props) {
    super(props)
    this.state = { startDate: moment(), endDate: moment().add(3, "months") }
  }

  handleDatePick = date => {
    if (this.state.currentDate === "startDate") {
      this.setState({ startDate: moment(date), isDateTimePickerVisible: false })
    } else if (this.state.currentDate === "endDate") {
      this.setState({ endDate: moment(date), isDateTimePickerVisible: false })
    }
  }

  showDatePicker = currentDate => {
    this.setState({ currentDate, isDateTimePickerVisible: true })
  }
  render() {
    return (
      <Content>
        <Text style={{ textAlign: "center", fontSize: 20, marginTop: 5 }}>
          Events
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 5
          }}
        >
          <TouchableOpacity onPress={() => this.showDatePicker("startDate")}>
            <Text>{this.state.startDate.format("MM/DD/YYYY")}</Text>
          </TouchableOpacity>
          <Text> -> </Text>
          <TouchableOpacity onPress={() => this.showDatePicker("endDate")}>
            <Text>{this.state.endDate.format("MM/DD/YYYY")}</Text>
          </TouchableOpacity>

          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePick}
            onCancel={() => this.setState({ isDateTimePickerVisible: false })}
          />
        </View>

        <List style={{ marginTop: 8 }}>
          <ListItem avatar>
            <Body>
              <Text>Kumar Pratik</Text>
              <Text note>
                Doing what you like will always keep you happy . .
              </Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
        </List>
      </Content>
    )
  }
}

export default Events
