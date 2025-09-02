import {tags} from 'ziko';
const {svg} = tags;
const Scale = (props) => 
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
    tags.path({"d":"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}),
	tags.path({"d":"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}),
	tags.path({"d":"M7 21h10"}),
	tags.path({"d":"M12 3v18"}),
	tags.path({"d":"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"})
    )
export default Scale;
