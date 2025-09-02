import {tags} from 'ziko';
const {svg} = tags;
const TicketsPlane = (props) => 
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
    tags.path({"d":"M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12"}),
	tags.path({"d":"m12 13.5 3.75.5"}),
	tags.path({"d":"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8"}),
	tags.path({"d":"M6 10V8"}),
	tags.path({"d":"M6 14v1"}),
	tags.path({"d":"M6 19v2"}),
	tags.rect({"x":"2","y":"8","width":"20","height":"13","rx":"2"})
    )
export default TicketsPlane;
