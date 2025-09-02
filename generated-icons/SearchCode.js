import {tags} from 'ziko';
const {svg} = tags;
const SearchCode = (props) => 
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
    tags.path({"d":"m13 13.5 2-2.5-2-2.5"}),
	tags.path({"d":"m21 21-4.3-4.3"}),
	tags.path({"d":"M9 8.5 7 11l2 2.5"}),
	tags.circle({"cx":"11","cy":"11","r":"8"})
    )
export default SearchCode;
