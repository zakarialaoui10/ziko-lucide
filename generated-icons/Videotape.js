import {tags} from 'ziko';
const {svg} = tags;
const Videotape = (props) => 
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
    tags.rect({"width":"20","height":"16","x":"2","y":"4","rx":"2"}),
	tags.path({"d":"M2 8h20"}),
	tags.circle({"cx":"8","cy":"14","r":"2"}),
	tags.path({"d":"M8 12h8"}),
	tags.circle({"cx":"16","cy":"14","r":"2"})
    )
export default Videotape;
