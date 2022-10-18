import React from "react"
import ProfileImg from "./Assets/ProfileImg.webp"
class App extends React.Component {

  state = {
    fullName: "Celia Almeda",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ! Lorem ipsum dolor sit.",
    imgSrc: ProfileImg,
    profession: "FullStack Web Developper",
    shows: true,
  }

  toggle() {
    this.setState({shows: !this.state.shows})
  }

  render() {

    return (
      <>

        <div className="px-4 py-5">

          {!this.state.shows &&

            <div className="card mb-3 m-auto border-dark" style={{maxWidth:540}}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={this.state.imgSrc} width={179.33} height={250} alt="img.webp" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title" style={{color: "red"}}>{this.state.fullName}</h5>
                    <p className="card-text">
                      {this.state.bio}
                    </p>
                    <p className="card-text">
                      {this.state.profession}
                    </p>
                    <p className="card-text"><small className="text-muted">Profile created 2 years ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          }

        </div>

        <div class="col-md-12 text-center">
          <button onClick={() => this.toggle()} type="button" className="btn btn-primary btn-lg m-auto text-center">Show Profile</button>
        </div>

      </>
    )
  }
}

export default App;
