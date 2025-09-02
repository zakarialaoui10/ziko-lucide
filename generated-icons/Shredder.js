import {tags} from 'ziko';
const {svg} = tags;
const Shredder = (props) => 
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
    tags.path({"d":"M10 22v-5"}),
	tags.path({"d":"M14 19v-2"}),
	tags.path({"d":"M14 2v4a2 2 0 0 0 2 2h4"}),
	tags.path({"d":"M18 20v-3"}),
	tags.path({"d":"M2 13h20"}),
	tags.path({"d":"M20 13V7l-5-5H6a2 2 0 0 0-2 2v9"}),
	tags.path({"d":"M6 20v-3"})
    )
export default Shredder;
