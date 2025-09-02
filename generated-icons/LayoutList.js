import {tags} from 'ziko';
const {svg} = tags;
const LayoutList = (props) => 
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
    tags.rect({"width":"7","height":"7","x":"3","y":"3","rx":"1"}),
	tags.rect({"width":"7","height":"7","x":"3","y":"14","rx":"1"}),
	tags.path({"d":"M14 4h7"}),
	tags.path({"d":"M14 9h7"}),
	tags.path({"d":"M14 15h7"}),
	tags.path({"d":"M14 20h7"})
    )
export default LayoutList;
