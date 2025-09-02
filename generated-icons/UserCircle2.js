import {tags} from 'ziko';
const {svg} = tags;
const UserCircle2 = (props) => 
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
    tags.path({"d":"M18 20a6 6 0 0 0-12 0"}),
	tags.circle({"cx":"12","cy":"10","r":"4"}),
	tags.circle({"cx":"12","cy":"12","r":"10"})
    )
export default UserCircle2;
