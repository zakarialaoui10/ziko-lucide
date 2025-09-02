import {tags} from 'ziko';
const {svg} = tags;
const UserSquare = (props) => 
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
    tags.rect({"width":"18","height":"18","x":"3","y":"3","rx":"2"}),
	tags.circle({"cx":"12","cy":"10","r":"3"}),
	tags.path({"d":"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"})
    )
export default UserSquare;
