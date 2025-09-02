import {tags} from 'ziko';
const {svg} = tags;
const ConciergeBell = (props) => 
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
    tags.path({"d":"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z"}),
	tags.path({"d":"M20 16a8 8 0 1 0-16 0"}),
	tags.path({"d":"M12 4v4"}),
	tags.path({"d":"M10 4h4"})
    )
export default ConciergeBell;
