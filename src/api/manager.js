import request from '@/utils/request'

export function loginManager(manager_name, manager_pwd) {
    return request({
        url: '/userManage/manager/login',
        method: 'POST',
        params: { manager_name, manager_pwd}
    })
}