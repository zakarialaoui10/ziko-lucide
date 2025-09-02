import {tags} from 'ziko';
const {svg} = tags;
const Users = (props) => 
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
    tags.path({"d":"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),
	tags.path({"d":"M16 3.128a4 4 0 0 1 0 7.744"}),
	tags.path({"d":"M22 21v-2a4 4 0 0 0-3-3.87"}),
	tags.circle({"cx":"9","cy":"7","r":"4"})
    )
export default Users;
