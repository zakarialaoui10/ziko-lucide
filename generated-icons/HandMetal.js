import {tags} from 'ziko';
const {svg} = tags;
const HandMetal = (props) => 
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
    tags.path({"d":"M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"}),
	tags.path({"d":"M14 11V9a2 2 0 1 0-4 0v2"}),
	tags.path({"d":"M10 10.5V5a2 2 0 1 0-4 0v9"}),
	tags.path({"d":"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"})
    )
export default HandMetal;
