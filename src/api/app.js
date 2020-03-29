export const getAppName = () => {
  return new Promise((resolve, reject) => {
    const err = null
    setTimeout(() => {
      if (!err) {
        resolve({
          success: true,
          code: 0,
          data: { appName: '张三' }
        })
      } else {
        reject(err)
      }
    }, 2000)
  })
}
