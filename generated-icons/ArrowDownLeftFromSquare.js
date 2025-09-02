import {tags} from 'ziko';
const {svg} = tags;
const ArrowDownLeftFromSquare = (props) => 
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
    tags.path({"d":"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6"}),
	tags.path({"d":"m3 21 9-9"}),
	tags.path({"d":"M9 21H3v-6"})
    )
export default ArrowDownLeftFromSquare;
