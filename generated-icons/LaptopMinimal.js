import {tags} from 'ziko';
const {svg} = tags;
const LaptopMinimal = (props) => 
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
    tags.rect({"width":"18","height":"12","x":"3","y":"4","rx":"2","ry":"2"}),
	tags.line({"x1":"2","x2":"22","y1":"20","y2":"20"})
    )
export default LaptopMinimal;
