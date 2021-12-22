const str = `
010-1234-5678
4012popo@naver.com
https://www.velog/dongduu
hi i'm dongduu, DongDuu.
http://www.naver.com
abbcccdddd
hxyp
`

console.log(
    str.match(/./g)
    //str.match(/h..p/g)
)
console.log(str.match(/4012|popo/g))
console.log(str.match(/https?/g))
console.log(str.match(/d{2}/))
console.log(str.match(/d{2,}/))
console.log(str.match(/d{2,3}/))
console.log(str.match(/d{2}/))
console.log(str.match(/d{2,}/))
console.log(str.match(/\b\w{2,3}\b/g))