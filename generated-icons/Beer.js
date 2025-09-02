import {tags} from 'ziko';
const {svg} = tags;
const Beer = (props) => 
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
    tags.path({"d":"M17 11h1a3 3 0 0 1 0 6h-1"}),
	tags.path({"d":"M9 12v6"}),
	tags.path({"d":"M13 12v6"}),
	tags.path({"d":"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"}),
	tags.path({"d":"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"})
    )
export default Beer;
