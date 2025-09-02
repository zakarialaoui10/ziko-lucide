import {tags} from 'ziko';
const {svg} = tags;
const ThermometerSnowflake = (props) => 
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
    tags.path({"d":"m10 20-1.25-2.5L6 18"}),
	tags.path({"d":"M10 4 8.75 6.5 6 6"}),
	tags.path({"d":"M10.585 15H10"}),
	tags.path({"d":"M2 12h6.5L10 9"}),
	tags.path({"d":"M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"}),
	tags.path({"d":"m4 10 1.5 2L4 14"}),
	tags.path({"d":"m7 21 3-6-1.5-3"}),
	tags.path({"d":"m7 3 3 6h2"})
    )
export default ThermometerSnowflake;
