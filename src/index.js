import {ArrowLeftFromLine} from 'lucide'
// import { children2component } from './utils/index.js'
// console.log(ArrowLeftFromLine[0])
console.log(ArrowLeftFromLine)
console.log('.....................................')

const children2component = children => children.map(([key, value])=>`tags.${key}(${JSON.stringify(value)})`)

console.log(children2component(ArrowLeftFromLine))
