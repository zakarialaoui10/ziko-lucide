import {tags} from 'ziko';
const {svg} = tags;
const TestTube = (props) => 
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
    tags.path({"d":"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"}),
	tags.path({"d":"M8.5 2h7"}),
	tags.path({"d":"M14.5 16h-5"})
    )
export default TestTube;
