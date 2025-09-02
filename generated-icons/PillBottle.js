import {tags} from 'ziko';
const {svg} = tags;
const PillBottle = (props) => 
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
    tags.path({"d":"M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4"}),
	tags.path({"d":"M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"}),
	tags.rect({"width":"16","height":"5","x":"4","y":"2","rx":"1"})
    )
export default PillBottle;
