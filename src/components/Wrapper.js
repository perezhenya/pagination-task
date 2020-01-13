import React from 'react';
import {connect} from 'react-redux';
import {getUsers} from '../actions/users';
import UserItem from './UserItem';
import Pagination from './Pagination';
import './../styles/App.css';

class Wrapper extends React.Component {
  state = {
    totalUsers: "",
    totalPages: "",
    pageLimit: "",
    currentPage: "",
    startIndex: "",
    endIndex: ""
  };

componentDidMount() {
  this.props.getNewUsers();
  this.setState({
    totalUsers: this.props.users.length
  });
}

onChangePage = data => {
  this.setState({
    pageLimit: data.pageLimit,
    totalPages: data.totalPages,
    currentPage: data.page,
    startIndex: data.startIndex,
    endIndex: data.endIndex
  });
}

render = () => {
  const {users} = this.props
  const {
    startIndex,
    endIndex
  } = this.state;
  let rowsPerPage = users.users.slice(startIndex, endIndex + 1);

return (
  <div>
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody> 
        {
          users.users.length > 0 &&
            rowsPerPage.map((user, index) => {
              return <UserItem key={index} user={user} index={index} />
            })
        }
      </tbody>
    </table>
      <Pagination
        totalUsers={users.users.length}
        pageLimit={5}
        initialPage={1}
        pagesToShow={5}
        onChangePage={this.onChangePage}
      />
  </div>
)
}
}
const mapStateToProps = (state) => ({
    users: state.data
})
const mapDispatchToProps = (dispatch) => ({
    getNewUsers: () => {
        dispatch(getUsers());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)