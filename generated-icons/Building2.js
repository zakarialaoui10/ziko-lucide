import {tags} from 'ziko';
const {svg} = tags;
const Building2 = (props) => 
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
    tags.path({"d":"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"}),
	tags.path({"d":"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}),
	tags.path({"d":"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"}),
	tags.path({"d":"M10 6h4"}),
	tags.path({"d":"M10 10h4"}),
	tags.path({"d":"M10 14h4"}),
	tags.path({"d":"M10 18h4"})
    )
export default Building2;
