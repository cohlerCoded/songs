import React from "react";
import { connect } from "react-redux";
const SongDetail = ({ song }) => {
  if (!song) {
    return (
      <div>
        <h1>Select a Song</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{song.title}</h1>
      <h3>{song.duration}</h3>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
