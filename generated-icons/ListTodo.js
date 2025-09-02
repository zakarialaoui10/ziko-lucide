import {tags} from 'ziko';
const {svg} = tags;
const ListTodo = (props) => 
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
    tags.rect({"x":"3","y":"5","width":"6","height":"6","rx":"1"}),
	tags.path({"d":"m3 17 2 2 4-4"}),
	tags.path({"d":"M13 6h8"}),
	tags.path({"d":"M13 12h8"}),
	tags.path({"d":"M13 18h8"})
    )
export default ListTodo;
