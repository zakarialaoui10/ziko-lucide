import * as Lucide from "ziko-lucide";
import {Flex, sleep, Random} from 'ziko'


const Icons = Object.keys(Lucide)
let c = Flex().style({
  width : '80vw',
  height : 'auto',
  margin : '10px auto'
}).horizontal(0,0).wrap().gap('10px')

for(let i = 0; Icons.length; i++){
  c.append(Lucide[Icons[i]]({stroke : Random.color()}))
  await sleep(10)
}
