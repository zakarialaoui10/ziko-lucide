import {tags} from 'ziko';
const {svg} = tags;
const FireExtinguisher = (props) => 
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
    tags.path({"d":"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5"}),
	tags.path({"d":"M9 18h8"}),
	tags.path({"d":"M18 3h-3"}),
	tags.path({"d":"M11 3a6 6 0 0 0-6 6v11"}),
	tags.path({"d":"M5 13h4"}),
	tags.path({"d":"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"})
    )
export default FireExtinguisher;
