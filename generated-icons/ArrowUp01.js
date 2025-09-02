import {tags} from 'ziko';
const {svg} = tags;
const ArrowUp01 = (props) => 
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
    tags.path({"d":"m3 8 4-4 4 4"}),
	tags.path({"d":"M7 4v16"}),
	tags.rect({"x":"15","y":"4","width":"4","height":"6","ry":"2"}),
	tags.path({"d":"M17 20v-6h-2"}),
	tags.path({"d":"M15 20h4"})
    )
export default ArrowUp01;
