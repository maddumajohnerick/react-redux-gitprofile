import React, { Component } from 'react';
import colors from '../assets/colors.json';
import axios from 'axios';
import $ from 'jquery';

class Repo extends Component {
  componentDidMount() {
    const { repo } = this.props;
    this.generateBar(repo.id, repo.full_name);
  }

  generateBar(id, fullname) {
    $(`#lang-${id}`).empty();
    axios({
      method: 'get',
      url: `https://api.github.com/repos/${id, fullname}/languages`,
    })
    .then(function(response) {
      let total = 0;
      let langs = $('<div class="progress"></div>');
      for (let prop in response.data) {
        total += response.data[prop];
      }
      for (let prop in response.data) {
        const width = ((response.data[prop] / total) * 100);
        $(langs).append(`<div class='progress-bar' role='progressbar' style='width: ${width}%; background-color: ${colors[prop]}; display: ${Math.round(width) === 0 ? 'none' : 'inline-block'}'>${prop}</div>`);
      }
      if (!$(`#lang-${id} div`).length) {
        $(`#lang-${id}`).append(langs);
      }
    });
  }

  render() {
    const { repo } = this.props;
    let description = repo.description
    if (description && description.length > 100) {
      description = `${description.substring(0, 100)}...`;
    }

    return (
      <article className="col-lg-6 repo-holder">
        <div className="repo">
          <header>{repo.name}</header>
          <section className="description">
            {description}
          </section>
          <section className="lang" id={`lang-${repo.id}`}>
          </section>
        </div>
      </article>
    );
  }
}

export default Repo;
