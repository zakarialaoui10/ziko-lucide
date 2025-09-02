import {tags} from 'ziko';
const {svg} = tags;
const Ambulance = (props) => 
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
    tags.path({"d":"M10 10H6"}),
	tags.path({"d":"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"}),
	tags.path({"d":"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"}),
	tags.path({"d":"M8 8v4"}),
	tags.path({"d":"M9 18h6"}),
	tags.circle({"cx":"17","cy":"18","r":"2"}),
	tags.circle({"cx":"7","cy":"18","r":"2"})
    )
export default Ambulance;
