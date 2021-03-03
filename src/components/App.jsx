import React from "react";
import List from "../components/List";
import AddButton from "../components/AddButton";
import { DragDropContext } from "react-beautiful-dnd";
import { connect } from "react-redux";

class App extends React.Component {
  onDragEnd = () => {};

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="container-fluid">
          <div className="row">
            {lists.map((list) => (
              <div className="col">
                <List
                  title={list.title}
                  cards={list.cards}
                  key={list.id}
                  idList={list.id}
                />
              </div>
            ))}
            <AddButton isList />
          </div>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
