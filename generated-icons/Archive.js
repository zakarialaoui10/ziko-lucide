import {tags} from 'ziko';
const {svg} = tags;
const Archive = (props) => 
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
    tags.rect({"width":"20","height":"5","x":"2","y":"3","rx":"1"}),
	tags.path({"d":"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}),
	tags.path({"d":"M10 12h4"})
    )
export default Archive;
