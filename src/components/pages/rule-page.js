import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {withApiService} from "../hoc";
import {getAllIssues, getAllLessons, updateUserCurrentLesson, getAllRules} from "../../actions/item-actions";
import {Col, Container, Nav, Tab} from 'react-bootstrap';
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import './lesson-page.css'

class RulePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 1,
            currentNumberOnClick: 1,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(event.target.value)
        event.preventDefault();
    }

    handleSubmit(event) {

        console.log(this.state.value)

    }

    componentDidMount() {
        this.props.getAllLessons();
        this.props.getAllIssues();
        this.props.getAllRules();
    }

    handleSelect = (id) => {
        this.setState({
            currentNumberOnClick: id
        })
    }

    render() {
        const {issues} = this.props;
        const {rules} = this.props;
        console.log(issues);
        console.log(rules);

        return (
            <>
                <Container>
                    <Tab.Container id="left-tabs-example" defaultActiveKey={1} onSelect={key => this.handleSelect(key)}>
                        <Row>
                            <Col sm={2}>
                                <Nav variant="pills" className="flex-column" >
                                    {rules?.map(les => {
                                        return <Nav.Item><Nav.Link eventKey={les?.id} >{les?.title}</Nav.Link></Nav.Item>
                                    })}
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    {rules?.map(les => {
                                        return <Tab.Pane eventKey={les?.id}>
                                            <Form.Label>Title:</Form.Label>
                                            <Form.Control readOnly as='textarea' rows={1}>{les?.title}</Form.Control>
                                            <br/>
                                            <Form.Label>errorText:</Form.Label>
                                            <Form.Control readOnly as='textarea' rows={3}>{les?.errorText}</Form.Control>
                                            <br/>
                                            <h5>Issue 1</h5>
                                            {les?.from?.map(issueField => {
                                                return <><Form.Label>{issueField?.fieldType?.name}</Form.Label><Form.Control readOnly as='textarea' rows={1}>{issueField?.text}</Form.Control></>
                                            })}
                                            <br/>
                                            <h5>Issue 2</h5>
                                            {les?.to?.map(issueField => {
                                                return <><Form.Label>{issueField?.fieldType?.name}</Form.Label><Form.Control readOnly as='textarea' rows={1}>{issueField?.text}</Form.Control></>
                                            })}
                                            <br/>
                                            <Form.Label>RelationType:</Form.Label>
                                            <Form.Control readOnly as='textarea' rows={1}>{les?.relationType}</Form.Control>
                                        </Tab.Pane>
                                    })}
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lessons: state.lessons,
        value: state.value,
        issues: state.issues,
        rules: state.rules
    }
};

const mapDispatchToProps = (dispatch, ownProperty) => {
    const {apiService} = ownProperty;
    return {
        getAllLessons: getAllLessons(apiService, dispatch),
        updateCurrentLesson: updateUserCurrentLesson(apiService, dispatch),
        getAllIssues: getAllIssues(apiService, dispatch),
        getAllRules: getAllRules(apiService, dispatch)
    }
}
export default withApiService()(connect(mapStateToProps, mapDispatchToProps)(withRouter(RulePage)));