import {tags} from 'ziko';
const {svg} = tags;
const BetweenHorizonalEnd = (props) => 
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
    tags.rect({"width":"13","height":"7","x":"3","y":"3","rx":"1"}),
	tags.path({"d":"m22 15-3-3 3-3"}),
	tags.rect({"width":"13","height":"7","x":"3","y":"14","rx":"1"})
    )
export default BetweenHorizonalEnd;
