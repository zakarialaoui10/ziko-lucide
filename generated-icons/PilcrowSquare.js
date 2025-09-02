import {tags} from 'ziko';
const {svg} = tags;
const PilcrowSquare = (props) => 
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
	tags.path({"d":"M12 12H9.5a2.5 2.5 0 0 1 0-5H17"}),
	tags.path({"d":"M12 7v10"}),
	tags.path({"d":"M16 7v10"})
    )
export default PilcrowSquare;
