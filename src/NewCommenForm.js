import React from "react";
import { connect } from "react-redux";
import { addComment } from "./actions";

class NewCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };
  }

  handleSubmit = event => {
    this.props.addComment(this.props.event, this.state.comment);
    this.setState({ comment: "" });
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Add comment"
          value={this.state.comment}
          onChange={this.handleChange}
        />
        <input type="submit" value="I say" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addComment: (event, comment) => dispatch(addComment(event, comment))
  };
};

export default connect(state => state, mapDispatchToProps)(NewCommentForm);
