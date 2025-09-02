import {tags} from 'ziko';
const {svg} = tags;
const IndentDecrease = (props) => 
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
    tags.path({"d":"M21 12H11"}),
	tags.path({"d":"M21 18H11"}),
	tags.path({"d":"M21 6H11"}),
	tags.path({"d":"m7 8-4 4 4 4"})
    )
export default IndentDecrease;
