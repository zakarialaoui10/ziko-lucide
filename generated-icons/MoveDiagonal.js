import {tags} from 'ziko';
const {svg} = tags;
const MoveDiagonal = (props) => 
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
    tags.path({"d":"M11 19H5v-6"}),
	tags.path({"d":"M13 5h6v6"}),
	tags.path({"d":"M19 5 5 19"})
    )
export default MoveDiagonal;
