import request from '@/utils/request'

export function loginUser(user_nick, user_pwd) {
    return request({
        url: '/userManage/user/login',
        method: 'POST',
        params: { user_nick, user_pwd}
    })
}

export function register(data) {
    return request({
        url: '/userManage/user/register',
        method: 'POST',
        data
    })
}


export function updateDetails(user_nick, user_name,user_contact) {
    return request({
        url: '/userManage/user/updateDetails',
        method: 'POST',
        params: { user_nick: user_nick, user_name: user_name, user_contact: user_contact}
    })
}

export function checkDetails(user_nick) {
    return request({
        url: '/userManage/user/checkDetails',
        method: 'GET',
        params: { user_nick }
    })
}

export function checkUser(user_name,user_contact) {
    return request({
        url: '/userManage/user/checkUser',
        method: 'GET',
        params: { user_name, user_contact }
    })
}

export function add(data) {
    return request({
        url: '/userManage/user/add',
        method: 'POST',
        data
    })
}

export function deleteByNick(user_nick) {
    return request({
        url: '/userManage/user/deleteByNick',
        method: 'POST',
        params: { user_nick: user_nick}
    })
}

export function getUserList(){
    return request({
        url: '/userManage/user/getList',
        method: 'GET',
    })
}