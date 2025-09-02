import {tags} from 'ziko';
const {svg} = tags;
const Printer = (props) => 
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
    tags.path({"d":"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),
	tags.path({"d":"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"}),
	tags.rect({"x":"6","y":"14","width":"12","height":"8","rx":"1"})
    )
export default Printer;
