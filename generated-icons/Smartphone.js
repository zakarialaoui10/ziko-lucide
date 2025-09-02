import {tags} from 'ziko';
const {svg} = tags;
const Smartphone = (props) => 
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
    tags.rect({"width":"14","height":"20","x":"5","y":"2","rx":"2","ry":"2"}),
	tags.path({"d":"M12 18h.01"})
    )
export default Smartphone;
