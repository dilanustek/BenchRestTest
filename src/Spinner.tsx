import { Component } from "react";
import Loader from "react-loader-spinner";
import "./Spinner.css";

interface State {
  timedOut: boolean;
}

// if the server takes more than 500s, show spinner
export default class Spinner extends Component<{}, State> {
  state = {
    timedOut: false,
  };

  private _timer: number | null = null;

  componentDidMount() {
    this._timer = window.setTimeout(() => {
      this.setState({ timedOut: true });
    }, 500);
  }

  componentWillUnmount() {
    if (this._timer) {
      window.clearTimeout(this._timer);
    }
  }

  render() {
    return (
      <div className="spinnerContainer">
        {this.state.timedOut ? (
          <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
        ) : null}
      </div>
    );
  }
}
