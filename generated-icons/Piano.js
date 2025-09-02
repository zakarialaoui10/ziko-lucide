import {tags} from 'ziko';
const {svg} = tags;
const Piano = (props) => 
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
    tags.path({"d":"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8"}),
	tags.path({"d":"M2 14h20"}),
	tags.path({"d":"M6 14v4"}),
	tags.path({"d":"M10 14v4"}),
	tags.path({"d":"M14 14v4"}),
	tags.path({"d":"M18 14v4"})
    )
export default Piano;
