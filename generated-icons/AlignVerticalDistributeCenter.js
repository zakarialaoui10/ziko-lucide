import {tags} from 'ziko';
const {svg} = tags;
const AlignVerticalDistributeCenter = (props) => 
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
    tags.path({"d":"M22 17h-3"}),
	tags.path({"d":"M22 7h-5"}),
	tags.path({"d":"M5 17H2"}),
	tags.path({"d":"M7 7H2"}),
	tags.rect({"x":"5","y":"14","width":"14","height":"6","rx":"2"}),
	tags.rect({"x":"7","y":"4","width":"10","height":"6","rx":"2"})
    )
export default AlignVerticalDistributeCenter;
