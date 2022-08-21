const initialState = {
    lesson: null,
    lessons: [],
    issues: null,
    rules: null
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'GET_LESSON_REQUEST' :
            return {
                ...state
            };
        case 'GET_LESSON_SUCCESS':
            return {
                ...state,
                lesson: action.payload
            };
        case 'GET_LESSON_FAILURE' :
            return {
                ...state
            };

        case 'GET_LESSONS_REQUEST' :
            return {
                ...state
            };
        case 'GET_LESSONS_SUCCESS':
            return {
                ...state,
                lessons: action.payload
            };
        case 'GET_LESSONS_FAILURE' :
            return {
                ...state
            };

        case 'GET_ISSUES_REQUEST' :
            return {
                ...state
            };
        case 'GET_ISSUES_SUCCESS':
            return {
                ...state,
                issues: action.payload
            };
        case 'GET_ISSUES_FAILURE' :
            return {
                ...state
            };

        case 'GET_RULES_REQUEST' :
            return {
                ...state
            };
        case 'GET_RULES_SUCCESS':
            return {
                ...state,
                rules: action.payload
            };
        case 'GET_RULES_FAILURE' :
            return {
                ...state
            };

        case 'POST_CURRENTLESSON_REQUEST' :
            return {
                ...state
            };
        case 'POST_CURRENTLESSON_SUCCESS':
            return {
                ...state,
                user: action.payload
            };
        case 'POST_CURRENTLESSON_FAILURE' :
            return {
                ...state
            };

        case 'PUT_LESSON_UPDATE_REQUEST' :
            return {
                ...state
            };
        case 'PUT_LESSON_UPDATE_SUCCESS':
            const oneLessonToReplace = this.lessons.find(les => les?.numLesson === action.payload.numLesson)
            console.log("Найдена: " + oneLessonToReplace)
            return {
                ...state,
                lessons: action.payload
            };

        case 'PUT_LESSON_UPDATE_FAILURE' :
            return {
                ...state
            };

        case 'POST_LESSON_CREATE_REQUEST' :
            return {
                ...state
            };
        case 'POST_LESSON_CREATE_SUCCESS':
            return {
                ...state,
            };

        case 'POST_LESSON_CREATE_FAILURE' :
            return {
                ...state
            };


        case 'POST_RULE_CREATE_REQUEST' :
            return {
                ...state
            };
        case 'POST_RULE_CREATE_SUCCESS':
            return {
                ...state
            };

        case 'POST_RULE_CREATE_FAILURE' :
            return {
                ...state
            };
        default:
            return state;

    }
};

export default reducer;