import {tags} from 'ziko';
const {svg} = tags;
const Chromium = (props) => 
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
    tags.path({"d":"M10.88 21.94 15.46 14"}),
	tags.path({"d":"M21.17 8H12"}),
	tags.path({"d":"M3.95 6.06 8.54 14"}),
	tags.circle({"cx":"12","cy":"12","r":"10"}),
	tags.circle({"cx":"12","cy":"12","r":"4"})
    )
export default Chromium;
