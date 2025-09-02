import {tags} from 'ziko';
const {svg} = tags;
const SplitSquareVertical = (props) => 
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
    tags.path({"d":"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"}),
	tags.path({"d":"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"}),
	tags.line({"x1":"4","x2":"20","y1":"12","y2":"12"})
    )
export default SplitSquareVertical;
