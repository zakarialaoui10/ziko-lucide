import {tags} from 'ziko';
const {svg} = tags;
const RotateCcwKey = (props) => 
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
    tags.path({"d":"m14.5 9.5 1 1"}),
	tags.path({"d":"m15.5 8.5-4 4"}),
	tags.path({"d":"M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8"}),
	tags.path({"d":"M3 3v5h5"}),
	tags.circle({"cx":"10","cy":"14","r":"2"})
    )
export default RotateCcwKey;
