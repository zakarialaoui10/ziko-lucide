import {tags} from 'ziko';
const {svg} = tags;
const UserRoundSearch = (props) => 
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
    tags.circle({"cx":"10","cy":"8","r":"5"}),
	tags.path({"d":"M2 21a8 8 0 0 1 10.434-7.62"}),
	tags.circle({"cx":"18","cy":"18","r":"3"}),
	tags.path({"d":"m22 22-1.9-1.9"})
    )
export default UserRoundSearch;
