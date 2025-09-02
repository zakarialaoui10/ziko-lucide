import {tags} from 'ziko';
const {svg} = tags;
const VectorSquare = (props) => 
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
    tags.path({"d":"M19.5 7a24 24 0 0 1 0 10"}),
	tags.path({"d":"M4.5 7a24 24 0 0 0 0 10"}),
	tags.path({"d":"M7 19.5a24 24 0 0 0 10 0"}),
	tags.path({"d":"M7 4.5a24 24 0 0 1 10 0"}),
	tags.rect({"x":"17","y":"17","width":"5","height":"5","rx":"1"}),
	tags.rect({"x":"17","y":"2","width":"5","height":"5","rx":"1"}),
	tags.rect({"x":"2","y":"17","width":"5","height":"5","rx":"1"}),
	tags.rect({"x":"2","y":"2","width":"5","height":"5","rx":"1"})
    )
export default VectorSquare;
