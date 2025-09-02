import {tags} from 'ziko';
const {svg} = tags;
const DatabaseZap = (props) => 
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
    tags.ellipse({"cx":"12","cy":"5","rx":"9","ry":"3"}),
	tags.path({"d":"M3 5V19A9 3 0 0 0 15 21.84"}),
	tags.path({"d":"M21 5V8"}),
	tags.path({"d":"M21 12L18 17H22L19 22"}),
	tags.path({"d":"M3 12A9 3 0 0 0 14.59 14.87"})
    )
export default DatabaseZap;
