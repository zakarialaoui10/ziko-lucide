import {tags} from 'ziko';
const {svg} = tags;
const TestTubes = (props) => 
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
    tags.path({"d":"M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2"}),
	tags.path({"d":"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2"}),
	tags.path({"d":"M3 2h7"}),
	tags.path({"d":"M14 2h7"}),
	tags.path({"d":"M9 16H4"}),
	tags.path({"d":"M20 16h-5"})
    )
export default TestTubes;
