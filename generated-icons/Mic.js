import {tags} from 'ziko';
const {svg} = tags;
const Mic = (props) => 
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
    tags.path({"d":"M12 19v3"}),
	tags.path({"d":"M19 10v2a7 7 0 0 1-14 0v-2"}),
	tags.rect({"x":"9","y":"2","width":"6","height":"13","rx":"3"})
    )
export default Mic;
