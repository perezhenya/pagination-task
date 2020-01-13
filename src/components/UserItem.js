import React, { PureComponent } from "react";

class UserItem extends PureComponent {
  render() {
    const { user, index } = this.props;

    return (
     <>
      <tr>
        <td>{index + 1}.</td>
        <td>
          <h3>{user.name} {user.surname}</h3>
          <h6>{user.desc}</h6>
        </td>
      </tr>
     </>
    );
  }
}

export default UserItem;