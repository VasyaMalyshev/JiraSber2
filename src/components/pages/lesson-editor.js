import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {withApiService} from "../hoc";
import './lesson-editor.css';
import {Button, Form} from "react-bootstrap";
import {
    createLesson, getAllIssues,
    getAllLessons,
    updateLesson,
    updateUserCurrentLesson
} from "../../actions/item-actions";


class LessonEditor extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: "",
            description: "",
            issueFields: [],
            issueRelationDtoList: [],
            relationType: "",
            id: "",

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeIssues = this.handleChangeIssues.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log("ee")
        const fieldTypeDtoId = event.target.name;
        const text = event.target.value;

        const arr = this.state.issueFields.filter(i => i.fieldTypeDtoId !== fieldTypeDtoId);

        this.setState({
            issueFields: [...arr, {fieldTypeDtoId, text}]})

        event.preventDefault();
    }

    handleChangeIssues(event) {
        console.log("jbh")
        const inputName = event.target.name;
        const inputValue = event.target.value;
        console.log(inputName)
        console.log(inputValue)

        this.setState({
            [inputName]: inputValue
        });
        event.preventDefault();
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: inputValue
        });
        console.log(this.state.title);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("SUBMIT")
        const mock = {"issueFields" : [{
                "issueFieldTypeDtoId" : 1,
                "text" : "Done",
                "isDefault" : 0
            }]}
        const lessonRequest = Object.assign({}, this.state);
        console.log(this.state.issueFields)
        this.props.updateLesson(
            {
                title: this.state.title,
                description: this.state.description,
                issueFields: this.state.issueFields,
                issueRelationDtoList: [{relationType: this.state.relationType, issueList: [{id: this.state.id}]}]});
        console.log(lessonRequest)
    }

    componentDidMount() {
        this.props.getAllLessons();
        this.props.getAllIssues();
    }

    render() {
        const {lessons} = this.props;
        const {issues} = this.props;

        // console.log(issues);
        // console.log(lessons);

        return (
            <>
                <h1 className='title-name'>Создание Issue</h1>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Тема:</Form.Label>
                        <Form.Control name='title' type="title" placeholder="Тема" value={this.state.title} onChange={this.handleInputChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Описание</Form.Label>
                        <Form.Control name='description' as="textarea" placeholder="Описание" rows={3} value={this.state.description} onChange={this.handleInputChange}/>
                    </Form.Group>
                    {lessons?.map(l => {
                        return <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form>
                                <Form.Group onSubmit={this.handleSubmit}>
                                    <Form.Label>
                                        <h6>{l.name}</h6>
                                        <Form.Control as="select" name={l?.id} onChange={this.handleChange} onClick={this.handleChange}>
                                            {l?.defaultIssueFields?.map(defaultField => {
                                                return <option value={defaultField?.text}>{defaultField?.text}</option>
                                            })}
                                        </Form.Control>
                                    </Form.Label>
                                </Form.Group>
                            </Form>
                        </Form.Group>
                    })
                    }

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form>
                            <Form.Group onSubmit={this.handleSubmit}>
                                <Form.Label>
                                    <h6>Relation type</h6>
                                    <Form.Control as="select" name={"relationType"} onChange={this.handleChangeIssues} onClick={this.handleChangeIssues}>
                                        {["CLONED_BY", "IS_PART_OF"]?.map(r => {
                                            return <option value={r}>{r}</option>
                                        })}
                                    </Form.Control>
                                </Form.Label>
                            </Form.Group>
                            <Form.Group onSubmit={this.handleSubmit}>
                                <Form.Label>
                                    <h6>Issues</h6>
                                    <Form.Control as="select" name={"id"} onChange={this.handleChangeIssues} onClick={this.handleChangeIssues}>
                                        {issues?.map(iss => {
                                            return <option value={iss?.id}>{iss?.title}</option>
                                        })}
                                    </Form.Control>
                                </Form.Label>
                            </Form.Group>
                        </Form>
                    </Form.Group>

                    <div className='my-col'>
                        <Button className='button-submit' type="submit" >Сохранить изменения</Button>
                    </div>
                </Form>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lesson: state.lesson,
        lessons: state.lessons,
        issues: state.issues,
    }
};

const mapDispatchToProps = (dispatch, ownProperty) => {
    const {apiService} = ownProperty;
    return {
        getAllLessons: getAllLessons(apiService, dispatch),
        updateCurrentLesson: updateUserCurrentLesson(apiService,dispatch),
        updateLesson: updateLesson(apiService, dispatch),
        createLesson: createLesson(apiService, dispatch),
        getAllIssues: getAllIssues(apiService, dispatch)
    }
}

export default withApiService()(connect(mapStateToProps, mapDispatchToProps)(withRouter(LessonEditor)));