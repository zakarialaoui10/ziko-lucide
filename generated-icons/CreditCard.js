import {tags} from 'ziko';
const {svg} = tags;
const CreditCard = (props) => 
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
    tags.rect({"width":"20","height":"14","x":"2","y":"5","rx":"2"}),
	tags.line({"x1":"2","x2":"22","y1":"10","y2":"10"})
    )
export default CreditCard;
