import {tags} from 'ziko';
const {svg} = tags;
const Mouse = (props) => 
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
    tags.rect({"x":"5","y":"2","width":"14","height":"20","rx":"7"}),
	tags.path({"d":"M12 6v4"})
    )
export default Mouse;
