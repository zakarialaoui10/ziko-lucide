import {tags} from 'ziko';
const {svg} = tags;
const Search = (props) => 
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
    tags.path({"d":"m21 21-4.34-4.34"}),
	tags.circle({"cx":"11","cy":"11","r":"8"})
    )
export default Search;
