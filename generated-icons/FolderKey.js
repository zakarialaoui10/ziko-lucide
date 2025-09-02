import {tags} from 'ziko';
const {svg} = tags;
const FolderKey = (props) => 
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
    tags.circle({"cx":"16","cy":"20","r":"2"}),
	tags.path({"d":"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"}),
	tags.path({"d":"m22 14-4.5 4.5"}),
	tags.path({"d":"m21 15 1 1"})
    )
export default FolderKey;
