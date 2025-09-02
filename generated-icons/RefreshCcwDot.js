import {tags} from 'ziko';
const {svg} = tags;
const RefreshCcwDot = (props) => 
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
    tags.path({"d":"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),
	tags.path({"d":"M3 3v5h5"}),
	tags.path({"d":"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"}),
	tags.path({"d":"M16 16h5v5"}),
	tags.circle({"cx":"12","cy":"12","r":"1"})
    )
export default RefreshCcwDot;
