import {tags} from 'ziko';
const {svg} = tags;
const CardSim = (props) => 
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
    tags.path({"d":"M12 14v4"}),
	tags.path({"d":"M14.172 2a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 20 7.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"}),
	tags.path({"d":"M8 14h8"}),
	tags.rect({"x":"8","y":"10","width":"8","height":"8","rx":"1"})
    )
export default CardSim;
