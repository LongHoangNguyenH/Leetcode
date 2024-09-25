try {
    new Promise((resolve, reject) => {
        reject(new Error('Exception'))
    })
} catch (error) {
    console.log('There is a error!')
}

// new Promise((resolve, reject) => {...}) tạo ra một Promise mới.
// Ngay lập tức, Promise này bị reject bằng cách gọi reject(new Error('Exception')). 
// Điều này có nghĩa là Promise này sẽ ở trạng thái lỗi ngay từ đầu.