import {tags} from 'ziko';
const {svg} = tags;
const SquareFunction = (props) => 
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
    tags.rect({"width":"18","height":"18","x":"3","y":"3","rx":"2","ry":"2"}),
	tags.path({"d":"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}),
	tags.path({"d":"M9 11.2h5.7"})
    )
export default SquareFunction;
