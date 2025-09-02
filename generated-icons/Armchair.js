import {tags} from 'ziko';
const {svg} = tags;
const Armchair = (props) => 
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
    tags.path({"d":"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"}),
	tags.path({"d":"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"}),
	tags.path({"d":"M5 18v2"}),
	tags.path({"d":"M19 18v2"})
    )
export default Armchair;
