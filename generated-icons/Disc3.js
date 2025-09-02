import {tags} from 'ziko';
const {svg} = tags;
const Disc3 = (props) => 
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
	tags.path({"d":"M6 12c0-1.7.7-3.2 1.8-4.2"}),
	tags.circle({"cx":"12","cy":"12","r":"2"}),
	tags.path({"d":"M18 12c0 1.7-.7 3.2-1.8 4.2"})
    )
export default Disc3;
