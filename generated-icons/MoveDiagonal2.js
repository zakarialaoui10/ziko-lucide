import {tags} from 'ziko';
const {svg} = tags;
const MoveDiagonal2 = (props) => 
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
    tags.path({"d":"M19 13v6h-6"}),
	tags.path({"d":"M5 11V5h6"}),
	tags.path({"d":"m5 5 14 14"})
    )
export default MoveDiagonal2;
