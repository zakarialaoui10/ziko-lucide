import {tags} from 'ziko';
const {svg} = tags;
const Ligature = (props) => 
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
    tags.path({"d":"M14 12h2v8"}),
	tags.path({"d":"M14 20h4"}),
	tags.path({"d":"M6 12h4"}),
	tags.path({"d":"M6 20h4"}),
	tags.path({"d":"M8 20V8a4 4 0 0 1 7.464-2"})
    )
export default Ligature;
