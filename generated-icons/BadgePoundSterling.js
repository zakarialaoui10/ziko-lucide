import {tags} from 'ziko';
const {svg} = tags;
const BadgePoundSterling = (props) => 
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
    tags.path({"d":"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}),
	tags.path({"d":"M8 12h4"}),
	tags.path({"d":"M10 16V9.5a2.5 2.5 0 0 1 5 0"}),
	tags.path({"d":"M8 16h7"})
    )
export default BadgePoundSterling;
