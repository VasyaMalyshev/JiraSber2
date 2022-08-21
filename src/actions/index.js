const setCurrentPage = (pageName) => {
    return {
        type: 'CURRENT_PAGE',
        payload: pageName
    }
}

export {
    setCurrentPage,
};