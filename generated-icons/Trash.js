import {tags} from 'ziko';
const {svg} = tags;
const Trash = (props) => 
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
    tags.path({"d":"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}),
	tags.path({"d":"M3 6h18"}),
	tags.path({"d":"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})
    )
export default Trash;
