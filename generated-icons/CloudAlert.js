import {tags} from 'ziko';
const {svg} = tags;
const CloudAlert = (props) => 
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
    tags.path({"d":"M12 12v4"}),
	tags.path({"d":"M12 20h.01"}),
	tags.path({"d":"M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708"})
    )
export default CloudAlert;
