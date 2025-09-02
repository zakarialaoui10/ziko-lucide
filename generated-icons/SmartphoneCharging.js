import {tags} from 'ziko';
const {svg} = tags;
const SmartphoneCharging = (props) => 
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
    tags.rect({"width":"14","height":"20","x":"5","y":"2","rx":"2","ry":"2"}),
	tags.path({"d":"M12.667 8 10 12h4l-2.667 4"})
    )
export default SmartphoneCharging;
