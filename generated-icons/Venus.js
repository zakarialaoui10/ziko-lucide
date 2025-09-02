import {tags} from 'ziko';
const {svg} = tags;
const Venus = (props) => 
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
    tags.path({"d":"M12 15v7"}),
	tags.path({"d":"M9 19h6"}),
	tags.circle({"cx":"12","cy":"9","r":"6"})
    )
export default Venus;
