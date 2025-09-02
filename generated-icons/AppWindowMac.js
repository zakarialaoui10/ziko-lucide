import {tags} from 'ziko';
const {svg} = tags;
const AppWindowMac = (props) => 
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
	tags.path({"d":"M6 8h.01"}),
	tags.path({"d":"M10 8h.01"}),
	tags.path({"d":"M14 8h.01"})
    )
export default AppWindowMac;
