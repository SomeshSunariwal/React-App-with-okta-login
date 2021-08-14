import React from "react";

function Spinner() {
  return (
    <div>
      <div class="text-center">
        <div class="spinner-grow text-success m-2" role="status"></div>
        <div class="spinner-grow text-danger m-2" role="status"></div>
        <div class="spinner-grow text-warning m-2" role="status"></div>
        <h6>Loading. . . .</h6>
      </div>
    </div>
  );
}

export default Spinner;
