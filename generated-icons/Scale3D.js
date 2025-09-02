import {tags} from 'ziko';
const {svg} = tags;
const Scale3d = (props) => 
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
    tags.path({"d":"M5 7v11a1 1 0 0 0 1 1h11"}),
	tags.path({"d":"M5.293 18.707 11 13"}),
	tags.circle({"cx":"19","cy":"19","r":"2"}),
	tags.circle({"cx":"5","cy":"5","r":"2"})
    )
export default Scale3d;
