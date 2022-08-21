import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {withApiService} from "../hoc";
import {getAllIssues, getAllLessons, updateUserCurrentLesson} from "../../actions/item-actions";
import {Button, Col, Container, Nav, Tab} from 'react-bootstrap';
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import './lesson-page.css'

class LessonPage extends Component {

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
    }

    handleSelect = (id) => {
        this.setState({
            currentNumberOnClick: id
        })
    }

    render() {
        const {issues} = this.props;

        console.log(issues);

        return (
            <>
                <Container>
                    <Tab.Container id="left-tabs-example" defaultActiveKey={1} onSelect={key => this.handleSelect(key)}>
                        <Row>
                            <Col sm={2}>
                                <Nav variant="pills" className="flex-column" >
                                    {issues?.map(les => {
                                        return <Nav.Item><Nav.Link eventKey={les?.id} >{les?.title}</Nav.Link></Nav.Item>
                                    })}
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    {issues?.map(les => {
                                        return <Tab.Pane eventKey={les?.id}>
                                            <Form.Label>Title:</Form.Label>
                                            <Form.Control readOnly as='textarea' rows={1}>{les?.title}</Form.Control>
                                            <br/>
                                            <Form.Label>Description:</Form.Label>
                                            <Form.Control readOnly as='textarea' rows={5}>{les?.description}</Form.Control>
                                            <br/>
                                            {les?.issueFields?.map(issueField => {
                                                return <><Form.Label>{issueField.fieldTypeDtoName}</Form.Label><Form.Control readOnly as='textarea' rows={1}>{issueField?.text}</Form.Control></>
                                            })}
                                            <br/>
                                            {les?.issueRelationDtoList?.map(rel => {
                                                return <>
                                                    <Form.Label>{rel?.relationType}</Form.Label>
                                                    {rel?.issueList?.map(relIss => {
                                                            return <Form.Control readOnly as='textarea' rows={1}>{relIss?.title}</Form.Control>
                                                        }
                                                    )}
                                                </>
                                                }
                                            )}
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
    }
};

const mapDispatchToProps = (dispatch, ownProperty) => {
    const {apiService} = ownProperty;
    return {
        getAllLessons: getAllLessons(apiService, dispatch),
        updateCurrentLesson: updateUserCurrentLesson(apiService, dispatch),
        getAllIssues: getAllIssues(apiService, dispatch)
    }
}
export default withApiService()(connect(mapStateToProps, mapDispatchToProps)(withRouter(LessonPage)));