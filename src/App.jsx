import React from "react";
import { BrowserRouter } from "react-router";

// Pages
import Landing from "./Pages/Landing/Landing";
// import Photography from "./Pages/Photography/Photography";
// import Portfolio from "./Pages/Portfolio/Portfolio";
// import NotFound from "./Pages/NotFound/NotFound";

// Functions
import { setIconDimensions } from "./Util/setIconDimensions";

// CSS
import "./App.scss";
import "./Variables.scss";
import "./Font.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.setIconDimensions = setIconDimensions.bind(this);
  }

  componentDidMount() {
    this.setIconDimensions();
    window.addEventListener("resize", this.setIconDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setIconDimensions.bind(this));
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
