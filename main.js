const str = `
010-1234-5678
4012popo@naver.com
https://www.velog/dongduu
hi i'm dongduu, DongDuu.
http://www.naver.com
abbcccdddd
동해물과 백두산이_마르고 닳도록
`

console.log(
    str.match(/[him]/g)
)
console.log(
    str.match(/[0-9]{3,}/g)
)
console.log(
    str.match(/[가-힣]{1,}/g)
)


console.log(
    str.match(/\w/g)
)
console.log(
    str.match(/\bh\w{1,}\b/g)
)
console.log(
    str.match(/\d{1,}/g)
)


const h = `   the hello   world   !

`
console.log(
    h.replace(/\s/g, '')
)


console.log(
    str.match(/.{1,}(?=@)/g)
)
console.log(
    str.match(/(?<=@).{1,}/g)
)