import { ElNotification , ElMessage , ElMessageBox  } from 'element-plus'
export function showNotify(data) {
  ElNotification({
    title: data,
    type: 'success',
    duration: 2 * 1000
  })
}

export function showMessage(data) {
  ElMessage({
    message: data,
    type: 'error',
    duration: 5 * 1000
  })
}

export function showMessageBox(data) {
  ElMessageBox({
    title: '提示',
    message: data,
    center: true
  })
}
