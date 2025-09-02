import {tags} from 'ziko';
const {svg} = tags;
const Wallpaper = (props) => 
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
    tags.path({"d":"M12 17v4"}),
	tags.path({"d":"M8 21h8"}),
	tags.path({"d":"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15"}),
	tags.circle({"cx":"8","cy":"9","r":"2"}),
	tags.rect({"x":"2","y":"3","width":"20","height":"14","rx":"2"})
    )
export default Wallpaper;
