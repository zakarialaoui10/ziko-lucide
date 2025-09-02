import {tags} from 'ziko';
const {svg} = tags;
const Backpack = (props) => 
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
    tags.path({"d":"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"}),
	tags.path({"d":"M8 10h8"}),
	tags.path({"d":"M8 18h8"}),
	tags.path({"d":"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6"}),
	tags.path({"d":"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"})
    )
export default Backpack;
