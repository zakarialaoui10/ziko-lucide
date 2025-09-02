import {tags} from 'ziko';
const {svg} = tags;
const Blinds = (props) => 
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
    tags.path({"d":"M3 3h18"}),
	tags.path({"d":"M20 7H8"}),
	tags.path({"d":"M20 11H8"}),
	tags.path({"d":"M10 19h10"}),
	tags.path({"d":"M8 15h12"}),
	tags.path({"d":"M4 3v14"}),
	tags.circle({"cx":"4","cy":"19","r":"2"})
    )
export default Blinds;
