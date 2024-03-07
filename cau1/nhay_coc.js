function canJump(nums) {
    if (!nums || nums.length === 0) {
        return false;
    }

    // Đánh dấu vị trí cuối cùng mà có thể đạt được
    let lastPosition = nums.length - 1;

    // Bắt đầu từ phía trước mảng, kiểm tra từng vị trí xem có thể đạt được vị trí cuối cùng hay không
    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= lastPosition) {
            lastPosition = i;
        }
    }

    // Nếu vị trí cuối cùng mà có thể đạt được được đánh dấu là vị trí đầu tiên (0) thì trả về true, ngược lại trả về false
    return lastPosition === 0;
}

// Ví dụ sử dụng
const array1 = [2, 3, 1, 1, 4];
console.log(canJump(array1)); // Output: true

const array2 = [3, 2, 1, 0, 4];
console.log(canJump(array2)); // Output: false
