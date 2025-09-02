import {tags} from 'ziko';
const {svg} = tags;
const SunSnow = (props) => 
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
    tags.path({"d":"M10 21v-1"}),
	tags.path({"d":"M10 4V3"}),
	tags.path({"d":"M10 9a3 3 0 0 0 0 6"}),
	tags.path({"d":"m14 20 1.25-2.5L18 18"}),
	tags.path({"d":"m14 4 1.25 2.5L18 6"}),
	tags.path({"d":"m17 21-3-6 1.5-3H22"}),
	tags.path({"d":"m17 3-3 6 1.5 3"}),
	tags.path({"d":"M2 12h1"}),
	tags.path({"d":"m20 10-1.5 2 1.5 2"}),
	tags.path({"d":"m3.64 18.36.7-.7"}),
	tags.path({"d":"m4.34 6.34-.7-.7"})
    )
export default SunSnow;
