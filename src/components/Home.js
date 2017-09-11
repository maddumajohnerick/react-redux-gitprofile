import React, { Component } from 'react';

// import Art from '../containers/ArtContainer'

class Home extends Component {

  render() {
    const { username, gitProf } = this.props;
    console.log(username);
    console.log(gitProf);

    if (username && gitProf.length) {
      return (
        <div className="row">

        </div>
      );
    } else if (username && !gitProf.length) {
      return <h2 className="text-center">User Not Found</h2>
    }
    return <h2 className="text-center">Welcome to Git Profile Finder</h2>
  }
}

export default Home;
