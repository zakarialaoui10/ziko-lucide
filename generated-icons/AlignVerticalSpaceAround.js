import {tags} from 'ziko';
const {svg} = tags;
const AlignVerticalSpaceAround = (props) => 
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
    tags.rect({"width":"10","height":"6","x":"7","y":"9","rx":"2"}),
	tags.path({"d":"M22 20H2"}),
	tags.path({"d":"M22 4H2"})
    )
export default AlignVerticalSpaceAround;
