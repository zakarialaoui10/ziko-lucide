import {tags} from 'ziko';
const {svg} = tags;
const Barrel = (props) => 
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
    tags.path({"d":"M10 3a41 41 0 0 0 0 18"}),
	tags.path({"d":"M14 3a41 41 0 0 1 0 18"}),
	tags.path({"d":"M17 3a2 2 0 0 1 1.68.92 15.25 15.25 0 0 1 0 16.16A2 2 0 0 1 17 21H7a2 2 0 0 1-1.68-.92 15.25 15.25 0 0 1 0-16.16A2 2 0 0 1 7 3z"}),
	tags.path({"d":"M3.84 17h16.32"}),
	tags.path({"d":"M3.84 7h16.32"})
    )
export default Barrel;
