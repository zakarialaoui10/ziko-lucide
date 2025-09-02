import {tags} from 'ziko';
const {svg} = tags;
const Rainbow = (props) => 
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
    tags.path({"d":"M22 17a10 10 0 0 0-20 0"}),
	tags.path({"d":"M6 17a6 6 0 0 1 12 0"}),
	tags.path({"d":"M10 17a2 2 0 0 1 4 0"})
    )
export default Rainbow;
