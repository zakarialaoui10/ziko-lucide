import {tags} from 'ziko';
const {svg} = tags;
const SaveAll = (props) => 
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
    tags.path({"d":"M10 2v3a1 1 0 0 0 1 1h5"}),
	tags.path({"d":"M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6"}),
	tags.path({"d":"M18 22H4a2 2 0 0 1-2-2V6"}),
	tags.path({"d":"M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z"})
    )
export default SaveAll;
