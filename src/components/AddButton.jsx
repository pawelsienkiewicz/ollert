import React from "react";
import styled from "styled-components";
import { PlusCircle } from "react-bootstrap-icons";
import Card from "./Card";
import Textarea from "react-textarea-autosize";
import { connect } from "react-redux";
import { addList } from "../actions/listAction";

const StyledListFooter = styled.div`
  background: inherit;
  display: flex;
  align-items: flex-end;
  width: auto;
  height: auto;
  padding: 6px;
  margin: 6px;
  color: grey;
  opacity: 0.75;
`;

class AddButton extends React.Component {
  state = {
    isOpen: false,
    text: "",
  };

  openForm = () => {
    this.setState({ isOpen: true });
  };

  closeForm = (event) => {
    this.setState({ isOpen: false });
  };

  handleInput = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  hadleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;
    if (text) {
      dispatch(addList(text));
    }
    return;
  };
  renderAddButton = () => {
    const { isList } = this.props;
    return (
      <StyledListFooter onClick={this.openForm}>
        {isList ? (
          <div>
            <PlusCircle size={14} />
            Add another list
          </div>
        ) : (
          <div>
            <PlusCircle size={14} />
            Add another card
          </div>
        )}
      </StyledListFooter>
    );
  };

  renderAddForm = () => {
    const { isList } = this.props;
    const placeholderTitle = isList
      ? "Enter a list title"
      : "Enter a card title ";
    const placeHolderButton = isList
      ? "Enter a list title"
      : "Enter a card title ";
    return (
      <div>
        <Card
          text={
            <Textarea
              placeholder={placeholderTitle}
              onBlur={this.closeForm}
              value={this.state.text}
              onChange={this.handleInput}
            />
          }
        ></Card>
        <button onMouseDown={this.hadleAddList}>
          Dodaj  
        </button>
      </div>
    );
  };

  render() {
    return this.state.isOpen ? this.renderAddForm() : this.renderAddButton();
  }
}

export default connect()(AddButton);
