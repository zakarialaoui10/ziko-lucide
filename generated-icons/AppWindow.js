import {tags} from 'ziko';
const {svg} = tags;
const AppWindow = (props) => 
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
    tags.rect({"x":"2","y":"4","width":"20","height":"16","rx":"2"}),
	tags.path({"d":"M10 4v4"}),
	tags.path({"d":"M2 8h20"}),
	tags.path({"d":"M6 4v4"})
    )
export default AppWindow;
