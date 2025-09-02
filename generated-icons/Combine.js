import {tags} from 'ziko';
const {svg} = tags;
const Combine = (props) => 
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
    tags.path({"d":"M10 18H5a3 3 0 0 1-3-3v-1"}),
	tags.path({"d":"M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}),
	tags.path({"d":"M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}),
	tags.path({"d":"m7 21 3-3-3-3"}),
	tags.rect({"x":"14","y":"14","width":"8","height":"8","rx":"2"}),
	tags.rect({"x":"2","y":"2","width":"8","height":"8","rx":"2"})
    )
export default Combine;
