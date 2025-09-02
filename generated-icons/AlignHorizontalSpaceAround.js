import {tags} from 'ziko';
const {svg} = tags;
const AlignHorizontalSpaceAround = (props) => 
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
    tags.rect({"width":"6","height":"10","x":"9","y":"7","rx":"2"}),
	tags.path({"d":"M4 22V2"}),
	tags.path({"d":"M20 22V2"})
    )
export default AlignHorizontalSpaceAround;
