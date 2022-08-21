import React, {Component} from 'react';
import './app.css';
import {LessonPage, LessonEditor, RulePage, RuleEditor} from "../pages";
import {Switch, Route, withRouter, Link} from 'react-router-dom';
import {connect} from "react-redux";
import {withApiService} from "../hoc";
import {BreakpointProvider} from 'react-socks';
import Row from "react-bootstrap/Row";
import {Container, Navbar} from "react-bootstrap";

class App extends Component {
    render() {
        return (
            <BreakpointProvider>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/lesson">IssuesSber</Navbar.Brand>
                            <Link to="/lesson" className="text-white mr-3">Issues</Link>
                        <Link to="/lesson-editor" className="text-white mr-3">Add Issue</Link>
                        <Link to="/rule-page" className="text-white mr-3">Rules</Link>
                        <Link to="/rule-editor" className="text-white mr-3">Add Rules</Link>
                    </Container>
                </Navbar>
                <Row className="app-row">
                    <Switch>
                        <Route path="/lesson" component={LessonPage}/>
                        <Route path="/lesson-editor" component={LessonEditor}/>
                        <Route path="/rule-page" component={RulePage}/>
                        <Route path="/rule-editor" component={RuleEditor}/>
                    </Switch>
                </Row>
            </BreakpointProvider>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profileId: state.profileId,
        logout_flag: state.logout_flag
    }
};

const mapDispatchToProps = (dispatch, ownProperty) => {
    const {apiService} = ownProperty;
    return {

    }
}

export default withApiService()(connect(mapStateToProps, mapDispatchToProps)(withRouter(App)));
