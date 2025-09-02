import {tags} from 'ziko';
const {svg} = tags;
const UsersRound = (props) => 
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
    tags.path({"d":"M18 21a8 8 0 0 0-16 0"}),
	tags.circle({"cx":"10","cy":"8","r":"5"}),
	tags.path({"d":"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"})
    )
export default UsersRound;
