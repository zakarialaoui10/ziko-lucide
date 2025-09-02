import {tags} from 'ziko';
const {svg} = tags;
const UserX2 = (props) => 
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
    tags.path({"d":"M2 21a8 8 0 0 1 11.873-7"}),
	tags.circle({"cx":"10","cy":"8","r":"5"}),
	tags.path({"d":"m17 17 5 5"}),
	tags.path({"d":"m22 17-5 5"})
    )
export default UserX2;
