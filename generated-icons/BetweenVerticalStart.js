import {tags} from 'ziko';
const {svg} = tags;
const BetweenVerticalStart = (props) => 
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
    tags.rect({"width":"7","height":"13","x":"3","y":"8","rx":"1"}),
	tags.path({"d":"m15 2-3 3-3-3"}),
	tags.rect({"width":"7","height":"13","x":"14","y":"8","rx":"1"})
    )
export default BetweenVerticalStart;
