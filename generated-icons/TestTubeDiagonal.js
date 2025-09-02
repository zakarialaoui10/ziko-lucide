import {tags} from 'ziko';
const {svg} = tags;
const TestTubeDiagonal = (props) => 
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
    tags.path({"d":"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3"}),
	tags.path({"d":"m16 2 6 6"}),
	tags.path({"d":"M12 16H4"})
    )
export default TestTubeDiagonal;
