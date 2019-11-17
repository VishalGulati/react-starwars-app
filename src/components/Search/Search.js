import React, { Component } from 'react';
import {
  PageHeader,
  Form,
  FormGroup,
  Col,
  FormControl,
  InputGroup,
  Glyphicon,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchAction } from './search-store';
import { searchDetailsRoute } from '../../router/route-constants';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchResult: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.search !== this.props.search) {
      const { isLoading, error } = nextProps.search;
      if (!isLoading && !error) {

      }
    }
  }

  handleSearch = async e => {
    this.props.searchAction(e.target.value)
  };

  showSearchDetails = (item) => {
    this.props.history.push({
      pathname: `/${searchDetailsRoute}`,
      params: item
    })
  }

  render() {
    let searchResultList = [];
    if (this.props.searchResults) {
      searchResultList = this.props.searchResults.map((item, i) => {
        return <ListGroupItem onClick={() => this.showSearchDetails(item)} key={i}>
          <span>{item.name}</span>
          <span className="pull-right"><Glyphicon glyph="user" /> {item.population}</span>
        </ListGroupItem>
      })
    }

    return (
      <div className="search">
        <PageHeader className="text-center">Search</PageHeader>
        <Form>
          <FormGroup controlId="formUsername">
            <Col sm={12}>
              <InputGroup>
                <FormControl
                  type="text"
                  placeholder="Enter search here ..."
                  autoComplete="off"
                  onChange={this.handleSearch}
                />
                <InputGroup.Addon>
                  <Glyphicon glyph="search" />
                </InputGroup.Addon>
              </InputGroup>
            </Col>
          </FormGroup>
        </Form>

        {searchResultList.length > 0 &&
          <Col sm={12}>
            <ListGroup>
              {searchResultList}
            </ListGroup>
          </Col>
        }
      </div>
    );
  }
}

const mapStateToProps = ({ search: { searchResults } }) => ({
  searchResults
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchAction
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Search);
