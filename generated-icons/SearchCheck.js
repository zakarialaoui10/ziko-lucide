import {tags} from 'ziko';
const {svg} = tags;
const SearchCheck = (props) => 
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
    tags.path({"d":"m8 11 2 2 4-4"}),
	tags.circle({"cx":"11","cy":"11","r":"8"}),
	tags.path({"d":"m21 21-4.3-4.3"})
    )
export default SearchCheck;
