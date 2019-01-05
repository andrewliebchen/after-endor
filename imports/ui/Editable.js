import React, { Component } from "react";
import { Text, Input, Button, Flex, Link } from "rebass";

class Editable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      value: this.props.value
    };
  }

  render() {
    return (
      <Flex>
        {this.state.editing ? (
          <Flex>
            <Input
              defaultValue={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
            />
            <Button
              onClick={event => {
                this.props.onSave(this.state.value);
                this.setState({ editing: false });
              }}
            >
              Save
            </Button>
          </Flex>
        ) : (
          <Text>
            {this.props.value}{" "}
            <Link
              onClick={() => this.setState({ editing: !this.state.editing })}
            >
              Edit
            </Link>
          </Text>
        )}
      </Flex>
    );
  }
}

export default Editable;
