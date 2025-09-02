import {tags} from 'ziko';
const {svg} = tags;
const Shapes = (props) => 
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
    tags.path({"d":"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"}),
	tags.rect({"x":"3","y":"14","width":"7","height":"7","rx":"1"}),
	tags.circle({"cx":"17.5","cy":"17.5","r":"3.5"})
    )
export default Shapes;
