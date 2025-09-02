import {tags} from 'ziko';
const {svg} = tags;
const BetweenVerticalEnd = (props) => 
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
    tags.rect({"width":"7","height":"13","x":"3","y":"3","rx":"1"}),
	tags.path({"d":"m9 22 3-3 3 3"}),
	tags.rect({"width":"7","height":"13","x":"14","y":"3","rx":"1"})
    )
export default BetweenVerticalEnd;
