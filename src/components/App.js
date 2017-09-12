import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gitProfActions from '../actions/gitProfActions';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  componentWillMount() {
    const { username, gitProfActions } = this.props;

    this.setState({ loading: true });
    if (username) {
      gitProfActions.getUser(username)
      .then(() => {
        this.setState({ loading: false });
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

    this.setState({ loading: true });
    gitProfActions.getUser(formData.username)
    .then(() => {
      this.setState({ loading: false });
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
            {this.state.loading ?
              <h2 className="text-center">Loading...</h2>
              :
              children
            }
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
