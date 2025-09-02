import {tags} from 'ziko';
const {svg} = tags;
const LifeBuoy = (props) => 
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
    tags.circle({"cx":"12","cy":"12","r":"10"}),
	tags.path({"d":"m4.93 4.93 4.24 4.24"}),
	tags.path({"d":"m14.83 9.17 4.24-4.24"}),
	tags.path({"d":"m14.83 14.83 4.24 4.24"}),
	tags.path({"d":"m9.17 14.83-4.24 4.24"}),
	tags.circle({"cx":"12","cy":"12","r":"4"})
    )
export default LifeBuoy;
