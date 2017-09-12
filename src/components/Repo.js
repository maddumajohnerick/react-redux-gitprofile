import React, { Component } from 'react';
import colors from '../assets/colors.json';
import axios from 'axios';
import $ from 'jquery';

class Repo extends Component {
  componentDidMount() {
    const { repo, username } = this.props;
    this.generateBar(username, repo);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.username !== this.props.username) {
      this.generateBar(nextProps.username, nextProps.repo);
    }
  }

  generateBar(username, repo) {
    $(`#lang-${repo.id}`).empty();
    axios({
      method: 'get',
      url: `https://api.github.com/repos/${username}/${repo.name}/languages`,
    })
    .then(function(response) {
      let total = 0;
      let langs = $('<div></div>');
      for (let prop in response.data) {
        total += response.data[prop];
      }
      for (let prop in response.data) {
        const width = ((response.data[prop] / total) * 100);
        $(langs).append(`<div class='lang-indi' style='width: ${width}%; background-color: ${colors[prop]}; display: ${Math.round(width) === 0 ? 'none' : 'inline-block'}'>${prop}</div>`);
      }
      if (!$(`#lang-${repo.id} div`).length) {
        $(`#lang-${repo.id}`).append(langs);
      }
    });
  }

  render() {
    const { repo } = this.props;

    return (
      <article className="col-lg-6 repo-holder">
        <div className="repo">
          <header>{repo.name}</header>
          <section className="description">
            {repo.description}
          </section>
          <section className="lang" id={`lang-${repo.id}`}>
          </section>
        </div>
      </article>
    );
  }
}

export default Repo;
