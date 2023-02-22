
function reverse(string) {
    let notEmpty = '';
    for (i of string) {
        notEmpty = i + notEmpty
    }
    return notEmpty
}
console.log(reverse('May I have your attention please?'))
module.exports = reverse;
