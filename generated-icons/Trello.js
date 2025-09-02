import {tags} from 'ziko';
const {svg} = tags;
const Trello = (props) => 
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
    tags.rect({"width":"18","height":"18","x":"3","y":"3","rx":"2","ry":"2"}),
	tags.rect({"width":"3","height":"9","x":"7","y":"7"}),
	tags.rect({"width":"3","height":"5","x":"14","y":"7"})
    )
export default Trello;
