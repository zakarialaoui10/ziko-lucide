import {tags} from 'ziko';
const {svg} = tags;
const BotOff = (props) => 
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
    tags.path({"d":"M13.67 8H18a2 2 0 0 1 2 2v4.33"}),
	tags.path({"d":"M2 14h2"}),
	tags.path({"d":"M20 14h2"}),
	tags.path({"d":"M22 22 2 2"}),
	tags.path({"d":"M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586"}),
	tags.path({"d":"M9 13v2"}),
	tags.path({"d":"M9.67 4H12v2.33"})
    )
export default BotOff;
