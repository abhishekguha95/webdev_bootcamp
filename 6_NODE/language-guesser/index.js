import { franc } from 'franc'
import langs from 'langs'


const argsArr = process.argv
let s = ''
for (let i = 2; i < argsArr.length; i++) {
    s = s + argsArr[i] + ' '
}
const langCode = franc(s)
if (langCode === 'und') {
    console.log('Language not determined')
} else {
    console.log(langs.where(3, langCode).name)
}

