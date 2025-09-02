import {tags} from 'ziko';
const {svg} = tags;
const UserSearch = (props) => 
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
    tags.circle({"cx":"10","cy":"7","r":"4"}),
	tags.path({"d":"M10.3 15H7a4 4 0 0 0-4 4v2"}),
	tags.circle({"cx":"17","cy":"17","r":"3"}),
	tags.path({"d":"m21 21-1.9-1.9"})
    )
export default UserSearch;
