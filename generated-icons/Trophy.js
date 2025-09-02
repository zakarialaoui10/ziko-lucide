import {tags} from 'ziko';
const {svg} = tags;
const Trophy = (props) => 
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
    tags.path({"d":"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"}),
	tags.path({"d":"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"}),
	tags.path({"d":"M18 9h1.5a1 1 0 0 0 0-5H18"}),
	tags.path({"d":"M4 22h16"}),
	tags.path({"d":"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"}),
	tags.path({"d":"M6 9H4.5a1 1 0 0 1 0-5H6"})
    )
export default Trophy;
