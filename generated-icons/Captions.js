import {tags} from 'ziko';
const {svg} = tags;
const Captions = (props) => 
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
    tags.rect({"width":"18","height":"14","x":"3","y":"5","rx":"2","ry":"2"}),
	tags.path({"d":"M7 15h4M15 15h2M7 11h2M13 11h4"})
    )
export default Captions;
