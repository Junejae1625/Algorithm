function solution(nums) {
    const filt = [...new Set(nums)]
    return nums.length/2 <= filt.length ? nums.length/2 : filt.length
}