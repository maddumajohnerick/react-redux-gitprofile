import React, { Component } from 'react';

import Repo from './Repo';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: 10,
    };
  }

  handleLoadMore() {
    const { display } = this.state;
    let incre = display + 10;

    this.setState({ display: incre });
  }

  render() {
    const { username, gitProf } = this.props;

    if (username && gitProf.length) {
      const total = gitProf.length
      const repos = gitProf.slice(0, this.state.display);
      const userInfo = repos[0].owner;

      return (
        <div className="row">
          <aside className="col-lg-3 user-info">
            <img className="img-responsive" src={userInfo.avatar_url}/>
          </aside>
          <section className="col-lg-9 repo-container">
            {repos.map(repo =>
              <Repo key={repo.id} repo={repo} username={username}/>
            )}
            {total >= this.state.display ?
              <button className="btn btn-lg btn-default" onClick={this.handleLoadMore.bind(this)}>
                LOAD MORE
              </button>
              :
              ''
            }
          </section>
        </div>
      );
    } else if (username && !gitProf.length) {
      return <h2 className="text-center">User Not Found</h2>;
    }
    return <h2 className="text-center">Welcome to Git Profile Finder</h2>;
  }
}

export default Home;
