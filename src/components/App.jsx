import React from "react";
import List from "../components/List";

import { connect } from "react-redux";

class App extends React.Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          {lists.map((list) => (
            <div className="col-3">
              <List title={list.title} cards={list.cards} key={list.id} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);