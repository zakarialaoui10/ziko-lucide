import {tags} from 'ziko';
const {svg} = tags;
const Network = (props) => 
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
    tags.rect({"x":"16","y":"16","width":"6","height":"6","rx":"1"}),
	tags.rect({"x":"2","y":"16","width":"6","height":"6","rx":"1"}),
	tags.rect({"x":"9","y":"2","width":"6","height":"6","rx":"1"}),
	tags.path({"d":"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}),
	tags.path({"d":"M12 12V8"})
    )
export default Network;
