import {tags} from 'ziko';
const {svg} = tags;
const VenusAndMars = (props) => 
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
    tags.path({"d":"M10 20h4"}),
	tags.path({"d":"M12 16v6"}),
	tags.path({"d":"M17 2h4v4"}),
	tags.path({"d":"m21 2-5.46 5.46"}),
	tags.circle({"cx":"12","cy":"11","r":"5"})
    )
export default VenusAndMars;
