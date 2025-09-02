import {tags} from 'ziko';
const {svg} = tags;
const Axis3d = (props) => 
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
    tags.path({"d":"M13.5 10.5 15 9"}),
	tags.path({"d":"M4 4v15a1 1 0 0 0 1 1h15"}),
	tags.path({"d":"M4.293 19.707 6 18"}),
	tags.path({"d":"m9 15 1.5-1.5"})
    )
export default Axis3d;
