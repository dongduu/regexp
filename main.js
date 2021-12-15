const str = `
010-1234-5678
4012popo@naver.com
https://www.velog/dongduu
hi i'm dongduu
abbcccdddd
`

const regexp = /dongduu/gi
console.log(regexp.test(str)) // true 출력
console.log(str.replace(regexp, 'dongju'))
console.log(str)