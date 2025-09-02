import {tags} from 'ziko';
const {svg} = tags;
const NotebookTabs = (props) => 
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
	tags.path({"d":"M15 2v20"}),
	tags.path({"d":"M15 7h5"}),
	tags.path({"d":"M15 12h5"}),
	tags.path({"d":"M15 17h5"})
    )
export default NotebookTabs;
