import {tags} from 'ziko';
const {svg} = tags;
const WholeWord = (props) => 
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
    tags.circle({"cx":"7","cy":"12","r":"3"}),
	tags.path({"d":"M10 9v6"}),
	tags.circle({"cx":"17","cy":"12","r":"3"}),
	tags.path({"d":"M14 7v8"}),
	tags.path({"d":"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"})
    )
export default WholeWord;
