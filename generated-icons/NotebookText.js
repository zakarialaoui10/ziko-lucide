import {tags} from 'ziko';
const {svg} = tags;
const NotebookText = (props) => 
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
    tags.path({"d":"M2 6h4"}),
	tags.path({"d":"M2 10h4"}),
	tags.path({"d":"M2 14h4"}),
	tags.path({"d":"M2 18h4"}),
	tags.rect({"width":"16","height":"20","x":"4","y":"2","rx":"2"}),
	tags.path({"d":"M9.5 8h5"}),
	tags.path({"d":"M9.5 12H16"}),
	tags.path({"d":"M9.5 16H14"})
    )
export default NotebookText;
