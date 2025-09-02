import {tags} from 'ziko';
const {svg} = tags;
const TramFront = (props) => 
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
    tags.rect({"width":"16","height":"16","x":"4","y":"3","rx":"2"}),
	tags.path({"d":"M4 11h16"}),
	tags.path({"d":"M12 3v8"}),
	tags.path({"d":"m8 19-2 3"}),
	tags.path({"d":"m18 22-2-3"}),
	tags.path({"d":"M8 15h.01"}),
	tags.path({"d":"M16 15h.01"})
    )
export default TramFront;
