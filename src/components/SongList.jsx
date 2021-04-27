import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  renderedList() {
    return this.props.songs.map((song, i) => {
      return (
        <div className="item" key={i}>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderedList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
