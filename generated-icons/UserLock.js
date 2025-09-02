import {tags} from 'ziko';
const {svg} = tags;
const UserLock = (props) => 
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
	tags.path({"d":"M15 15.5V14a2 2 0 0 1 4 0v1.5"}),
	tags.rect({"width":"8","height":"5","x":"13","y":"16","rx":".899"})
    )
export default UserLock;
