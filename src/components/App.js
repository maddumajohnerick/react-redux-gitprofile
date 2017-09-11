import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gitProfActions from '../actions/gitProfActions';
import $ from 'jquery';

class App extends Component {
  handleSubmit(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    const { gitProfActions } = this.props;
    const formData = {};
    const formDataSerialize = $(event.currentTarget).serializeArray();

    formDataSerialize.map(form => (formData[form.name] = form.value));

    gitProfActions.getUser(formData.username);
  }

  render() {
    const { children } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="site-header col-lg-8 col-lg-offset-2 text-center">
            <form action="" onSubmit={this.handleSubmit.bind(this)}>
              <div className="input-group input-group-lg col-lg-12">
                <input type="search" name="username" className="form-control" placeholder="Search for a github user..." aria-describedby="sizing-addon1" />
              </div>
            </form>
          </div>
          <div className="col-lg-8 col-lg-offset-2">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    gitProfActions: bindActionCreators(gitProfActions, dispatch),
  };
}

export default connect(mapDispatchToProps)(App);
