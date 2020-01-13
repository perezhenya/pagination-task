import React from "react";
import PropTypes from "prop-types";
import './../styles/App.css'

class Pagination extends React.Component {
  
    state = {
      totalUsers: "",
      pageLimit: "",
      totalPages: "",
      currentPage: "",
      initialPage: "",
      pagesToShow: ""
    };
  
  componentDidMount() {
    this.setState({
      totalUsers: this.props.totalUsers,
      pageLimit: this.props.pageLimit,
      totalPages: this.props.totalUsers / this.props.pageLimit, 
      pagesToShow: this.props.pagesToShow,
      currentPage: this.props.initialPage 
    });
  }
  
  setPage = (page) => {
    const { pageLimit, totalPages } = this.state;
    if (page < 1) {
      page = 1;
    } else if (page > totalPages) {
      page = totalPages;
    }
    this.setState({
      currentPage: page
    });

    let startIndex = page - 1;
    let endIndex = startIndex + pageLimit - 1;

    this.props.onChangePage({
      pageLimit,
      totalPages,
      page,
      startIndex,
      endIndex
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.totalUsers !== prevState.totalUsers &&
      this.state.pageLimit !== prevState.pageLimit
    ) {
      this.setPage(this.state.currentPage);
    }
  }
  
  getPage = () => {
    let { pagesToShow, currentPage, totalPages } = this.state;
    let pages = [],
     startIndex;

    if (totalPages <= pagesToShow) {
      startIndex = 1;
      pagesToShow = totalPages;
    } 
      
    for (let i = 1; i <= pagesToShow; i++) {
      pages.push(startIndex++);
    }

    return {
      currentPage,
      totalPages,
      pages
    };
  }

  render = () => {
    let switcher = this.getPage();

    return (
      <div>
          <ul className="pagination">
        <li>
          <button
            onClick={() => this.setPage(switcher.currentPage - 1)}
          >
            Back
          </button>
        </li>
        {
          switcher.pages.map((page, index) => (
            <li key={index}>
              <button
                className={switcher.currentPage === page ? "active" : ""}
                onClick={() => this.setPage(page)}
              >
              {page}
            </button>
          </li>
          ))
        }
        <li>
          <button
            onClick={() => this.setPage(switcher.currentPage + 1)}
          >
            Forward
          </button>
        </li>
      </ul>
      </div>
    );
  }
}

Pagination.propTypes = {
  totalUsers: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  initialPage: PropTypes.number,
  pagesToShow: PropTypes.number,
  onChangePage: PropTypes.func
};

export default Pagination;


