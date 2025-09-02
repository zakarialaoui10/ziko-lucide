import {tags} from 'ziko';
const {svg} = tags;
const SunMedium = (props) => 
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
    tags.circle({"cx":"12","cy":"12","r":"4"}),
	tags.path({"d":"M12 3v1"}),
	tags.path({"d":"M12 20v1"}),
	tags.path({"d":"M3 12h1"}),
	tags.path({"d":"M20 12h1"}),
	tags.path({"d":"m18.364 5.636-.707.707"}),
	tags.path({"d":"m6.343 17.657-.707.707"}),
	tags.path({"d":"m5.636 5.636.707.707"}),
	tags.path({"d":"m17.657 17.657.707.707"})
    )
export default SunMedium;
