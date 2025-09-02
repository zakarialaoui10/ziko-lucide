import {tags} from 'ziko';
const {svg} = tags;
const SignpostBig = (props) => 
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
    tags.path({"d":"M10 9H4L2 7l2-2h6"}),
	tags.path({"d":"M14 5h6l2 2-2 2h-6"}),
	tags.path({"d":"M10 22V4a2 2 0 1 1 4 0v18"}),
	tags.path({"d":"M8 22h8"})
    )
export default SignpostBig;
