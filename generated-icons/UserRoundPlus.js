import {tags} from 'ziko';
const {svg} = tags;
const UserRoundPlus = (props) => 
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
    tags.path({"d":"M2 21a8 8 0 0 1 13.292-6"}),
	tags.circle({"cx":"10","cy":"8","r":"5"}),
	tags.path({"d":"M19 16v6"}),
	tags.path({"d":"M22 19h-6"})
    )
export default UserRoundPlus;
