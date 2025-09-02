import {tags} from 'ziko';
const {svg} = tags;
const UserX = (props) => 
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
	tags.circle({"cx":"9","cy":"7","r":"4"}),
	tags.line({"x1":"17","x2":"22","y1":"8","y2":"13"}),
	tags.line({"x1":"22","x2":"17","y1":"8","y2":"13"})
    )
export default UserX;
