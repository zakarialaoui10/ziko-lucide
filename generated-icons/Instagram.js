import {tags} from 'ziko';
const {svg} = tags;
const Instagram = (props) => 
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
    tags.rect({"width":"20","height":"20","x":"2","y":"2","rx":"5","ry":"5"}),
	tags.path({"d":"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),
	tags.line({"x1":"17.5","x2":"17.51","y1":"6.5","y2":"6.5"})
    )
export default Instagram;
