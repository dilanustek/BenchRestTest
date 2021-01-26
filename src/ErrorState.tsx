import { Component } from "react";

export default class ErrorState extends Component {
  render() {
    return (
      <div className="errorState">
        <p>We are having technical difficulties. Please try again later! </p>
        <img
          src="https://www.lovethispic.com/uploaded_images/274129-Sad-Puppy.jpg"
          alt="sad puppy"
        />
      </div>
    );
  }
}
