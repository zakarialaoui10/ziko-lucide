import {tags} from 'ziko';
const {svg} = tags;
const Ratio = (props) => 
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
    tags.rect({"width":"12","height":"20","x":"6","y":"2","rx":"2"}),
	tags.rect({"width":"20","height":"12","x":"2","y":"6","rx":"2"})
    )
export default Ratio;
