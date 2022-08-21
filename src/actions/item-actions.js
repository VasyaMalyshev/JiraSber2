const getLesson = (apiService, dispatch) => () => {
    dispatch(getLessonRequested());
    apiService.getLesson
        .then((data) => dispatch(getLessonLoaded(data)))
        .catch((err) => dispatch(getLessonError(err)));
}

const getAllLessons = (apiService, dispatch) => () => {
    dispatch(getLessonsRequested());
    apiService.getAllLessons()
        .then((data) => dispatch(getLessonsLoaded(data)))
        .catch((err) => dispatch(getLessonsError(err)));
}

const getAllIssues = (apiService, dispatch) => () => {
    dispatch(getIssuesRequested());
    apiService.getAllIssues()
        .then((data) => dispatch(getIssuesLoaded(data)))
        .catch((err) => dispatch(getIssuesError(err)));
}

const updateLesson = (apiService, dispatch) => (lessons) => {
    dispatch(putLessonUpdateRequested());
    apiService.updateLesson(lessons)
        .then((data) => dispatch(putLessonUpdateLoaded(data)))
        .catch((err) => dispatch(putLessonUpdateError(err)));
}

const createLesson = (apiService, dispatch) => () => {
    dispatch(postLessonCreateRequested());
    apiService.createLesson()
        .then((data) => dispatch(postLessonCreateLoaded(data)))
        .catch((err) => dispatch(postLessonCreateError(err)));
}

const createRule = (apiService, dispatch) => (rule) => {
    dispatch(postRuleCreateRequested());
    apiService.createRule(rule)
        .then((data) => dispatch(postRuleCreateLoaded(data)))
        .catch((err) => dispatch(postRuleCreateError(err)));
}

const getAllRules = (apiService, dispatch) => () => {
    dispatch(getRulesRequested());
    apiService.getAllRules()
        .then((data) => dispatch(getRulesLoaded(data)))
        .catch((err) => dispatch(getRulesError(err)));
}

const updateUserCurrentLesson = (apiService, dispatch) => (userId) => {
    dispatch(postCurrentLessonRequested());
    apiService.updateCurrentLesson(userId)
        .then((data) => dispatch(postCurrentLessonLoaded(data)))
        .catch((err) => dispatch(postCurrentLessonError(err)));

}

const getLessonRequested = () => {
    return {
        type: 'GET_LESSON_REQUEST'
    };
};

const getLessonLoaded = (data) => {
    return {
        type: 'GET_LESSON_SUCCESS',
        payload: data
    };
};

const getLessonError = (error) => {
    return {
        type: 'GET_LESSON_FAILURE',
        payload: error
    };
};

const getLessonsRequested = () => {
    return {
        type: 'GET_LESSONS_REQUEST'
    };
};

const getLessonsLoaded = (data) => {
    return {
        type: 'GET_LESSONS_SUCCESS',
        payload: data
    };
};

const getLessonsError = (error) => {
    return {
        type: 'GET_LESSONS_FAILURE',
        payload: error
    };
};


const getIssuesRequested = () => {
    return {
        type: 'GET_ISSUES_REQUEST'
    };
};

const getIssuesLoaded = (data) => {
    return {
        type: 'GET_ISSUES_SUCCESS',
        payload: data
    };
};

const getIssuesError = (error) => {
    return {
        type: 'GET_ISSUES_FAILURE',
        payload: error
    };
};

const getRulesRequested = () => {
    return {
        type: 'GET_RULES_REQUEST'
    };
};

const getRulesLoaded = (data) => {
    return {
        type: 'GET_RULES_SUCCESS',
        payload: data
    };
};

const getRulesError = (error) => {
    return {
        type: 'GET_ISSUES_FAILURE',
        payload: error
    };
};

const putLessonUpdateRequested = () => {
    return {
        type: 'PUT_LESSON_UPDATE_REQUEST'
    };
};

const putLessonUpdateLoaded = (data) => {
    return {
        type: 'PUT_LESSON_UPDATE_SUCCESS',
        payload: data
    };
};

const putLessonUpdateError = (error) => {
    return {
        type: 'PUT_LESSON_UPDATE_FAILURE',
        payload: error
    };
};
const postLessonCreateRequested = () => {
    return {
        type: 'POST_LESSON_CREATE_REQUEST'
    };
};

const postLessonCreateLoaded = (data) => {
    return {
        type: 'POST_LESSON_CREATE_SUCCESS',
        payload: data
    };
};

const postLessonCreateError = (error) => {
    return {
        type: 'POST_LESSON_CREATE_FAILURE',
        payload: error
    };
};


const postRuleCreateRequested = () => {
    return {
        type: 'POST_RULE_CREATE_REQUEST'
    };
};

const postRuleCreateLoaded = (data) => {
    return {
        type: 'POST_RULE_CREATE_SUCCESS',
        payload: data
    };
};

const postRuleCreateError = (error) => {
    return {
        type: 'POST_RULE_CREATE_FAILURE',
        payload: error
    };
};


const postCurrentLessonRequested = () => {
    return {
        type: 'POST_CURRENTLESSON_REQUEST'
    };
};

const postCurrentLessonLoaded = (data) => {
    return {
        type: 'POST_CURRENTLESSON_SUCCESS',
        payload: data
    };
};

const postCurrentLessonError = (error) => {
    return {
        type: 'POST_CURRENTLESSON_FAILURE',
        payload: error
    };
};



export {
    getLessonError,
    getLessonLoaded,
    getLessonRequested,
    getLesson,
    getAllLessons,
    updateUserCurrentLesson,
    putLessonUpdateLoaded,
    putLessonUpdateError,
    putLessonUpdateRequested,
    updateLesson,
    getLessonsRequested,
    getLessonsLoaded,
    getLessonsError,
    getIssuesLoaded,
    getIssuesRequested,
    getIssuesError,
    getAllIssues,
    createLesson,
    postLessonCreateError,
    postLessonCreateLoaded,
    postLessonCreateRequested,
    createRule,
    postRuleCreateRequested,
    postRuleCreateLoaded,
    postRuleCreateError,
    getAllRules,
    getRulesRequested,
    getRulesLoaded,
    getRulesError
}