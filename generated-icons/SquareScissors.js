import {tags} from 'ziko';
const {svg} = tags;
const SquareScissors = (props) => 
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
    tags.rect({"width":"20","height":"20","x":"2","y":"2","rx":"2"}),
	tags.circle({"cx":"8","cy":"8","r":"2"}),
	tags.path({"d":"M9.414 9.414 12 12"}),
	tags.path({"d":"M14.8 14.8 18 18"}),
	tags.circle({"cx":"8","cy":"16","r":"2"}),
	tags.path({"d":"m18 6-8.586 8.586"})
    )
export default SquareScissors;
