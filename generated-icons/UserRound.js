import {tags} from 'ziko';
const {svg} = tags;
const UserRound = (props) => 
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
    tags.circle({"cx":"12","cy":"8","r":"5"}),
	tags.path({"d":"M20 21a8 8 0 0 0-16 0"})
    )
export default UserRound;
