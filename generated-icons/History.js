import {tags} from 'ziko';
const {svg} = tags;
const History = (props) => 
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
    tags.path({"d":"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),
	tags.path({"d":"M3 3v5h5"}),
	tags.path({"d":"M12 7v5l4 2"})
    )
export default History;
