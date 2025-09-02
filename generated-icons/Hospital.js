import {tags} from 'ziko';
const {svg} = tags;
const Hospital = (props) => 
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
    tags.path({"d":"M12 7v4"}),
	tags.path({"d":"M14 21v-3a2 2 0 0 0-4 0v3"}),
	tags.path({"d":"M14 9h-4"}),
	tags.path({"d":"M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"}),
	tags.path({"d":"M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"})
    )
export default Hospital;
