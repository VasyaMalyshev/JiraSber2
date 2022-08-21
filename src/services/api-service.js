import {ACCESS_TOKEN, API_BASE_URL} from "../constants";

export default class ApiService {

    getLesson = async (page) => {
        let url = `/user/lesson/${page}`
        const res = await fetch(`${API_BASE_URL}${url}`, {
            method: 'GET',
            origin: API_BASE_URL,
            headers: {
                'Authorization': 'Bearer_' + localStorage.getItem(ACCESS_TOKEN),
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS',
            }
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} received ${res.status}`)
        }
        return await res.json();
    }

    updateLesson = async (lesson) => {
        console.log(lesson)
        let url = `/issue`
        const res = await fetch(`${API_BASE_URL}${url}`, {
            method: 'POST',
            origin: API_BASE_URL,
            headers: {
                //'Authorization': 'Bearer_' + localStorage.getItem(ACCESS_TOKEN),
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS',
            },
            body: JSON.stringify(lesson)
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} received ${res.status}`)
        }
        return await res.json();
    }

    createLesson = async () => {
        let url = `/admin/lesson/create`
        const res = await fetch(`${API_BASE_URL}${url}`, {
            method: 'POST',
            origin: API_BASE_URL,
            headers: {
                'Authorization': 'Bearer_' + localStorage.getItem(ACCESS_TOKEN),
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS',
            },
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} received ${res.status}`)
        }
        return await res.json();
    }

    getAllLessons = async () => {
        let url = `/issuetype`
        const res = await fetch(`${API_BASE_URL}${url}`, {
            method: 'GET',
            origin: API_BASE_URL,
            headers: {
                //'Authorization': 'Bearer_' + localStorage.getItem(ACCESS_TOKEN),
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS',
            }
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} received ${res.status}`)
        }
        return await res.json();
    }

    getAllIssues = async () => {
        let url = `/issue`
        const res = await fetch(`${API_BASE_URL}${url}`, {
            method: 'GET',
            origin: API_BASE_URL,
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS',
            }
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} received ${res.status}`)
        }
        return await res.json();
    }

    updateCurrentLesson = async (user) => {
        let url = `/user/${user}/updateCurrentLesson`
        const res = await fetch(`${API_BASE_URL}${url}`, {
            method: 'POST',
            origin: API_BASE_URL,
            headers: {
                'Authorization': 'Bearer_' + localStorage.getItem(ACCESS_TOKEN),
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS',
            },
            body: JSON.stringify(user)
        })
        if (!res.ok) {
            throw new Error(`Could not fetch ${url} received ${res.status}`)
        }
        return await res.json();
    }

    createRule = async (rule) => {
        let url = `/rule`
        const res = await fetch(`${API_BASE_URL}${url}`, {
            method: 'POST',
            origin: API_BASE_URL,
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS',
            },
            body: JSON.stringify(rule)
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} received ${res.status}`)
        }
        return await res.json();
    }

    getAllRules = async () => {
        let url = `/rule`
        const res = await fetch(`${API_BASE_URL}${url}`, {
            method: 'GET',
            origin: API_BASE_URL,
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS',
            }
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} received ${res.status}`)
        }
        return await res.json();
    }
}