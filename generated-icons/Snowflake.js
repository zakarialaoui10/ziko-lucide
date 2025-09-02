import {tags} from 'ziko';
const {svg} = tags;
const Snowflake = (props) => 
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
	tags.path({"d":"m14 20 1.25-2.5L18 18"}),
	tags.path({"d":"m14 4 1.25 2.5L18 6"}),
	tags.path({"d":"m17 21-3-6h-4"}),
	tags.path({"d":"m17 3-3 6 1.5 3"}),
	tags.path({"d":"M2 12h6.5L10 9"}),
	tags.path({"d":"m20 10-1.5 2 1.5 2"}),
	tags.path({"d":"M22 12h-6.5L14 15"}),
	tags.path({"d":"m4 10 1.5 2L4 14"}),
	tags.path({"d":"m7 21 3-6-1.5-3"}),
	tags.path({"d":"m7 3 3 6h4"})
    )
export default Snowflake;
