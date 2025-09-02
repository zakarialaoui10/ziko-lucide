import {tags} from 'ziko';
const {svg} = tags;
const SquareUserRound = (props) => 
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
    tags.path({"d":"M18 21a6 6 0 0 0-12 0"}),
	tags.circle({"cx":"12","cy":"11","r":"4"}),
	tags.rect({"width":"18","height":"18","x":"3","y":"3","rx":"2"})
    )
export default SquareUserRound;
