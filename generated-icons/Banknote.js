import {tags} from 'ziko';
const {svg} = tags;
const Banknote = (props) => 
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
    tags.rect({"width":"20","height":"12","x":"2","y":"6","rx":"2"}),
	tags.circle({"cx":"12","cy":"12","r":"2"}),
	tags.path({"d":"M6 12h.01M18 12h.01"})
    )
export default Banknote;
