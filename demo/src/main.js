import { Check } from "ziko-lucide/Check";
import { Ban } from "ziko-lucide/Ban";

import {Flex, sleep, Random, tags} from 'ziko'

const c = () =>Check({
  fill : 'none',
  stroke : 'green'
}).style({
  width : 20,
  height : '100%',
  border : '2px green solid',
  borderRadius : '50%',
})

const w = () =>Ban({
  fill : 'none',
  stroke : 'darkred'
}).style({
  width : 20,
  height : 'auto',
})

Flex(c(), 'This is a success alert ').style({
  // background : 'green',
  color : 'green',
  gap : '.5em',
  outline : '2px solid green',
  padding : '.3em',
  width : '200px',
  margin : '10px 0'
})

Flex(w(), 'This is an error alert ').style({
  color : 'darkred',
  gap : '.5em',
  outline : '2px solid darkred',
  padding : '.3em',
  width : '200px',
})


// const Icons = Object.keys(Lucide)
// let c = Flex().style({
//   width : '80vw',
//   height : 'auto',
//   margin : '10px auto'
// }).horizontal(0,0).wrap().gap('10px');
// (async()=>{
//   for(let i = 0; Icons.length; i++){
//     c.append(Lucide[Icons[i]]({stroke : Random.color()}))
//     await sleep(10)
//   }
// })()
