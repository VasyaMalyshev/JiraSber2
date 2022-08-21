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
    updateUserCurrentLesson,
    createRule
} from "../../actions/item-actions";


class RuleEditor extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: "",
            errorText: "",
            relationType: "",
            from: [],
            to: [],
            isActive: false,
        };

        this.handleChangeFrom = this.handleChangeFrom.bind(this);
        this.handleChangeTo = this.handleChangeTo.bind(this);
        this.handleChangeIssues = this.handleChangeIssues.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChangeCheck = this.handleChangeCheck.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeFrom(event) {
        console.log("ee")
        const fieldTypeId = event.target.name;
        const text = event.target.value;

        const arr = this.state.from.filter(i => i.fieldType.id !== fieldTypeId);

        this.setState({

                from: [...arr, {
                    fieldType: {id: fieldTypeId},
                    text
                }]
            })

        event.preventDefault();
    }

    handleChangeTo(event) {
        console.log("ee")
        const fieldTypeId = event.target.name;
        const text = event.target.value;

        const arr = this.state.to.filter(i => i.fieldType.id !== fieldTypeId);

        this.setState({

                to: [...arr, {
                    fieldType: {id: fieldTypeId},
                    text
                }]
            })

        event.preventDefault();
    }

    handleChangeIssues(event) {
        const inputName = event.target.name;
        const inputValue = event.target.value;

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
    }

    handleChangeCheck(event) {
        this.setState({
            isActive: event.target.checked
        });
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
        this.props.createRule(
            {
                title: this.state.title,
                errorText: this.state.errorText,
                relationType: this.state.relationType,
                from: this.state.from,
                to: this.state.to,
                isActive: this.state.isActive});
        console.log(lessonRequest)
    }

    componentDidMount() {
        this.props.getAllLessons();
        this.props.getAllIssues();
    }

    render() {
        const {lessons} = this.props;
        const {issues} = this.props;

        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <h1 className='title-name'>Создание Issue 1</h1>
                        {lessons?.map(l => {
                            return <Form>
                                <Form.Group onSubmit={this.handleSubmit}>
                                    <Form.Label>
                                        <h6>{l.name}</h6>
                                        <Form.Control as="select" name={l?.id} onChange={this.handleChangeFrom}
                                                      onClick={this.handleChangeFrom}>
                                            {l?.defaultIssueFields?.map(defaultField => {
                                                return <option value={defaultField?.text}>{defaultField?.text}</option>
                                            })}
                                        </Form.Control>
                                    </Form.Label>
                                </Form.Group>
                            </Form>
                        })
                        }
                    <h1 className='title-name'>Создание Issue 2</h1>
                        {lessons?.map(l => {
                            return <Form>
                                <Form.Group onSubmit={this.handleSubmit}>
                                    <Form.Label>
                                        <h6>{l.name}</h6>
                                        <Form.Control as="select" name={l?.id} onChange={this.handleChangeTo}
                                                      onClick={this.handleChangeTo}>
                                            {l?.defaultIssueFields?.map(defaultField => {
                                                return <option value={defaultField?.text}>{defaultField?.text}</option>
                                            })}
                                        </Form.Control>
                                    </Form.Label>
                                </Form.Group>
                            </Form>
                        })
                        }
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Тема:</Form.Label>
                        <Form.Control name='title' type="title" placeholder="Тема" value={this.state.title} onChange={this.handleInputChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>errorText</Form.Label>
                        <Form.Control name='errorText' as="textarea" placeholder="errorText" rows={3} value={this.state.errorText} onChange={this.handleInputChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" defaultChecked={this.state.isActive} label="is Active" onChange={this.handleChangeCheck}/>
                    </Form.Group>

                        <br/>
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
        getAllIssues: getAllIssues(apiService, dispatch),
        createRule : createRule(apiService, dispatch)
    }
}

export default withApiService()(connect(mapStateToProps, mapDispatchToProps)(withRouter(RuleEditor)));