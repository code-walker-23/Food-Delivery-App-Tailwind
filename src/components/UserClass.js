import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, image, designation } = this.props;
    return (
      <div className="team-member">
        <img src={this.props.image} alt="Team Member 4"></img>
        <h3>{name}</h3>
        <p>{designation}</p>
      </div>
    );
  }
}
export default UserClass;
