import {tags} from 'ziko';
const {svg} = tags;
const Brackets = (props) => 
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
    tags.path({"d":"M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3"}),
	tags.path({"d":"M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3"})
    )
export default Brackets;
