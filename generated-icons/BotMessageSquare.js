import {tags} from 'ziko';
const {svg} = tags;
const BotMessageSquare = (props) => 
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
    tags.path({"d":"M12 6V2H8"}),
	tags.path({"d":"M15 11v2"}),
	tags.path({"d":"M2 12h2"}),
	tags.path({"d":"M20 12h2"}),
	tags.path({"d":"M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"}),
	tags.path({"d":"M9 11v2"})
    )
export default BotMessageSquare;
