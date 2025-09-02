import {tags} from 'ziko';
const {svg} = tags;
const Lectern = (props) => 
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
    tags.path({"d":"M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3"}),
	tags.path({"d":"M18 6V3a1 1 0 0 0-1-1h-3"}),
	tags.rect({"width":"8","height":"12","x":"8","y":"10","rx":"1"})
    )
export default Lectern;
