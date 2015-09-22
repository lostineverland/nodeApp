'use strict';
var React = require('react'),
  request = require('superagent');

var DecodeBox = React.createClass({
  getInitialState: function () {
    return {decoded: this.props.phrase};
  },
  componentDidMount: function () {
    console.log('DecodeBox Mounted')
  },
  componentWillReceiveProps: function(nextProps) {
    request
      .post('/sample-trans')
      .send({phrase: nextProps.phrase})
      .set('Content-Type', 'application/json')
      .end(function (err, res) {
        if (err) {
          console.log('error', err);
          return {};
        }
        if (this.isMounted()) {
          this.setState({decoded: res.body.phrase});
          console.log('DecodeBox AJAX call', res.body.phrase)
        }  
      }.bind(this));
    console.log('DecodeBox updating', nextProps);
    this.setState({decoded: nextProps.phrase});
  },
  render: function () {
    console.log('DecodeBox Rendering', this.state.decoded)
    return (
      <div>
      {this.state.decoded}
      </div>
    );
  }
});

var TranscriptionBox = React.createClass({
  getInitialState: function () {
    return {codedPhrase: 'start'};
  },
  componentDidMount: function () {
    console.log('TranscriptionBox Mounted')
  },
  handleChange: function(event) {
    this.setState({codedPhrase: event.target.value});
  },
  render: function () {
    console.log('TranscriptionBox Rendering');
    return (
      <div className="transcriptionBox">
        <h2>
          <input type="text" placeholder="you -> me" onChange={this.handleChange}/>
          <DecodeBox phrase={this.state.codedPhrase} />
        </h2>
      </div>
    );
  }
});

React.render(
  <TranscriptionBox url='transcribe' />,
  document.getElementById('sample')
);
