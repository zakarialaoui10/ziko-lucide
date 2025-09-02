import {tags} from 'ziko';
const {svg} = tags;
const WindArrowDown = (props) => 
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
    tags.path({"d":"M10 2v8"}),
	tags.path({"d":"M12.8 21.6A2 2 0 1 0 14 18H2"}),
	tags.path({"d":"M17.5 10a2.5 2.5 0 1 1 2 4H2"}),
	tags.path({"d":"m6 6 4 4 4-4"})
    )
export default WindArrowDown;
