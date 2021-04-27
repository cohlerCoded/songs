import React from "react";
import { connect } from "react-redux";
const SongDetail = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.song.title}</h1>
      <h3>{props.song.duration}</h3>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
