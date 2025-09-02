import {tags} from 'ziko';
const {svg} = tags;
const CaptionsOff = (props) => 
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
    tags.path({"d":"M10.5 5H19a2 2 0 0 1 2 2v8.5"}),
	tags.path({"d":"M17 11h-.5"}),
	tags.path({"d":"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"}),
	tags.path({"d":"m2 2 20 20"}),
	tags.path({"d":"M7 11h4"}),
	tags.path({"d":"M7 15h2.5"})
    )
export default CaptionsOff;
