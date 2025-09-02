import {writeFileSync} from 'fs'
import * as Lucide from 'lucide'
import { children2component } from './utils/index.js'

const defaultProps = JSON.stringify({
    viewBox: "0 0 24 24",
    fill: "none",
    width: 24,
    height: 24,
    stroke: "green",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
}, null, 9)

const generate_component = (Icon_name,items) => {
return `
import {tags} from 'ziko';
const {svg} = tags;
const ${Icon_name} = (props) => 
    svg(
        {
        ...${defaultProps.slice(0,-2)}
        },
        ...props
        },
    ${items}
    )
export default ${Icon_name};
`.trimStart()
}

const NOT_ICONS = ['createElement', 'creatIcons', 'default', 'icons']
const Icons = Object.keys(Lucide).filter(n=>!NOT_ICONS.includes(n))
for(let i=0; i < Icons.length; i++){
    let items = children2component(Lucide[Icons[i]])
    if(items === -1) {
        continue;
    }
    items = items.join(',\n\t')
 writeFileSync(`./generated-icons/${Icons[i]}.js`, generate_component(Icons[i],items))
}

