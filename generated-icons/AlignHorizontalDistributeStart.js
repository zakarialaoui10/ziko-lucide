import {tags} from 'ziko';
const {svg} = tags;
const AlignHorizontalDistributeStart = (props) => 
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
    tags.rect({"width":"6","height":"14","x":"4","y":"5","rx":"2"}),
	tags.rect({"width":"6","height":"10","x":"14","y":"7","rx":"2"}),
	tags.path({"d":"M4 2v20"}),
	tags.path({"d":"M14 2v20"})
    )
export default AlignHorizontalDistributeStart;
