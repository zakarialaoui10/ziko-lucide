import {tags} from 'ziko';
const {svg} = tags;
const Unlock = (props) => 
    svg(
        {
        ...{
         "viewBox": "0 0 24 24",
         "fill": "none",
         "width": 24,
         "height": 24,
         "stroke": "green",
         "stroke-width": 2,
         "stroke-linecap": "round",
         "stroke-linejoin": "round"
        },
        ...props
        },
    tags.rect({"width":"18","height":"11","x":"3","y":"11","rx":"2","ry":"2"}),
	tags.path({"d":"M7 11V7a5 5 0 0 1 9.9-1"})
    )
export default Unlock;
