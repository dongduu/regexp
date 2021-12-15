const str = `
010-1234-5678
4012popo@naver.com
https://www.velog/dongduu
hi i'm dongduu
abbcccdddd
`

//const regexp = new RegExp('o','g')
const regexp = /o/gi
console.log(str.match(regexp))