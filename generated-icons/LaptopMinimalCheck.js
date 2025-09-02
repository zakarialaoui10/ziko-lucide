import {tags} from 'ziko';
const {svg} = tags;
const LaptopMinimalCheck = (props) => 
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
    tags.path({"d":"M2 20h20"}),
	tags.path({"d":"m9 10 2 2 4-4"}),
	tags.rect({"x":"3","y":"4","width":"18","height":"12","rx":"2"})
    )
export default LaptopMinimalCheck;
