import {tags} from 'ziko';
const {svg} = tags;
const AudioLines = (props) => 
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
    tags.path({"d":"M2 10v3"}),
	tags.path({"d":"M6 6v11"}),
	tags.path({"d":"M10 3v18"}),
	tags.path({"d":"M14 8v7"}),
	tags.path({"d":"M18 5v13"}),
	tags.path({"d":"M22 10v3"})
    )
export default AudioLines;
