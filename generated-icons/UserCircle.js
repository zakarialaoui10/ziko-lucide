import {tags} from 'ziko';
const {svg} = tags;
const UserCircle = (props) => 
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
    tags.circle({"cx":"12","cy":"12","r":"10"}),
	tags.circle({"cx":"12","cy":"10","r":"3"}),
	tags.path({"d":"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"})
    )
export default UserCircle;
