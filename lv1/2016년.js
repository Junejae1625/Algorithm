const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
function solution(a, b) {
    const d = new Date()
    d.setFullYear(2016, a-1, b)
    return days[d.getDay()]
}