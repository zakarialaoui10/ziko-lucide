import {tags} from 'ziko';
const {svg} = tags;
const SmartphoneNfc = (props) => 
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
    tags.rect({"width":"7","height":"12","x":"2","y":"6","rx":"1"}),
	tags.path({"d":"M13 8.32a7.43 7.43 0 0 1 0 7.36"}),
	tags.path({"d":"M16.46 6.21a11.76 11.76 0 0 1 0 11.58"}),
	tags.path({"d":"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"})
    )
export default SmartphoneNfc;
