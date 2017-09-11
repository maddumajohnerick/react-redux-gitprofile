import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gitProfActions from '../actions/gitProfActions';
import $ from 'jquery';

class App extends Component {
  componentWillMount() {
    const { username, gitProfActions } = this.props;

    if (username) {
      gitProfActions.getUser(username)
      .then(() => {
        hashHistory.push(`/${username}`);
      });
    }
  }

  handleSubmit(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    const { gitProfActions } = this.props;
    const formData = {};
    const formDataSerialize = $(event.currentTarget).serializeArray();

    formDataSerialize.map(form => (formData[form.name] = form.value));

    gitProfActions.getUser(formData.username)
    .then(() => {
      hashHistory.push(`/${formData.username}`);
    });
  }

  render() {
    const { children } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <header className="site-header col-lg-8 col-lg-offset-2 text-center">
            <form action="" onSubmit={this.handleSubmit.bind(this)}>
              <div className="input-group input-group-lg col-lg-12">
                <input type="search" name="username" className="form-control" placeholder="Search for a github user..." aria-describedby="sizing-addon1" />
              </div>
            </form>
          </header>
          <div className="col-lg-8 col-lg-offset-2">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    username: ownProps.params.username,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    gitProfActions: bindActionCreators(gitProfActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
