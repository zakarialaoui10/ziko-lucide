import {tags} from 'ziko';
const {svg} = tags;
const ToyBrick = (props) => 
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
    tags.rect({"width":"18","height":"12","x":"3","y":"8","rx":"1"}),
	tags.path({"d":"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"}),
	tags.path({"d":"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"})
    )
export default ToyBrick;
