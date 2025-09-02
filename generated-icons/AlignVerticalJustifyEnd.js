import {tags} from 'ziko';
const {svg} = tags;
const AlignVerticalJustifyEnd = (props) => 
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
    tags.rect({"width":"14","height":"6","x":"5","y":"12","rx":"2"}),
	tags.rect({"width":"10","height":"6","x":"7","y":"2","rx":"2"}),
	tags.path({"d":"M2 22h20"})
    )
export default AlignVerticalJustifyEnd;
