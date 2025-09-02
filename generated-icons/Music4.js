import {tags} from 'ziko';
const {svg} = tags;
const Music4 = (props) => 
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
    tags.path({"d":"M9 18V5l12-2v13"}),
	tags.path({"d":"m9 9 12-2"}),
	tags.circle({"cx":"6","cy":"18","r":"3"}),
	tags.circle({"cx":"18","cy":"16","r":"3"})
    )
export default Music4;
