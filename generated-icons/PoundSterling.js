import {tags} from 'ziko';
const {svg} = tags;
const PoundSterling = (props) => 
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
    tags.path({"d":"M18 7c0-5.333-8-5.333-8 0"}),
	tags.path({"d":"M10 7v14"}),
	tags.path({"d":"M6 21h12"}),
	tags.path({"d":"M6 13h10"})
    )
export default PoundSterling;
